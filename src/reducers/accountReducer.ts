import { DEPOSIT, WITHDRAW } from "../actions/accountActions";
import { Action, AccountState } from "../types/types";

const initialState: AccountState = {
    balance: 0
};

const accountReducer = (state: AccountState = initialState, action: Action): AccountState => {
    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload };
        case WITHDRAW:
            return { ...state, balance: Math.max(0, state.balance - action.payload) };
        default:
            return state;
    }
};

export default accountReducer;













// import { DEPOSIT, WITHDRAW } from "../actions/accountActions";

// export type Action = {
//     type: string,
//     payload: number 
// }

// export type State = {
//     balance: number
// }

// const initialState: State = {
//     balance: 0
// }

// export const accountReducer = (state: State = initialState, action: Action): State => {
//     switch (action.type) {
//         case DEPOSIT:
//             return { ...state, balance: state.balance + action.payload }
//         case WITHDRAW:
//             const res = state.balance - action.payload;
//             return { ...state, balance: res < 0 ? state.balance : res }
//         default:
//             return state;
//     }
// }



