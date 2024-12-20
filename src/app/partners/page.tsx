import HeadSection from "@/components/head-section/head-section";
import AdvantagesSection from "@/components/advantages-section/advantages-section";
import { partnersAdvantagesData } from "@/data/partners-advantages-data";

async function getData() {
  const response = await fetch(`${process.env.HOST}/api/page-data`);

  if (!response.ok) {
      throw new Error('Failed to fetch data')
  }

  return response.json();
}

export default async function Page() {
  const pages= await getData();

  const page = pages.find((item: { slug: string; }) => item.slug === 'partners');

  return (
    <>
      <HeadSection type="partners" data={page}/>
      <AdvantagesSection title="Преимущества работы с нами" type="partners" data={partnersAdvantagesData}/>
    </>
  );
}