import { CommandPaletteApp } from './CommandPaletteApp';
import './index.css'
import { InsertTextInDocument } from './InsertTextInDocument'
import { LightBoxGallery } from './LightBoxGallery';
import { App as LinkPreviewerApp } from './LinkPreviewerApp';
import { App as ReusableModalDemo } from './ReusableModal/ReusableModalDemo';
import { SelectAllCheckboxes } from './SelectAllCheckboxes';
import { TypeWriterEffect } from './TypeWriterEffect';
import { UseOutsideClickDemo } from './useOutsideClick';
import { App as UseKeyPressApp } from './useKeyPress';
import { App as UseLocalStorageApp } from './useLocalStorage';

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
    UseLocalStorageApp
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
