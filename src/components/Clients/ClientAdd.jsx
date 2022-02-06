import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function ClientAdd({ onCLientModalClose }) {
  const { register, handleSubmit } = useForm();

  const [category, setCategory] = useState("");

  const registerClient = ({
    type,
    category,
    name,
    email,
    telephone,
    address,
    complement,
    district,
    city,
    state,
    postal,
    cnp,
    inscription,
    site,
  }) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL_API}/clients`,
      data: {
        type,
        category,
        // nick,
        name,
        email,
        telephone,
        address,
        complement,
        district,
        city,
        state,
        postal,
        cnp,
        inscription,
        site,
      },
    })
      .then(function (reponse) {
        alert("Cliente Cadastrado com sucesso!");

        onCLientModalClose();
      })
      .catch(function (erreur) {
        console.log(erreur);
        alert("Preencha todos os campos!");
      });
  };

  return (
    <div>
      <div className="w-90 bg-white rounded shadow-lg mt-24 p-8 m-4 md:max-w-2xl md:mx-auto ">
        <form
          action="#"
          className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
          onSubmit={handleSubmit(registerClient)}
        >
          <div className="text-xl mb-8 text-gray-500 ">
            Inclusão de Clientes
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="category"
                className=" font-bold text-sm text-gray-500"
              >
                Tipo
              </label>
              <select
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm border-solid border-gray-300"
                placeholder="type"
                {...register("type")}
              >
                <option value="initial" className="flex flex-col mb-4">
                  -- Selecione uma opção --
                </option>
                <option value="Final" className="flex flex-col mb-4">
                  Final
                </option>
                <option value="Revenda" className="flex flex-col mb-4">
                  Revenda
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="category"
              className=" font-bold text-sm text-gray-500"
            >
              Categoria
            </label>
            <select
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm border-solid border-gray-300"
              placeholder="category"
              {...register("category")}
            >
              <option value="" className="flex flex-col mb-4 ">
                -- Selecione uma opção --
              </option>
              <option value="Fisica" className="flex flex-col mb-4">
                Física
              </option>
              <option value="Juridica" className="flex flex-col mb-4">
                Jurídica
              </option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="nick" className=" font-bold text-sm text-gray-500">
              {category === "Fisica" ? "NOME" : "Razão Social"}
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("name")}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className=" font-bold text-sm text-gray-500">
              Email
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("email")}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="telephone"
              className=" font-bold text-sm text-gray-500"
            >
              Telefone
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("telephone")}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="address"
              className=" font-bold text-sm text-gray-500"
            >
              Endereço
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("address")}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="complement"
              className=" font-bold text-sm text-gray-500"
            >
              Complemento
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("complement")}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="district"
              className=" font-bold text-sm text-gray-500"
            >
              Bairro
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("district")}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="city" className=" font-bold text-sm text-gray-500">
              Cidade
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("city")}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="state"
                className=" font-bold text-sm text-gray-500"
              >
                Estado
              </label>
              <input
                type="text"
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
                {...register("state")}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="postal"
                className=" font-bold text-sm text-gray-500"
              >
                CEP
              </label>
              <input
                type="text"
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
                {...register("postal")}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="cnp" className=" font-bold text-sm text-gray-500">
              {category === "Fisica" ? "CPF" : "CNPJ"}
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("cnp")}
            />
          </div>

          {category === "Juridica" ? (
            <div className="flex flex-col mb-4">
              <label
                htmlFor="inscription"
                className=" font-bold text-sm text-gray-500"
              >
                INSCRIÇÃO ESTADUAL
              </label>
              <input
                type="text"
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
                {...register("inscription")}
              />
            </div>
          ) : null}

          {category === "Juridica" ? (
            <div className="flex flex-col mb-4">
              <label
                htmlFor="site"
                className=" font-bold text-sm text-gray-500"
              >
                Site
              </label>
              <input
                type="text"
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
                {...register("site")}
              />
            </div>
          ) : null}

          <button className="px-5 py-3 bg-red-500 text-white hover:bg-red-600 text-white  text-base mx-auto p-4 rounded w-full sm:w-auto">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClientAdd;
