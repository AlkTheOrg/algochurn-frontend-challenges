import { useState } from 'react';
import { Document } from './Document';
import { TextInput } from './TextInput';

export const InsertTextInDocument = () => {
  const [textInput, setTextInput] = useState('');
  const [allTexts, setAllTexts] = useState<string[]>([]);
  const handleTextInputChange = (newText: string) => setTextInput(newText);
  const handleTextSubmission = () => {
    if (textInput) {
      setTextInput('');
      setAllTexts(prev => [...prev, textInput]);
    }
  }
  
  return (
    <div className='
      flex flex-col justify-center items-center
      mt-5 p-2
      lg:flex-row lg:items-start
    '>
      <TextInput
        text={textInput}
        onChange={handleTextInputChange}
        onSubmit={handleTextSubmission}
      />
      <Document texts={allTexts} />
    </div>
  );
}
