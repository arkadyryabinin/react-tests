import { getData } from "./initData.js";
import Masonry from "./Masonry.js";
import setup from "./setup";
import Note from "./Note";
import { noteReducer } from './noteReducer';
import './Note.css';
import { useEffect, useReducer } from "react";

// Masonry layout

let isResized = false;

function calcColsNum() {
  return Math.floor((document.body.clientWidth + setup.gap) / (setup.noteWidth + setup.gap));
}

function NoteWrapper({ children }) {
  return (
    <div className="NoteWrapper">{children}</div>
  )
}

const initList = getData();

export default function App() {
  const [state, dispatch] = useReducer(noteReducer, { ...setup, numColumns: calcColsNum() });

  const { colWidth, gap, numColumns, cropAt } = state;

  useEffect(() => {
    window.onresize = () => isResized = true;
    const interval = setInterval(() => {
      if (isResized) {
        isResized = false;
        dispatch({ type: 'resize', numColumns: calcColsNum() });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(numColumns);
  const itemsList = initList.map((item) => (
    <NoteWrapper key={item.id}>
      <Note initData={item} cropAt={cropAt}/>
    </NoteWrapper>
  ));


  return (
    <Masonry numColumns={numColumns} colWidth={colWidth} gap={gap}>
      {itemsList}
    </Masonry>
  );
}