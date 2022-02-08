import { createContext, useEffect, useState } from "react";
import{ buscaUrl} from "../service/buscaUrl";

export const SuppliersContext = createContext({});

export function SuppliersContextProvider({ children }) {

  const [suppliers, setSuppliers] = useState([])

  useEffect(() => {
    buscaUrl(`${process.env.REACT_APP_URL_API}/suppliers/`, setSuppliers);
  }, [])

  return (
    <SuppliersContext.Provider value={{
      suppliers,
    }}>
      {children}
    </SuppliersContext.Provider>
  )
} 