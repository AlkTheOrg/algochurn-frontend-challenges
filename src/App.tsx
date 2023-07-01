import './index.css'
import { InsertTextInDocument } from './InsertTextInDocument'
import { SelectAllCheckboxes } from './SelectAllCheckboxes';
import { UseOutsideClickDemo } from './useOutsideClick';

function App() {
  const components = [
    InsertTextInDocument,
    SelectAllCheckboxes,
    UseOutsideClickDemo
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
