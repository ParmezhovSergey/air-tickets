import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ticketsReducer from "./reducer";

const reducer = combineReducers({
  tickets: ticketsReducer,
  newTickets: ticketsReducer,
  zeroTransfer: ticketsReducer,
  oneTransfer: ticketsReducer,
  twoTransfer: ticketsReducer,
  trheeTransfer: ticketsReducer,
});

export type Reducers = ReturnType<typeof reducer>;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
