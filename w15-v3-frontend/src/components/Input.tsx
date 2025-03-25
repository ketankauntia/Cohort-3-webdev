interface InputProps{
  placeholder: string; 
  reference?: any;
}

export function Input({ reference, placeholder }:InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 border rounded m-2 min-w-80"
        ref={reference}
      ></input>
    </div>
  );
}
