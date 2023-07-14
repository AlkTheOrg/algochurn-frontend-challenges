import { useState } from "react";
import { TypeWriter } from "./TypeWriter";

type GenerationStatus = 'idle' | 'running';

const buttonClasses = "text-gray-500 font-bold shadow-lg px-4 py-3 rounded-md border-[.2px] mx-1 hover:bg-gray-100 disabled:bg-gray-100";

const loremIpsum = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis facilis doloremque eaque nulla qui? Adipisci facere, eos iusto inventore ex ut nesciunt distinctio nisi quas qui atque accusantium soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis facilis doloremque eaque nulla qui? Adipisci facere, eos iusto inventore ex ut nesciunt distinctio nisi quas qui atque accusantium soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis facilis doloremque eaque nulla qui? Adipisci facere, eos iusto inventore ex ut nesciunt distinctio nisi quas qui atque accusantium soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis facilis doloremque eaque nulla qui? Adipisci facere, eos iusto inventore ex ut nesciunt distinctio nisi quas qui atque accusantium soluta?";

export const App = () => {
  const [generationStatus, setGenerationStatus] = useState<GenerationStatus>('idle');
  const startGenerating = () => {
    if (generationStatus !== 'running') {
      setGenerationStatus('running');
    }
  };

  const resetGeneration = () => {
    setGenerationStatus('idle');
  };

  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <h1 className="text-4xl font-bold">
        Algochurn: Generate Text On The Go
      </h1>
      <div className="flex mt-6">
        <button
          type="button"
          className={buttonClasses}
          disabled={generationStatus === 'running'}
          onClick={startGenerating}
        >
          Start Generating
        </button>
        <button type="button" className={buttonClasses} onClick={resetGeneration}>
          Reset
        </button>
      </div>
      <TypeWriter
        className={"mt-6 p-4 w-[700px] h-[350px] border-2 overflow-hidden"}
        text={generationStatus === 'idle' ? '' : loremIpsum}
        delay={10}
      />
    </div>
  );
};
