import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "2vzjqmig",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => {
    return builder.image(source);
}


export const calculateDaysAgo = (date: string) => {
    return Math.floor(
        (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
    ) > 0
        ? Math.floor(
            (new Date().getTime() - new Date(date).getTime()) /
            (1000 * 60 * 60 * 24)
        ) + " gün önce"
        : "Bugün";
};