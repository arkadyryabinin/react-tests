import { useReducer, useContext, createContext, useEffect, useRef } from 'react';
import { noteReducer } from './noteReducer';
import { SetupContext } from "./SetupContext.js";

// const SetupContext = createContext(0);

export default function Note({ initData }) {
  const [noteData, dispatch] = useReducer(noteReducer, { ...initData, isCropped: false });
  const ref = useRef(null);
  const { id, header, body, isCropped } = noteData;
  const { cropAt } = useContext(SetupContext);
  // console.log(cropAt);
  useEffect(() => {
    if (ref.current.scrollHeight > cropAt) dispatch({ type: 'crop' });
  }, []);
  const style = {};
  if (isCropped) style.maxHeight = cropAt;
  // console.log(style);
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