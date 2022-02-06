import React, { useState, useEffect } from "react";
import { useClient } from "./ClientEdit/useClient"
import axios from "axios";

function ClientEdit(props) {
  const { handleInput, client, registerClient } = useClient(props);

  const {type, category, name, email, telephone, address, complement, district, city, state, postal, cnp, inscription, site } = client;

  return (
    <div>
      <div className="w-90 bg-white rounded shadow-lg mt-24 p-8 m-4 md:max-w-2xl md:mx-auto ">
        <form
          action="#"
          className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
          onSubmit={registerClient}
        >
          <div className="text-xl mb-8 text-gray-500 ">
            Alteração de Cliente
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
                id="options-select"
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm border-solid border-gray-300"
                placeholder="category"
                value={type}
                onChange={handleInput}
              >
                <option value="initial" className="flex flex-col mb-4">
                  -- Selecione uma opção --
                </option>
                <option
                  value="Final"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Final
                </option>
                <option
                  value="Revenda"
                  // name="Jurídica"
                  className="flex flex-col mb-4"
                >
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
              id="options-select"
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm border-solid border-gray-300"
              placeholder="category"
              value={category}
              onChange={handleInput}
            >
              <option value="" className="flex flex-col mb-4 ">
                -- Selecione uma opção --
              </option>
              <option
                value="Fisica"
                // name="Física"
                className="flex flex-col mb-4"
              >
                Física
              </option>
              <option
                value="Juridica"
                // name="Jurídica"
                className="flex flex-col mb-4"
              >
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
              id="name"
              name="name"
              value={name}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className=" font-bold text-sm text-gray-500">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
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
              id="telephone"
              name="telephone"
              value={telephone}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
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
              id="address"
              name="address"
              value={address}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
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
              id="complement"
              name="complement"
              value={complement}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
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
              id="district"
              name="district"
              value={district}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="city" className=" font-bold text-sm text-gray-500">
              Cidade
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
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
                id="state"
                name="state"
                value={state}
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
                onChange={handleInput}
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
                id="postal"
                name="postal"
                value={postal}
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="cnp" className=" font-bold text-sm text-gray-500">
              {category === "Fisica" ? "CPF" : "CNPJ"}
            </label>
            <input
              type="text"
              id="cnp"
              name="cnp"
              value={cnp}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
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
                id="inscription"
                name="inscription"
                value={inscription}
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
                onChange={handleInput}
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
                id="site"
                name="site"
                value={site}
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
                onChange={handleInput}
              />
            </div>
          ) : null}

          <button className="px-5 py-3 bg-red-500 text-white hover:bg-red-600 text-white  text-base mx-auto p-4 rounded w-full sm:w-auto">
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClientEdit;
