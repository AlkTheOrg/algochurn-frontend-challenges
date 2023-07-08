import { FC } from "react";

type Props = {
  headerText: string
}

export const SamePageWithHeader: FC<Props> = ({ headerText }) => {
  return (
    <div className={`
        w-screen h-screen flex items-center justify-center flex-col
        bg-gradient-to-b from-violet-500 to-fuchsia-500
        text-white text-lg text-center
    `}>
      <h1 className="md:text-6xl text-4xl font-semibold">{headerText}</h1>
      <p className="mt-8">This is a global search solution of algochurn.com</p>
      <p className="mt-8">
        <span className="bg-slate-800 px-1.5 py-0.5 rounded">CMD+K</span> opens a Search Modal to navigate through website pages.
      </p>
      <p className="mt-8">
        <span className="bg-slate-800 px-1.5 py-0.5 rounded">ESC</span> closes the Modal.
      </p>
      <p className="mt-8 font-bold">Clicking outside closes the modal as well.</p>
    </div>
  );
};
