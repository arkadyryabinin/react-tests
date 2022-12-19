import { useReducer } from "react";

export function noteReducer(state, action) {
  switch (true) {
    case action.type === 'input' && action.area === 'header': return { ...state, header: action.value, headerHeight: action.height };
    case action.type === 'input' && action.area === 'body': return { ...state, body: action.value, bodyHeight: action.height };
    default: break;
  }
}