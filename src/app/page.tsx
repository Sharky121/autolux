import CalculationForm from "@/components/calculation-form/calculation-form";
import Container from "@/components/container/container";
import Features from "@/components/features/features";
import Partners from "@/components/partners/partners";
import { features } from "@/data/features";

export default async function Home() {

  return (
    <>
      <Features title="Рефрижераторные перевозки" subtitle="Не просто транспорт, а решение для вашего бизнеса!" isDesc={false} data={features}/>
      <Partners />

      <section style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <Container>
          <CalculationForm />
        </Container>
      </section>
    </>
  );
}
