import ContactsFeedback from "@/components/contacts-feedback/contacts-feedback";
import HeadSection from "@/components/head-section/head-section";
// import Map from "@/components/ymap/ymap";

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
        <ContactsFeedback />
        {/* <Map/> */}
    </>
  );
}