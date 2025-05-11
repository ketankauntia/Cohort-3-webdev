interface TextInputProps {
  placeholder: string;
}

export function TextInput({ placeholder }: TextInputProps) {
  return <input placeholder={placeholder}></input>;
}
