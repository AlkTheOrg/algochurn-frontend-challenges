import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Modal } from "./Modal";
import { Search, SearchContent } from "./Search";
import { Link } from "react-router-dom";

type Props = {
  content: SearchContent[]
}

export const CommandPalette: FC<Props> = ({ content }) => {
  const [searchInput, setSearchInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const toggleModal = () => setIsModalOpen(prev => !prev);

  useEffect(() => {
    const modalOpenListener = (e: KeyboardEvent) => {
      if ((e.key === 'K' || e.key === 'k') && e.ctrlKey) {
        e.preventDefault();
        toggleModal();
      } else if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', modalOpenListener)
    return () => {
      document.removeEventListener('keydown', modalOpenListener);
    }
  }, [])

  useEffect(() => {
    if (isModalOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isModalOpen])
  
  useEffect(() => {
    if (!isModalOpen) setSearchInput('');
  }, [isModalOpen])
  
  const filteredContent = useMemo(() => 
  content.filter(c => c.text.toLowerCase().startsWith(searchInput.toLowerCase()))
, [content, searchInput])


  return (<>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} inputRef={searchInputRef}>
        <div className="text-left">
          <p className="text-gray-400 text-sm mt-8 px-3">Algochurn Pages</p>
          <ul className="mt-2">
            {filteredContent.map(({ text, icon, id }) => <li
              key={id}
              onClick={toggleModal}
            >
              <Link
                to={`/${text.toLowerCase()}`}
                className="hover:bg-gray-700 block px-3 py-2 rounded-lg"
              >
                {text}
              </Link>
            </li>)}
          </ul>
        </div>
      </Search>
    </Modal>
  </>)
}
