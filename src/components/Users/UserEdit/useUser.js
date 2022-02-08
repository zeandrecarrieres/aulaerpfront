import { useState, useEffect } from "react";
import axios from "axios";
import { buscaUrl } from "../../../service/buscaUrl";

export  function useUser({ onEditUserModalClose, id }) {
  const [user, setUser] = useState({
    type: "",
    name: "",
    email: "",
    telephone: "",
    username: "",
    password: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  useEffect(() => {
    (async () => {
      await buscaUrl(
        `${process.env.REACT_APP_URL_API}/users/` + id,
        setUser
      );
    })(); 
  }, [id]);

  const registerUser = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `${process.env.REACT_APP_URL_API}/users/` + id,
      data: user,
    })
      .then(function (reponse) {
        alert("Usuário Atualizado com sucesso!");
        setUser({
          type: "",
          name: "",
          email: "",
          telephone: "",
          username: "",
          password: "",
        });

        onEditUserModalClose();
      })
      .catch(function (erreur) {
        alert("Preencha todos os campos!");
        console.log(erreur);
      });
  };

  return {
    user,
    handleInput,
    registerUser,
  };
}
