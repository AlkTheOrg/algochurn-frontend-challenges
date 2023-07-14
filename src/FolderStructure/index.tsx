import { FC, useState } from "react";
import { File as FileType, files } from "./files";
import Icon from "./Icon";

const File: FC<FileType> = ({ isFolder, name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    if (isFolder) setIsOpen(prev => !prev);
  }
const iconName = isFolder
  ? isOpen
    ? 'caretRight'
    : 'caretDown'
  : name.split('.')[1];

  return (
    <div>
      <div
        className={`cursor-pointer ${isFolder ? 'hover:bg-red-100' : ''}`}
        onClick={handleOpen}
      >
        <Icon
          name={iconName}
          style={{ height: '12px', marginRight: '4px', flexShrink: 0, display: 'inline-block' }}
        />
        {name}
      </div>
      {isOpen && isFolder && children && (
        <div className="ml-4">
          {children.map((c) => (
            <File isFolder={c.isFolder} name={c.name} children={c.children} />
          ))}
        </div>
      )}
    </div>
  );
};

const SideBar: FC<Record<string, never>> = () => {
  const { isFolder, name, children } = files;
  return (
    <div className="">
      <File isFolder={isFolder} name={name} children={children} />
    </div>
  );
};

export const App = () => {
  return <SideBar />;
};
