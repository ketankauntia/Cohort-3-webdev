interface InputProps{
  placeholder: string; 
  ref?: any;
}

export function Input({ ref, placeholder }:InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 border rounded m-2 min-w-80"
        ref={ref}
      ></input>
    </div>
  );
}
