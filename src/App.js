import { useState } from "react";

export default function EditContent() {
  const [content, setContent] = useState('');

  function handleInput(e) {
    // setContent('');
    setContent(e.target.value);
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