export const Card = ({ name, age, gender }) => {
  if (gender === "male") {
    return (
      <main className="bg-rose-200 text-rose-600">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Gender: {gender}</div>
      </main>
    );
  }

  return (
    <main className="bg-blue-200 text-blue-600">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Gender: {gender}</div>
    </main>
  );
};
