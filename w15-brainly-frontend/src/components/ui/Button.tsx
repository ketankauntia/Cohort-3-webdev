// anyone who is wanting to create a button needs to use this ButtonProps interface to define/pass values to declare that button in this project.

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any; //question mark for optional
  endIcon?: any;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (props.variant === "primary") ? (
    <button
      className={`flex m-2 px-3 py-2 rounded rounded-${props.size} text-white bg-purple-700 text-${props.size} justify-center items-center`}
    >
      <span className="mr-1"> {props.startIcon}</span>
      <span>{props.text}</span>
    </button>
  ) : (
    <button
      className={`flex m-2 px-3 py-2 rounded rounded-${props.size} text-purple bg-purple-300 text-purple-900 text-${props.size} justify-center items-center`}
    >
      <span className="mr-1"> {props.startIcon}</span>
      <span>{props.text}</span>
      <span>{props.endIcon}</span>
    </button>
  );
};

{
  /*  */
}
