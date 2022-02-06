import { useForm } from "react-hook-form";
import axios from "axios";

function ProductAdd({ onProductModalClose }) {
  const { register, handleSubmit } = useForm();

  const registerProduct = ({ name, description, category }) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL_API}/products`,
      data: {
        code: "",
        category,
        name,
        description,
        qtde: "",
        purchase_price: "",
        reference_price: "",
      },
    })
      .then(function (reponse) {
        alert("Produto Cadastrado com sucesso!");

        onProductModalClose();
      })
      .catch(function (erreur) {
        alert("Preencha todos os campos!");
        console.log(erreur);
      });
  };

  return (
    <div>
      <div className="w-90 bg-white rounded shadow-lg mt-24 p-8 m-4 md:max-w-2xl md:mx-auto">
        <form
          action="#"
          className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
          onSubmit={handleSubmit(registerProduct)}
        >
          <div className="text-xl mb-8 text-gray-500">Inclusão de Produtos</div>

          <div className="flex justify-between ">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="category"
                className=" font-medium text-sm text-gray-500"
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
                <option
                  value="Super_Branco"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Super Branco
                </option>
                <option
                  value="Jumbo_Branco"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Jumbo Branco
                </option>
                <option
                  value="Extra_Branco"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Extra Branco
                </option>
                <option
                  value="Grande_Branco"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Grande Branco
                </option>
                <option
                  value="Medio_Branco"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Médio Branco
                </option>
                <option
                  value="Pequeno_Branco"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Pequeno Branco
                </option>
                <option
                  value="Industrial_Branco"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Industrial Branco
                </option>
                <option
                  value="Rosado"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Rosado
                </option>
                <option
                  value="Caipira"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Caipira
                </option>
                <option
                  value="Codorna"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Codorna
                </option>
                <option
                  value="Azul"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Azul
                </option>
                <option
                  value="Papelao_Diversos"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Papelão Diversos
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className=" font-medium text-sm text-gray-500"
            >
              Nome
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("name", { required: true, maxLength: 30 })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="description"
              className=" font-medium text-sm text-gray-500"
            >
              Descrição
            </label>
            <input
              type="text"
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              {...register("description")}
            />
          </div>

          <button className="px-5 py-3 bg-red-700 text-white hover:bg-red-600 text-white  text-base mx-auto p-4 rounded w-full sm:w-auto">
            Cadastrar
          </button>
        </form>

        <div></div>
      </div>
    </div>
  );
}

export default ProductAdd;
