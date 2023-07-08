import { Dispatch, FC, ReactNode, RefObject, SetStateAction } from "react"

export type SearchContent = {
  text: string,
  icon?: string,
  id: string
}

type Props = {
  inputRef: RefObject<HTMLInputElement>,
  searchInput: string,
  setSearchInput: Dispatch<SetStateAction<string>>,
  children: ReactNode
}

export const Search: FC<Props> = ({
  inputRef,
  children,
  searchInput,
  setSearchInput
}) => {

  return (
    <div className={`
      bg-gray-800 text-white p-5 rounded-lg md:min-w-[500px] min-w-[350px]
      text-center
    `}>
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        placeholder="Search for your destination page"
        className={`
          w-full border-none bg-gray-800 outline-none
          px-2 py-1
        `}
        ref={inputRef}
      />
      {children}
    </div>
  )
}
