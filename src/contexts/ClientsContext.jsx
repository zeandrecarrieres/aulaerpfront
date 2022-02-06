import { createContext, useEffect, useState } from "react";
import{ buscaUrl} from "../service/buscaUrl";

export const ClientsContext = createContext({});

export function ClientsContextProvider({ children }) {

  const [clients, setClients] = useState([])

  useEffect(() => {
    buscaUrl(`${process.env.REACT_APP_URL_API}/clients/`, setClients);
  }, [])

  return (
    <ClientsContext.Provider value={{
      clients,
    }}>
      {children}
    </ClientsContext.Provider>
  )
} 