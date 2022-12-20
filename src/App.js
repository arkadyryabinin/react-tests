import { useReducer, useEffect, useRef } from "react";
import { noteReducer } from "./noteReducer";
import { getData } from "./initData.js";
import './Note.css';

// Masonry layout

function NoteWrapper({ children }) {
  return (
    <div className="NoteWrapper">{children}</div>
  )
}

function NotesBlock({ children }) {
  return (
    <div className="NotesBlock">{children}</div>
  )
}

function Note({ initData }) {
  const [noteData, dispatch] = useReducer(noteReducer, initData);
  const { header, body } = noteData;

  return (
    <div className="Note">
      <h1 className="NoteHeader">{header}</h1>
      {body}
    </div>
  );
}


const initList = getData();
// const resizedList = [];

export default function EditContent() {

  // console.log(resizedList);
  return (
    <NotesBlock>
      {initList.map((item) => (
        // <Note key={item.id} initData={{ ...item, headerHeight: null, bodyHeight: 40 }}/>
        <NoteWrapper>
          <Note key={item.id} initData={item}/>
        </NoteWrapper>
      ))}
    </NotesBlock>
  );
}