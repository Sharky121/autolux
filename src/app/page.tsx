import { features } from "@/data/features";
import Welcome from "@/components/welcome/welcome";
import Features from "@/components/features/features";
import Partners from "@/components/partners/partners";
import CallbackSection from "@/components/callback-section/callback-section";

export default async function Home() {

  return (
    <>
      <Welcome />
      <Features title="Рефрижераторные перевозки" subtitle="Не просто транспорт, а решение для вашего бизнеса!" isDesc={false} data={features}/>
      <Partners />
      <CallbackSection />
    </>
  );
}
