import Features from "@/components/features/features";
import Partners from "@/components/partners/partners";
import CallbackSection from "@/components/callback-section/callback-section";
import { features } from "@/data/features";

import styles from './page.module.css';

export default async function Home() {

  return (
    <>
      <Features title="Рефрижераторные перевозки" subtitle="Не просто транспорт, а решение для вашего бизнеса!" isDesc={false} data={features}/>
      <Partners />
      <CallbackSection />
    </>
  );
}
