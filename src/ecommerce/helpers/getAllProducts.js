
export const getllProducts = async() => {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()
  return data
}