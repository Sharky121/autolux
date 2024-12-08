import HeadSection from "@/components/head-section/head-section";
import Features from "@/components/features/features";
import CargoSection from "@/components/cargo-section/cargo-section";
import Partners from "@/components/partners/partners";

import { features } from "@/data/features";
import { guarantees } from "@/data/guarantees-data";

import styles from "./transportation.module.scss";

async function getData() {
  const response = await fetch(`${process.env.HOST}/api/page-data`);

  if (!response.ok) {
      throw new Error('Failed to fetch data')
  }

  return response.json();
}

export default async function Page() {
  const pages= await getData();

  const page = pages.find((item: { slug: string; }) => item.slug === 'transportation');

  return (
    <>
        <HeadSection type="transportation" data={page} />
        <Features title="Преимущества" isDesc={true} data={features} />
        <CargoSection />
        <Features title="Гарантии надежности" isDesc={false} data={guarantees} />
        <Partners />
    </>

  );
}