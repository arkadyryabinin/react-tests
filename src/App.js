import { useReducer } from "react";
import { getData } from "./ initData";
import { noteReducer } from "./noteReducer";
import './Note.css';

function NotesBlock({ children }) {
  return (
    <div className="NotesBlock">
      {children}
    </div>
  )
}

function Note({ initData }) {
  const [noteData, dispatch] = useReducer(noteReducer, initData);
  const { header, body, headerHeight, bodyHeight } = noteData;

  const handleInput = (area) => (e) =>{
    // console.log(e.target.clientHeight, e.target.scrollHeight);
    dispatch({
      type: 'input',
      area,
      value: e.target.value,
      height: Math.max(e.target.scrollHeight, e.target.clientHeight),
    });
  }

  return (
    <div className="Note">
      <NoteHeader text={header} headerHeight={headerHeight} onChange={handleInput('header')}/>
      <NoteBody text={body} bodyHeight={bodyHeight} onChange={handleInput('body')}/>
    </div>
  );
}

function NoteBody({ text = '', onChange, bodyHeight }) {
  return (
    <>
      <textarea
        placeholder="-- Текст"
        rows={3}
        style={{ height: bodyHeight }}
        className="NoteBody"
        value={text}
        onChange={onChange}
      />
    </>
  );
}

function NoteHeader({ text = '', onChange, headerHeight }) {
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
      />
    </>
  );
}

const initList = getData();

export default function EditContent() {
  const [list, dispatch] = useReducer(noteReducer, initList);

  // const handleInput = (index) =>(e) =>{
  //   dispatch({
  //     type: 'input',
  //     index,
  //     text: e.target.value,
  //   });
  // }

  return (
    <NotesBlock>
      {list.map((item) => (
        // <Note key={item.id} initData={{ ...item, headerHeight: null, bodyHeight: 40 }}/>
        <Note key={item.id} initData={item}/>
      ))}
    </NotesBlock>
  );
}