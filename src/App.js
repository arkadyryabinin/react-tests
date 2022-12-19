import { useReducer, useEffect, useRef } from "react";
import { noteReducer } from "./noteReducer";
import { getData } from "./initData.js";
import './Note.css';

// Masonry layout

function NotesBlock({ children }) {
  return (
    <div className="NotesBlock">
      {children}
    </div>
  )
}

function Note({ initData }) {
  const [noteData, dispatch] = useReducer(noteReducer, initData);
  const { header, body, headerHeight, bodyHeight, id } = noteData;

  const refHeader = useRef(null);
  const refBody = useRef(null);

  const handleInput = (area) => (e) =>{
    // console.log(e.target.clientHeight, e.target.scrollHeight);
    console.log(e.type)
    dispatch({
      type: 'input',
      area,
      value: e.target.value,
      // height: Math.max(e.target.scrollHeight, e.target.clientHeight),
    });
    dispatch({
      type: 'resize',
      id,
      headerHeight: Math.max(refHeader.current.scrollHeight, refHeader.current.clientHeight),
      bodyHeight: Math.max(refBody.current.scrollHeight, refBody.current.clientHeight),
    });
  }

  useEffect(() => {
    resizedList.push({
      type: 'resize',
      id,
      headerHeight: Math.max(refHeader.current.scrollHeight, refHeader.current.clientHeight),
      bodyHeight: Math.max(refBody.current.scrollHeight, refBody.current.clientHeight),
    })
    dispatch({
      type: 'resize',
      id,
      headerHeight: Math.max(refHeader.current.scrollHeight, refHeader.current.clientHeight),
      bodyHeight: Math.max(refBody.current.scrollHeight, refBody.current.clientHeight),
    });
  }, []);

  return (
    <div className="Note">
      <NoteHeader text={header} headerHeight={headerHeight} onChange={handleInput('header')} refHeader={refHeader} />
      <NoteBody text={body} bodyHeight={bodyHeight} onChange={handleInput('body')} refBody={refBody} />
    </div>
  );
}

function NoteBody({ text = '', onChange, bodyHeight, refBody }) {
  return (
    <>
      <textarea
        placeholder="-- Текст"
        rows={2}
        wrap="soft"
        style={{ height: bodyHeight }}
        className="NoteBody"
        value={text}
        onChange={onChange}
        onLoad={onChange}
        ref={refBody}
      />
    </>
  );
}

function NoteHeader({ text = '', onChange, headerHeight, refHeader }) {
  return (
    <>
      <textarea
        placeholder="-- Заголовок"
        rows={1}
        style={{ height: headerHeight }}
        wrap="hard"
        className="NoteHeader"
        value={text}
        onChange={onChange}
        ref={refHeader}
      />
    </>
  );
}

const initList = getData();
const resizedList = [];

export default function EditContent() {
  // const [list, dispatch] = useReducer(noteReducer, initList);

  // const handleInput = (index) =>(e) =>{
  //   dispatch({
  //     type: 'input',
  //     index,
  //     text: e.target.value,
  //   });
  // }
  console.log(resizedList);
  return (
    <NotesBlock>
      {initList.map((item) => (
        // <Note key={item.id} initData={{ ...item, headerHeight: null, bodyHeight: 40 }}/>
        <Note key={item.id} initData={item}/>
      ))}
    </NotesBlock>
  );
}