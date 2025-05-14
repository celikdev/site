import { PortableText, type SanityDocument } from "next-sanity";

import { calculateDaysAgo, client, urlFor } from "@/app/sanity";

import { Metadata } from "next";

const POST_QUERY = `*[_type == "proje" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

type Props = {
  params: { slug: string };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
//   return {
//     title: `${post.title} - NeraDev Projects`,
//     description: post.excerpt,
//     openGraph: {
//       title: `${post.title} - NeraDev Projects`,
//       description: post.excerpt,
//       images: [
//         {
//           url: urlFor(post.image).url(),
//           width: 800,
//           height: 600,
//           alt: post.title,
//         },
//       ],
//     },
//   };
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  //   const { slug } = params;

  console.log("Post fetched:", post);
  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-secondary dark:text-tertiary">
          Post not found
        </h1>
      </div>
    );
  }

  const mySerializers = {
    types: {
      image: ({ value }: any) => (
        <div className="flex flex-col items-center gap-4 my-8">
          <a
            href={urlFor(value).url()}
            target="_blank"
            className="mx-auto w-1/2"
            rel="noopener noreferrer"
          >
            <img
              src={urlFor(value).url()}
              alt={value.alt || "Image"}
              className="object-contain rounded-xl"
            />
          </a>
          <p className="italic">{value.caption || "Image Caption"}</p>
        </div>
      ),
    },
  };

  return (
    <>
      <main className="container md:mx-auto overflow-y-auto text-secondary dark:!text-tertiary gap-10 md:px-40 p-8 flex flex-col md:my-20">
        <BlogHeader post={post} />
        <hr className="border-secondary/50 dark:text-tertiary/50 border-[1px]" />
        <div>
          {post.cover_image && (
            <img
              src={urlFor(post.cover_image).url()}
              alt={post.title}
              className="aspect-video rounded-xl w-full"
            />
          )}
        </div>
        <div className="prose prose-headings:text-secondary dark:prose-headings:text-tertiary prose-strong:text-secondary  dark:prose-strong:text-tertiary  prose-lg text-secondary dark:text-tertiary flex flex-col mx-auto">
          {Array.isArray(post.content) && (
            <PortableText
              value={post.content}
              components={mySerializers} // Resimleri işlemek için serializers ekledik
            />
          )}
        </div>
        <hr className="border-secondary/50 dark:border-tertiary/50 border-[1px]" />
        <ShareBlog path={post.slug.current} title={post.title} />
      </main>
    </>
  );
}

const BlogHeader = ({ post }: any) => {
  return (
    <div className="flex flex-col items-start gap-4 transition-colors duration-300">
      <span className="flex w-full gap-1">
        {post?.tags &&
          post.tags.map((tag: string, index: number) => (
            <span className="text-xs font-medium bg-[#F0FFFF] text-primary px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
      </span>
      <h1 className="md:text-7xl text-2xl font-bold md:mb-8 text-secondary dark:text-tertiary">
        {post.title}
      </h1>
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-cyan-400 border-2 md:w-10 md:h-10 w-8 h-8" />
          <span className="flex items-center gap-4">
            <h1 className="underline underline-offset-2 text-secondary dark:text-tertiary md:text-sm text-xs">
              {post.author}
            </h1>
            <p className="md:text-2xl text-xl text-secondary dark:text-tertiary">
              •
            </p>
            <p className="md:text-sm text-xs text-secondary dark:text-tertiary">
              {calculateDaysAgo(post.publishedAt)}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

const ShareBlog = ({ path, title }: { path?: string; title?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 transition-colors duration-300">
      <h1 className="text-sm text-tertiary ">Herkese bu yazıyı ulaştırın!</h1>
      {/* <span className="flex items-center justify-center gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?text=${title}&url=https://routewise.tech/blog/${path}`}
          >
            <TwitterLogoIcon
              width={40}
              height={40}
              className="text-secondary dark:text-tertiary transform transition-all hover:scale-110 duration-300 hover:text-primary"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://routewise.tech/blog/${path}`}
          >
            <LinkedinIcon
              width={40}
              height={40}
              className="fill-secondary dark:fill-tertiary transform transition-all hover:scale-110 duration-300 hover:fill-primary"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.facebook.com/sharer/sharer.php?u=https://routewise.tech/blog/${path}`}
          >
            <FacebookIcon
              width={40}
              height={40}
              className="fill-secondary dark:fill-tertiary transform transition-all hover:scale-110 duration-300 hover:fill-primary"
            />
          </a>
        </span> */}
      <input
        type="text"
        readOnly
        className="bg-[#F0FFFF] text-primary px-4 py-2 rounded-full w-full md:w-1/2 text-center"
      />
    </div>
  );
};
