import { useReducer, useContext, createContext, useEffect, useRef } from 'react';
import { noteReducer } from './noteReducer';
import { SetupContext } from "./SetupContext.js";

// const SetupContext = createContext(0);

export default function Note({ initData }) {
  const [noteData, dispatch] = useReducer(noteReducer, { ...initData, isCropped: false });
  const ref = useRef(null);
  const { header, body, isCropped } = noteData;
  const { cropAt, noteWidth } = useContext(SetupContext);
  // console.log(cropAt);
  useEffect(() => {
    if (ref.current.scrollHeight > cropAt) dispatch({ type: 'crop' });
  }, []);
  // console.log(isCropped);
  return (
    <div
      ref={ref}
      className={isCropped ? "Note Cropped" : "Note"}
      style={isCropped ? { maxHeight: cropAt, width: noteWidth } : { width: noteWidth }}
    >
      <h1 className="NoteHeader">{header}</h1>
      {body}
    </div>
  );
}