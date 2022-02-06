import { useState, useEffect } from "react";
import axios from "axios";
import { buscaUrl } from "../../../service/buscaUrl";

export function useClient({ onEditClientModalClose, id }) {
  const [client, setClient] = useState({
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
    setClient({ ...client, [name]: value });
  }

  useEffect(() => {
    (async () => {
      await buscaUrl(
        `${process.env.REACT_APP_URL_API}/clients/` + id,
        setClient
      );
    })();
  }, [id]);

  const registerClient = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `${process.env.REACT_APP_URL_API}/clients/` + id,
      data: client,
    })
      .then(function (reponse) {
        alert("Cliente Atualizado com sucesso!");
        setClient({
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

        onEditClientModalClose();
      })
      .catch(function (erreur) {
        alert("Preencha todos os campos!");
        console.log(erreur);
      });
  };

  return {
    client,
    handleInput,
    registerClient,
  };
}
