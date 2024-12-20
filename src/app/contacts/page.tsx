import HeadSection from "@/components/head-section/head-section";
import styles from "./contacts.module.scss";
import CallbackSection from "@/components/callback-section/callback-section";

async function getData() {
  const response = await fetch(`${process.env.HOST}/api/page-data`);

  if (!response.ok) {
      throw new Error('Failed to fetch data')
  }

  return response.json();
}

export default async function Page() {
  const pages= await getData();

  const page = pages.find((item: { slug: string; }) => item.slug === 'contacts');

  return (
    <>
        <HeadSection type="contacts" data={page}/>
        <CallbackSection />
    </>
  );
}