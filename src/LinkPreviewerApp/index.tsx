import { LinkPreviewer } from "./LinkPreviewer"

export const App = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-red-100 font-bold text-2xl">
      <LinkPreviewer url="https://github.com/microlinkhq" urlAlt="Alternative text">
        Hover Me
      </LinkPreviewer>
    </div>
  )
}
