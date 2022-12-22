import { useReducer } from "react";

export function noteReducer(state, action) {
  switch (true) {
    // case action.type === 'input' && action.area === 'header': return { ...state, header: action.value };
    // case action.type === 'input' && action.area === 'body': return { ...state, body: action.value };
    // case action.type === 'resize': return {...state, headerHeight: action.headerHeight, bodyHeight: action.bodyHeight };
    case action.type === 'crop': return { ...state, isCropped: true };
    default: return null;
  }
}