import { ThunkAction } from "redux-thunk";
import { ticketsApi } from "../api/api";
import { ActionsTypes, Reducers } from "./reduxStore";

export interface InitialStateType {
  tickets: Array<string | number>;
  newTickets: Array<string | number>;
  zeroTransfer: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  trheeTransfer: boolean;
}

const initialState: InitialStateType = {
  tickets: [],
  newTickets: [],
  zeroTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  trheeTransfer: false,
};

type UsersAction = ActionsTypes<typeof actions>;
type ThunkType = ThunkAction<Promise<void>, Reducers, unknown, UsersAction>;

const ticketsReducer = (
  state = initialState,
  action: UsersAction
): InitialStateType => {
  switch (action.type) {
    case "FETCH_TICKETS":
      return {
        ...state,
        tickets: [
          ...action.tickets.sort((a: any, b: any) => a.price - b.price),
        ],
      };

    case "FILTER_ZERO":
      let filterZero = [
        ...state.tickets.filter((item: any) => item.stops === 0),
      ];
      return {
        ...state,
        zeroTransfer: action.isFilter,

        newTickets: action.isFilter
          ? state.newTickets.length
            ? [...state.newTickets, ...filterZero]
            : [...filterZero]
          : [...state.newTickets].filter((o: any) => o.stops !== 0),
      };

    case "FILTER_ONE":
      let filterOne = [
        ...state.tickets.filter((item: any) => item.stops === 1),
      ];

      return {
        ...state,
        oneTransfer: action.isFilter,

        newTickets: action.isFilter
          ? state.newTickets.length
            ? [...state.newTickets, ...filterOne]
            : [...filterOne]
          : [...state.newTickets].filter((o: any) => o.stops !== 1),
      };
    case "FILTER_TWO":
      let filterTwo = [
        ...state.tickets.filter((item: any) => item.stops === 2),
      ];

      return {
        ...state,
        twoTransfer: action.isFilter,

        newTickets: action.isFilter
          ? state.newTickets.length
            ? [...state.newTickets, ...filterTwo]
            : [...filterTwo]
          : [...state.newTickets].filter((o: any) => o.stops !== 2),
      };
    case "FILTER_TRHEE":
      let filterTrhee = [
        ...state.tickets.filter((item: any) => item.stops === 3),
      ];

      return {
        ...state,
        trheeTransfer: action.isFilter,

        newTickets: action.isFilter
          ? state.newTickets.length
            ? [...state.newTickets, ...filterTrhee]
            : [...filterTrhee]
          : [...state.newTickets].filter((o: any) => o.stops !== 3),
      };

    default:
      return state;
  }
};
export const actions = {
  setFetchTickets: (tickets: Array<string | number>) =>
    ({ type: "FETCH_TICKETS", tickets } as const),
  setFilterZero: (isFilter: boolean) =>
    ({ type: "FILTER_ZERO", isFilter } as const),
  setFilterOne: (isFilter: boolean) =>
    ({ type: "FILTER_ONE", isFilter } as const),
  setFilterTwo: (isFilter: boolean) =>
    ({ type: "FILTER_TWO", isFilter } as const),
  setFilterTrhee: (isFilter: boolean) =>
    ({ type: "FILTER_TRHEE", isFilter } as const),
};

export const fetchTickets = (): ThunkType => {
  return async (dispatch) => {
    const response = await ticketsApi.getTickets();
    dispatch(actions.setFetchTickets(response.data.tickets));
  };
};

export default ticketsReducer;
