import { useReducer, useEffect, useRef } from 'react';
import { noteReducer } from './noteReducer';

// const SetupContext = createContext(0);

export function NoteWrapper({ children }) {
  return (
    <div className="NoteWrapper">{children}</div>
  )
}

export function Note({ initData, cropAt }) {
  const [noteData, dispatch] = useReducer(noteReducer, { ...initData, isCropped: false });
  const ref = useRef(null);
  const { id, header, body, isCropped } = noteData;

  useEffect(() => {
    if (ref.current.scrollHeight > cropAt) dispatch({ type: 'crop' });
  }, []);

  const style = {};
  if (isCropped) style.maxHeight = cropAt;

  return (
    <div
      ref={ref}
      className={isCropped ? "Note Cropped" : "Note"}
      style={style}
    >
      <h1 className="NoteHeader">{`${id} ${header}`}</h1>
      {body}
    </div>
  );
}