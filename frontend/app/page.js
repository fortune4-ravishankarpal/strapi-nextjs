import { HeroSection } from "@/components/custom/HeroSection";
import { getHomePageData } from "@/lib/callApi";

export default async function Home() {
  let response = await getHomePageData()
  console.dir(response, { depth: null });

  return (
    <>
      <HeroSection data={response.blocks[0]} ></HeroSection>
    </>
  );
}
