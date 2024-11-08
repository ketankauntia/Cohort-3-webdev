export const Input = ({ disabled, children, onClick, type, placeholder }) => {
  return (
    <span
      onClick={onClick}
      className={`m-4 rounded-2xl text-4xl px-8 py-4 text-white  cursor-pointer bg-blue-500`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="bg-blue-500 outline-none "
      ></input>
    </span>
  );
};
