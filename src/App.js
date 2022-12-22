import { getData } from "./initData.js";
import { SetupContext } from "./SetupContext.js";
import setup from "./setup";
import Note from "./Note";
import { noteReducer } from './noteReducer';
import './Note.css';
import { useEffect, useReducer, useContext } from "react";

// Masonry layout

let isResized = false;
window.onresize = () => isResized = true;

const calcColsNum = () => Math.floor((document.body.clientWidth - setup.gap) / (setup.noteWidth + setup.gap));

// const numColumns = Math.floor(document.body.clientWidth / setup.noteWidth);
// console.log(numColumns);

function NoteWrapper({ children }) {
  return (
    <div className="NoteWrapper">{children}</div>
  )
}

function NotesBlock({ children }) {
  const { gap } = useContext(SetupContext);
  return (
    <div className="NotesBlock" style={{ gap }}>{children}</div>
  )
}

function Column({ children }) {
  const { colWidth, gap } = useContext(SetupContext);
  return (
    <div className="Column" style={{ width: colWidth, gap }}>{children}</div>
  )
}

// function Note({ initData }) {
//   const [noteData, dispatch] = useReducer(noteReducer, { ...initData, isCropped: false });
//   const ref = useRef(null);
//   const { header, body, isCropped } = noteData;
//   const { cropAt } = useContext(SetupContext);
//   // console.log(cropAt);
//   useEffect(() => {
//     if (ref.current.scrollHeight > cropAt) dispatch({ type: 'crop' });
//   }, []);
//   // console.log(isCropped);
//   return (
//     <div
//       ref={ref}
//       className={isCropped ? "Note Cropped" : "Note"}
//       style={isCropped ? { maxHeight: cropAt } : null}
//     >
//       <h1 className="NoteHeader">{header}</h1>
//       {body}
//     </div>
//   );
// }


const initList = getData();
// const resizedList = [];

export default function EditContent() {
// const x = Math.floor(document.body.clientWidth / setup.noteWidth);
const [numColumns, dispatch] = useReducer(noteReducer, calcColsNum());
console.log(numColumns);
useEffect(() => {
  const interval = setInterval(() => {
    if (isResized) {
      isResized = false;
      dispatch({ type: 'resize', numColumns: calcColsNum() });
    }
  }, 500);
  return () => clearInterval(interval);
}, []);
// console.log(numColumns, x);
  const columnsList = [];
  for (let i = 0; i < numColumns; i += 1) {
    columnsList.push(
      <Column key={i}>
        {initList.filter((item, index) => index % numColumns === i).map((item) => (
          // <Note key={item.id} initData={{ ...item, headerHeight: null, bodyHeight: 40 }}/>
          <NoteWrapper key={item.id}>
            <Note initData={item}/>
          </NoteWrapper>
        ))}
      </Column>
    )
  }
  return (
    <SetupContext.Provider value={setup}>
      <NotesBlock>
        {columnsList}
        {/* <Column>
          {initList.filter((item, index) => index % numColumns === 1).map((item) => (
            // <Note key={item.id} initData={{ ...item, headerHeight: null, bodyHeight: 40 }}/>
            <NoteWrapper key={item.id}>
              <Note initData={item}/>
            </NoteWrapper>
          ))}
        </Column>
        <Column>
          {initList.filter((item, index) => index % numColumns === 2).map((item) => (
            // <Note key={item.id} initData={{ ...item, headerHeight: null, bodyHeight: 40 }}/>
            <NoteWrapper key={item.id}>
              <Note initData={item}/>
            </NoteWrapper>
          ))}
        </Column> */}
      </NotesBlock>
    </SetupContext.Provider>
  );
}