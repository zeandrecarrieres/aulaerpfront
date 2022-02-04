import { createContext, useEffect, useState } from "react";
import{ buscaUrl} from "../service/buscaUrl";

export const ProductsContext = createContext({});

export function ProductsContextProvider({ children }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    buscaUrl(`${process.env.REACT_APP_URL_API}/products/`, setProducts);
  }, [])

  return (
    <ProductsContext.Provider value={{
      products,
    }}>
      {children}
    </ProductsContext.Provider>
  )
} 