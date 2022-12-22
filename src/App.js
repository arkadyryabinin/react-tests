import { getData } from "./initData.js";
import { SetupContext } from "./SetupContext.js";
import setup from "./setup";
import Note from "./Note";
import './Note.css';

// Masonry layout

// const SetupContext = createContext(0);

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
  // const setup = useContext(SetupContext);
  // console.log(resizedList);
  return (
    <SetupContext.Provider value={setup}>
      <NotesBlock>
        {initList.map((item) => (
          // <Note key={item.id} initData={{ ...item, headerHeight: null, bodyHeight: 40 }}/>
          <NoteWrapper key={item.id}>
            <Note initData={item}/>
          </NoteWrapper>
        ))}
      </NotesBlock>
    </SetupContext.Provider>
  );
}