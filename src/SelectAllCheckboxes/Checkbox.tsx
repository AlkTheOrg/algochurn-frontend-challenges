import { ChangeEvent, FC } from "react"

type Props = {
  checked: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  label: string,
  id: string
}

export const Checkbox: FC<Props> = ({
  checked,
  onChange,
  label,
  id
}) => {
  return (
    <li className="pb-1">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={id}
      />
      <label className="pl-3" htmlFor={id}>
        {label}
      </label>
    </li>
  )
}
