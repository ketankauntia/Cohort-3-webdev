export const Button = ({ disabled, children, onClick, variant }) => {
  return (
    <span
      onClick={onClick}
      className={`rounded-xl text-xl px-20 py-2 text-white  cursor-pointer ${
        disabled ? "bg-blue-200" : "bg-green-400"
      } m-1`}
    >
      {children}
    </span>
  );
};
