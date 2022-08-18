import React, { createContext, useReducer } from "react";

enum MessageActionType {
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  DELETE = "DELETE",
}

const { ERROR, SUCCESS, DELETE } = MessageActionType;

interface IMessageContext {
  id: number;
  type: MessageActionType;
  text: string | number;
}

interface IMessageAction {
  type: MessageActionType;
  payload: string | number; //normally is passed text, but when delete, there is message deleted by id which is in payload in this case
}

let initialState: IMessageContext[] = [];

const MsgContext = createContext<{
  state: IMessageContext[];
  dispatch: React.Dispatch<IMessageAction>;
}>({ state: initialState, dispatch: () => null });

let counter = 0;

const messageReducer = (
  state: IMessageContext[],
  action: IMessageAction
): IMessageContext[] => {
  switch (action.type) {
    case ERROR:
      return [
        ...state,
        {
          id: counter++,
          type: ERROR,
          text: action.payload,
        },
      ];
    case SUCCESS:
      return [...state, { id: counter++, type: SUCCESS, text: action.payload }];
    case DELETE:
      return state.filter((message) => message.id !== action.payload);
    default:
      throw new Error("uknown error");
  }
};

export const MsgProvider = ({ children }: { children?: React.ReactNode }) => {
  const [state, dispatch] = useReducer(messageReducer, initialState);
  return (
    <MsgContext.Provider value={{ state, dispatch }}>
      {children}
    </MsgContext.Provider>
  );
};

export default MsgContext;
