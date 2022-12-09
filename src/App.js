import { useState } from 'react';

import './Container.css';
import './Content.css';
import './Textarea.css';
import './Controls.css';
import './Button.css';

function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  )
}

function Content({ children }) {
  return (
    <div className="content">
      {children}
    </div>
  )
}

function Textarea({ content, onChange }) {
  return (
    <textarea className="area" value={content} onChange={onChange} />
  )
}

function Controls({ children }) {
  return (
    <div className="controls">
      {children}
    </div>
  )
}

function Button({ children, action }) {
  return (
    <button onClick={action}>
      {children}
    </button>
  )
}

export default function App() {
  const [content, setContent] = useState('');

  function handleChangeContent(e) {
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
    <Container>
      <Content>
        <Textarea content={content} onChange={handleChangeContent} />
        <Controls>
          <Button action={convertToLowerCase}>
            lower case
          </Button>
          <Button action={convertToUpperCase}>
            upper case
          </Button>
          <Button action={copyToClipBoard}>
            copy text
          </Button>
          <Button action={clearText}>
            clear text
          </Button>
        </Controls>
      </Content>
    </Container>    
  );
}