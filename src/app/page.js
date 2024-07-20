import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/card";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Card name="Miftah MD" age={30} gender="male" />
        <Card name="Mahreen" age={4} gender="female" />
      </main>
      <Footer />
    </div>
  );
}
