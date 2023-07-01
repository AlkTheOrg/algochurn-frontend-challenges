import { FC } from "react";

type Props = {
  texts: string[];
};

export const Document: FC<Props> = ({ texts }) => {
  return (
    <div
      className="
      mt-10 lg:mt-0
      ml-0 lg:ml-10
      w-[400px]
    "
    >
      <p
        className="
        text-lg text-lime font-bold text-gray-800 mb-2
      "
      >
        Document
      </p>
      <div
        className="
        border-sm border-[1.9px] rounded-md border-gray-300
        px-9 py-10
        shadow-md
      "
      >
        {texts.length > 0 ? (
          <ul className="">
            {texts.map((text, i) => (
              <li
                key={i}
                className={`font-semibold text-lg ${
                  i === texts.length - 1
                    ? "ease-out animate-fade-f-blue-t-w"
                    : ""
                }`}
              >
                {text}
              </li>
            ))}
          </ul>
        ) : (
          <p>Added content will show here.</p>
        )}
      </div>
    </div>
  );
};
