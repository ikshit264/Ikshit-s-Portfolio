import { client } from "@/utils/sanity";

export async function fetchExperience() {
  const Experience = await client.fetch(`*[_type == "Experience"]{
        _id,
        title,
        list,
        points
      }
    `);
  return Experience;
}
