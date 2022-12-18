import { useReducer } from "react";
import './Note.css';

const getKey = (() => {
  let key = 0;
  return () => {
    key += 1;
    return key;
  }
})();

function Note({ text = '', onChange }) {
  return (
    <>
      <textarea
        className="Note"
        value={text}
        onChange={onChange}
      />
    </>
  );
}

function textReducer(state, action) {
  const itemsList = [...state];
  switch (action.type) {
    case 'input': itemsList[action.index] = action.text; break;
    default: break;
  }
  return itemsList;
}

const initList = ['', '', '', '', ''];

export default function EditContent() {
  const [list, dispatch] = useReducer(textReducer, initList);

  const handleInput = (index) =>(e) =>{
    dispatch({
      type: 'input',
      index,
      text: e.target.value,
    });
  }

  return (
    <>
      {list.map((item, index) => <Note key={getKey()} onChange={handleInput(index)} text={item} />)}
    </>
  );
}