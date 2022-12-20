export default function Note({ initData }) {
  // const [noteData, dispatch] = useReducer(noteReducer, initData);
  const { header, body } = noteData;

  // const refHeader = useRef(null);
  // const refBody = useRef(null);

  // const handleInput = (area) => (e) =>{
  //   console.log(e.type)
  //   dispatch({
  //     type: 'input',
  //     area,
  //     value: e.target.value,
  //   });
  //   dispatch({
  //     type: 'resize',
  //     id,
  //     headerHeight: Math.max(refHeader.current.scrollHeight, refHeader.current.clientHeight),
  //     bodyHeight: Math.max(refBody.current.scrollHeight, refBody.current.clientHeight),
  //   });
  // }


  return (
    <div className="Note">
      <h1>{header}</h1>
      <div>{body}</div>
    </div>
  );
}