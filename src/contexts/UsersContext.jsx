import { createContext, useEffect, useState } from "react";
import{ buscaUrl} from "../service/buscaUrl";

export const UsersContext = createContext({});

export function UserssContextProvider({ children }) {

  const [users, setUsers] = useState([])

  useEffect(() => {
    buscaUrl(`${process.env.REACT_APP_URL_API}/users/`, setUsers);
  }, [])

  return (
    <UsersContext.Provider value={{
      users,
    }}>
      {children}
    </UsersContext.Provider>
  )
} 