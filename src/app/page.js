import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/card";

export default function Home() {
  const students = [
    { name: "Miftah MD", age: 30, gender: "male" },
    { name: "Mafaaza", age: 6, gender: "female" },
    { name: "Mu'ammar", age: 10, gender: "male" },
    { name: "Mahreen", age: 4, gender: "female" },
  ];

  return (
    <div>
      <Header />
      <main>
        {students.map((student) => {
          return (
            <Card
              key={student.name}
              name={student.name}
              age={student.age}
              gender={student.gender}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
