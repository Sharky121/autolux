import { driversAdvantagesData } from "@/data/drivers-advantages";

import HeadSection from "@/components/head-section/head-section";
import AdvantagesSection from "@/components/advantages-section/advantages-section";
import DriverFeatures from "@/components/drivers-features/drivers-features";

async function getData() {
  const response = await fetch(`${process.env.HOST}/api/page-data`);

  if (!response.ok) {
      throw new Error('Failed to fetch data')
  }

  return response.json();
}

export default async function Page() {
  const pages= await getData();

  const page = pages.find((item: { slug: string; }) => item.slug === 'driver');

  return (
    <>
      <HeadSection type="drivers" data={page}/>
      <AdvantagesSection title="Преимущества работы в нашей компании" type="drivers" data={driversAdvantagesData}/>
      <DriverFeatures />
    </>
  );
}