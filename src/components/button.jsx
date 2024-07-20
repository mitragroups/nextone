export const Button = ({ variant, children }) => {
  if (variant === "secondary") {
    return (
      <button className="bg-transparent border border-indigo-600 flex justify-center gap-2 text-indigo-600 p-2 rounded-xl">
        {children}
      </button>
    );
  }

  return (
    <button className="bg-indigo-600 flex justify-center gap-2 text-white p-2 rounded-xl">
      {children}
    </button>
  );
};
