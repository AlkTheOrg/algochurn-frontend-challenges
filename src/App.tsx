import './index.css'
import { InsertTextInDocument } from './InsertTextInDocument'

function App() {
  const components = [
    InsertTextInDocument,
  ]
  if (components.length === 0) return null;
  const SelectedComponent = components[components.length - 1];

  return (
    <>
      <SelectedComponent />
    </>
  )
}

export default App
