import './index.css'
import { InsertTextInDocument } from './InsertTextInDocument'
import { SelectAllCheckboxes } from './SelectAllCheckboxes';

function App() {
  const components = [
    InsertTextInDocument,
    SelectAllCheckboxes
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
