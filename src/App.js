import { getData } from "./initData.js";
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

function NotesBlock({ children, gap }) {
  return (
    <div className="NotesBlock" style={{ gap, margin: gap }}>{children}</div>
  )
}

function Column({ children, colWidth, gap }) {
  return (
    <div className="Column" style={{ width: colWidth, gap }}>{children}</div>
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

  const columnsList = (new Array(numColumns)).fill(0).map((x, i) => (
    <Column
      key={i}
      colWidth={colWidth}
      gap={gap}
    >
      {
        initList
          .filter((item, index) => index % numColumns === i)
          .map((item) => (
            <NoteWrapper key={item.id}>
              <Note initData={item} cropAt={cropAt}/>
            </NoteWrapper>
          )
        )
      }
    </Column>
  ));

  return (
    <NotesBlock gap={gap}>
      {columnsList}
    </NotesBlock>
  );
}