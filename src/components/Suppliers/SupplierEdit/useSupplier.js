import { useState, useEffect } from "react";
import axios from "axios";
import { buscaUrl } from "../../../service/buscaUrl";

export function useSupplier({ onEditSupplierModalClose, id }) {
  const [supplier, setSupplier] = useState({
    type: "",
    category: "",
    name: "",
    email: "",
    telephone: "",
    address: "",
    complement: "",
    district: "",
    city: "",
    state: "",
    postal: "",
    cnp: "",
    inscription: "",
    site: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setSupplier({ ...supplier, [name]: value });
  }

  useEffect(() => {
    (async () => {
      await buscaUrl(
        `${process.env.REACT_APP_URL_API}/suppliers/` + id,
        setClient
      );
    })();
  }, [id]);

  const registerSupplier = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `${process.env.REACT_APP_URL_API}/suppliers/` + id,
      data: supplier,
    })
      .then(function (reponse) {
        alert("Fornecedor Atualizado com sucesso!");
        setSupplier({
          type: "",
          category: "",
          name: "",
          email: "",
          telephone: "",
          address: "",
          complement: "",
          district: "",
          city: "",
          state: "",
          postal: "",
          cnp: "",
          inscription: "",
          site: "",
        });

        onEditSupplierModalClose();
      })
      .catch(function (erreur) {
        alert("Preencha todos os campos!");
        console.log(erreur);
      });
  };

  return {
    supplier,
    handleInput,
    registerSupplier,
  };
}
