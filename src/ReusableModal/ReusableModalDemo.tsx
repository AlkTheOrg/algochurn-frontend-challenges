import { useState } from 'react'
import { ReusableModal } from '.';

export const ReusableModalDemo = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button
        type="button"
        className="cursor-pointer bg-black text-white p-24 text-6xl rounded-xl"
        onClick={() => setIsOpen(true)}
      >
        Click!
      </button>
      <ReusableModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="text-white text-2xl bg-violet-700 py-6 px-12 rounded-md text-center">
          <div className="">Press <span className="bg-gray-800 px-2 py-0.5 text-lg text-gray-100 font-semibold">Esc</span></div>
          or
          <div className=""><span className="font-bold text-gray-100">outside</span> to close.</div>
        </div>
      </ReusableModal>
    </div>
  )
}
