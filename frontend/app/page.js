import axios from "axios";


async function getHomePageData() {
  return await axios.get("http://localhost:1337/api/home").then(res => res.data.data.attributes)
}

export default async function Home() {
  let response = await getHomePageData()
  let { title, description } = response
  return (
    <>
      <h1 className="text-xl">
        {title}
      </h1>
      <h4>
        {description}
      </h4>
    </>
  );
}
