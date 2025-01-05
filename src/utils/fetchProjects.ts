import { client } from '@/utils/sanity';

export async function fetchProjects() {
    const projects = await client.fetch(`*[_type == "Projects"]{
        name,
        link,
        description,
        repo,
        isIfram,
        "display_image": display_image.asset->url
      }
    `);
    return projects;
}
