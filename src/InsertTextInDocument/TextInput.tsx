import { ChangeEvent, FC, FormEvent, useEffect, useRef } from "react"

type Props = {
  placeholder?: string,
  text: string,
  onChange: (newText: string) => void,
  onSubmit: () => void
}

export const TextInput: FC<Props> = ({
  placeholder,
  text,
  onChange,
  onSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="
        block border-gray-300 border-[0.8px] rounded-md
        py-5 px-2 bg-white shadow-lg
        mt-8
      ">
        <input
          className="
            placeholder-gray-500 placeholder:font-semibold
            focus:outline-none
            px-3 py-1 w-[400px] h-[100px]
          "
          ref={inputRef}
          value={text}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </label>
    </form>
  )
}

TextInput.defaultProps = {
  placeholder: 'Enter your text here...'
}
