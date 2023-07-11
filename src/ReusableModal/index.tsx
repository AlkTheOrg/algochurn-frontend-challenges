import { FC, ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode,
  isOpen: boolean,
  onClose: () => void,
  customModalClass?: string
}

export const ReusableModal: FC<Props> = ({ isOpen, onClose, children, customModalClass }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={`
      h-screen w-screen bg-black/[.5] fixed
      flex justify-center align-middle items-center
    `}>
      <div ref={modalRef} className={customModalClass || ''}>
        {children}
      </div>
    </div>,
    document.querySelector('#portal-container') as HTMLDivElement
  );
};
