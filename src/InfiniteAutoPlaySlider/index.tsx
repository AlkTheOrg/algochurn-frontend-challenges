import { InfiniteAutoPlaySlider } from "./InfiniteAutoPlaySlider";

export const App = () => {
  return (
    <div className={`
      bg-gradient-to-b from-violet-500 to-fuchsia-500
      h-screen flex justify-center items-center
    `}>
      <InfiniteAutoPlaySlider>
        alkan
      </InfiniteAutoPlaySlider>
    </div>
  )
};
