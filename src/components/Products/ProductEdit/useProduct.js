import { useState, useEffect } from "react";
import axios from "axios"
import { buscaUrl } from "../../../service/buscaUrl";

export function useProduct({onEditProductModalClose, id}) {

    const [product, setProduct] = useState({
    code: "",
    category: "",
    name: "",
    description: "",
    qtde: "",
    purchase_price: "",
    reference_price: "" 
  })

  function handleInput(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value })
  }

  useEffect(() => {
    (async () => {
      await buscaUrl(`${process.env.REACT_APP_URL_API}/products/` + id, setProduct);
    })()
  }, [id])


  const registerProduct = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `${process.env.REACT_APP_URL_API}/products/`+ id,
      data: product,
    })
      .then(function (reponse) {
        //On traite la suite une fois la réponse obtenue
        alert("Produto Atualizado com sucesso!");
        setProduct({
    code: "",
    category: "",
    name: "",
    description: "",
    qtde: "",
    purchase_price: "",
    reference_price: "" 
  })

        onEditProductModalClose()
      
      })
      .catch(function (erreur) {
        //On traite ici les erreurs éventuellement survenues
        alert("Preencha todos os campos!");
        console.log(erreur);
      });
  };

  return {
    product,
    handleInput,
    registerProduct
  }
}