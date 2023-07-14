import './index.css'
import { App as CommandPaletteApp } from './CommandPaletteApp';
import { App as InsertTextInDocument } from './InsertTextInDocument'
import { App as LightBoxGallery } from './LightBoxGallery';
import { App as LinkPreviewerApp } from './LinkPreviewerApp';
import { App as ReusableModalDemo } from './ReusableModal/ReusableModalDemo';
import { App as SelectAllCheckboxes } from './SelectAllCheckboxes';
import { App as TypeWriterEffect } from './TypeWriterEffect';
import { App as UseOutsideClickDemo } from './useOutsideClick';
import { App as UseKeyPressApp } from './useKeyPress';
import { App as UseLocalStorageApp } from './useLocalStorage';
import { App as FolderStructureApp } from './FolderStructure';

function App() {
  const components = [
    InsertTextInDocument,
    SelectAllCheckboxes,
    UseOutsideClickDemo,
    TypeWriterEffect,
    CommandPaletteApp,
    LinkPreviewerApp,
    ReusableModalDemo,
    LightBoxGallery,
    UseKeyPressApp,
    UseLocalStorageApp,
    FolderStructureApp
  ]
  if (components.length === 0) return null;
  // const SelectedComponent = components[2];
  const SelectedComponent = components[components.length - 1];

  return (
    <>
      <SelectedComponent />
    </>
  )
}

export default App
