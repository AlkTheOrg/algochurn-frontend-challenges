import { RefObject, useEffect, useRef } from "react"

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      const target = (e.target) as HTMLElement;
      const mainElement = ref.current;
      if (mainElement && !mainElement.contains(target)) {
        callback();
      }
    };
    document.addEventListener('click', clickListener);
    return () => {
      document.removeEventListener('click', clickListener);
    }
  }, [callback, ref]);
}

export const App = () => {
  const centralDivRef = useRef<HTMLDivElement>(null);
  const callback = () => {
    alert('hello');
  };
  useOutsideClick(centralDivRef, callback);

  return <div className="
    w-screen h-screen
    bg-gradient-to-b from-violet-500 to-fuchsia-500
    flex justify-center items-center
  ">
    <div ref={centralDivRef} className="
      py-12 px-5 rounded-lg text-white font-bold text-lg select-none
      bg-gradient-to-r from-blue-500 to-cyan-500 text-center
    ">
      Click Outside To alert()
    </div>
  </div>
}
