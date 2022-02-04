export  async function buscaUrl(url, setData) {
  const request = await fetch(url)
  const data = await request.json()
  setData(data)
}