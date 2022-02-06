import { createContext } from "react"

const ApiContext = createContext({})

export default function ApiContextProvider({ children }) {
  function buscaUrl(url, setData) {
      const request = await fetch(url)
      const data = await request.json()
      setData(data)
    }
  return <ApiContext.Provider value={buscaUrl }>
    {children}
  </ApiContext.Provider>
}