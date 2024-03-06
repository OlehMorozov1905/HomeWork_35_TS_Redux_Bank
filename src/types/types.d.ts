export interface DepositAction {
    type: string;
    payload: number;
}

export interface WithdrawAction {
    type: string;
    payload: number;
}

export type Action = DepositAction | WithdrawAction;

export interface AccountState {
    balance: number;
}