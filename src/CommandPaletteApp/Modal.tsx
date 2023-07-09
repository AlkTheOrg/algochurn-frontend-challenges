import { FC, ReactNode, useEffect, useRef } from "react"

type Props = {
  isOpen: boolean,
  children: ReactNode,
  onClose: () => void
}

export const Modal: FC<Props> = ({
  isOpen,
  children,
  onClose
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listenClickOutside = (e: MouseEvent) => {
      const target = (e.target) as HTMLElement;
      if (isOpen && modalRef.current && !modalRef.current.contains(target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('click', listenClickOutside);
    return () => document.removeEventListener('click', listenClickOutside);
  }, [isOpen, onClose])

  const displayStyle = isOpen ? 'block' : 'hidden';
  return (
    <div className={`
      h-screen bg-indigo-700/[.5] ${displayStyle}
      absolute m-auto left-0 right-0 top-0
      flex justify-center align-middle items-center
    `}>
      <div ref={modalRef} className="w-50 h-50">
        {children}
      </div>
    </div>
  )
}
