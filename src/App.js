import { useState } from "react";

export default function EditContent() {
  const [content, setContent] = useState('');

  function handleInput(e) {
    // setContent('');
    setContent(e.target.value);
  }

  function convertToLowerCase() {
    setContent(content.toLowerCase());
  }

  function convertToUpperCase() {
    setContent(content.toUpperCase());
  }

  function clearText() {
    setContent('');
  }

  async function copyToClipBoard(e) {
    try {
      await navigator.clipboard.writeText(content);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <textarea
      value={content}
      style={{
        width: '600px',
        height: '600px',
        border: '1px solid red',
        wordBreak: 'break-word',
      }}
      onChange={handleInput}
    />
  );
}