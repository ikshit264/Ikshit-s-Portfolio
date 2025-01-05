import { client } from "@/utils/sanity";

function getRandomOrder() {
  const random = Math.floor(Math.random() * 100) + 1;

  switch (random % 5) {
    case 1:
      return "name asc";
    case 2:
      return "_rev asc";
    case 3:
      return "color asc";
    case 4:
      return "size asc";
    case 5:
      return "_id asc";
    default:
      return "name desc";
  }
}

export async function fetchSkills() {
  const order = getRandomOrder();

  const skills = await client.fetch(`
    *[_type == "skills"]{
      _id,
      _rev,
      name,
      icon_name,
      color,
      size,
      position,
    } | order(${order})
  `);

  return skills;
}
