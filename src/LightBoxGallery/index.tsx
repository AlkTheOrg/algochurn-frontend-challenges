import { useState } from 'react';
import { images } from './images';
import { ReusableModal } from '../ReusableModal';

export const App = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState<null | number>(null);
  return (
    <div className="bg-gradient-to-b from-violet-500 to-fuchsia-200 flex justify-center py-4">
      <ul className="p-2 grid items-start grid-cols-2 md:grid-cols-3 lg:gap-12 gap-4 w-[80%]">
        {images.map((img, i) => <button type="button" key={i}>
          <img
            onClick={() => setSelectedImgIndex(i)}
            src={img}
            alt="Some img"
            className='transition-all hover:brightness-75 border-rose-400 border-2'
          />
        </button>)}      
      </ul>
      <ReusableModal
        isOpen={selectedImgIndex !== null && selectedImgIndex >= 0}
        onClose={() => setSelectedImgIndex(null)}
        customModalClass='flex justify-center'
      >
        <img
          src={images[selectedImgIndex]}
          alt="Some img"
          className='shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] w-[75%]'
        />
      </ReusableModal>
    </div>
  )
}
