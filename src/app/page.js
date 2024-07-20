import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/card";
import { Button } from "@/components/button";

export default function Home() {
  const students = [
    { name: "Miftah MD", age: 30, gender: "male" },
    { name: "Mafaaza", age: 6, gender: "female" },
    { name: "Mu'ammar", age: 10, gender: "male" },
    { name: "Mahreen", age: 4, gender: "female" },
    { name: "Muhajir", age: 2, gender: "male" },
  ];

  return (
    <div>
      <Header />
      <main className="grid grid-cols-3 gap-4">
        {students.map((student) => {
          return <Card key={student.name} {...student} />;
        })}
      </main>
      <Button>
        <div>+</div>
        <div>Submit</div>
      </Button>
      <Button variant="secondary">
        <div>+</div>
        <div>Submit Secondary</div>
      </Button>
      <Footer />
    </div>
  );
}
