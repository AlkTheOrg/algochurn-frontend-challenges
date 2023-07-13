import { useEffect, useState } from "react"

const useKeyPress = (key: string) => {
  const [keyIsPressed, setKeyIsPressed] = useState(false);
  useEffect(() => {
    const keyListener = (isListeningForKeyUp = false) => (e: KeyboardEvent) => {
      if (e.key !== key) return;
      setKeyIsPressed(isListeningForKeyUp ? false : true);        
    }

    document.addEventListener('keydown', keyListener())
    document.addEventListener('keyup', keyListener(true))
    return () => {
      document.removeEventListener('keydown', keyListener());
      document.addEventListener('keyup', keyListener(true))
    }
  }, [key])
  return keyIsPressed;
}

export const App = () => {
  const shiftKey = useKeyPress('Shift');
  const enterKey = useKeyPress('Enter');
  return (
    (shiftKey && enterKey) ? <h1>You did it!</h1> : <h1>Press Shift + Enter</h1>
  )
}
