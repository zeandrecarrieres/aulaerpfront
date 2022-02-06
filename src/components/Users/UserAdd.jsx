import { useForm } from "react-hook-form";
import axios from "axios";

function UserAdd({ onUserModalClose }) {
  const { register, handleSubmit } = useForm();

  const registerUser = ({
    type,
    username,
    name,
    email,
    telephone,
    password,
  }) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL_API}/users`,
      data: {
        type,
        username,
        name,
        email,
        telephone,
        password,
      },
    })
      .then(function (reponse) {
        alert("Usuário Cadastrado com sucesso!");

        onUserModalClose();
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
          onSubmit={handleSubmit(registerUser)}
        >
          <div className="text-xl mb-8 text-gray-500">Inclusão de Usuários</div>

          <div className="flex justify-between">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="category"
                className="font-bold text-sm text-gray-500"
              >
                Tipo
              </label>
              <select
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm border-solid border-gray-300"
                placeholder="category"
                {...register("category")}
              >
                <option value="initial" className="flex flex-col mb-4">
                  -- Selecione uma opção --
                </option>
                <option value="Administrador" className="flex flex-col mb-4">
                  Administrador
                </option>
                <option value="Vendedor" className="flex flex-col mb-4">
                  Vendedor
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="font-bold text-sm text-gray-500">
              Nome
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("name")}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="font-bold text-sm text-gray-500">
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
              className="font-bold text-sm text-gray-500"
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
              htmlFor="username"
              className="font-bold text-sm text-gray-500"
            >
              Username
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("username")}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="password"
              className="font-bold text-sm text-gray-500"
            >
              Password
            </label>
            <input
              type="password"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("password")}
            />
          </div>

          <button className="px-5 py-3 bg-red-500 text-white hover:bg-red-600 text-white text-base mx-auto p-4 rounded w-full sm:w-auto">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserAdd;
