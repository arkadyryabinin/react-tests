import { getData } from "./initData.js";
import Masonry from "./Masonry.js";
import setup from "./setup";
import { Note, NoteWrapper } from "./Note";
import { noteReducer } from './noteReducer';
import './Note.css';
import { useEffect, useReducer } from "react";

// Masonry layout

let isResized = false;

function calcColsNum() {
  return Math.floor((document.body.clientWidth - setup.gap) / (setup.noteWidth + setup.gap));
}

// const initList = getData();
const initList = [];

let counter = 40;

export default function App() {

  const [state, dispatchStateAction] = useReducer(noteReducer, { ...setup, numColumns: calcColsNum() });
  const [list, dispatchListAction] = useReducer(noteReducer, initList);
  const { colWidth, gap, numColumns, cropAt } = state;

  const setResized = () => isResized = true;
  function handleResize() {
    // window.onresize = () => isResized = true;
    window.addEventListener('resize', setResized);
    console.log('resize event listener is attached');
    const interval = setInterval(() => {
      if (isResized) {
        isResized = false;
        dispatchStateAction({ type: 'resize', numColumns: calcColsNum() });
      }
    }, 1000);
    return () => {
      console.log('cleanup');
      clearInterval(interval);
      window.removeEventListener('resize', setResized);
    }
  }

  useEffect(handleResize, []);
  useEffect(() => {
    async function fetchData() {
      if (counter <= 0) return;
      const array = await getData(counter, 10);
      dispatchListAction({ type: 'fetch_items', value: array });
    }
    if (counter > 0) {
      fetchData();
      counter += -10;
    }
  }, [list]);

  if (list.length === 0) return null;

  const itemsList = list.map((item) => (
    <NoteWrapper key={item.id}>
      <Note initData={item} cropAt={cropAt}/>
    </NoteWrapper>
  ));


  return (
    <div style={{ padding: gap }}>
      <Masonry numColumns={numColumns} colWidth={colWidth} gap={gap}>
        {itemsList}
      </Masonry>
    </div>
  );
}