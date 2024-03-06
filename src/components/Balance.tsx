import { useSelector } from "react-redux"
import { AccountState } from "../types/types";

const Balance = () => {

  const balance = useSelector((state: AccountState) => state.balance);
  
  return (
    <div>
      <h1>Iron Bank of Braavos</h1>
      <h2>Balance = {balance}</h2>
    </div>
  )
}

export default Balance




