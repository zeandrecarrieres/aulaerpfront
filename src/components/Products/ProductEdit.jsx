import { useProduct } from "./ProductEdit/useProduct";

function ProductEdit(props) {
  const { handleInput, product, registerProduct } = useProduct(props);

  const { category, name, description } = product;

  return (
    <div>
      <div className="w-90 bg-white rounded shadow-lg mt-24 p-8 m-4 md:max-w-2xl md:mx-auto">
        <form
          action="#"
          className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
          onSubmit={registerProduct}
        >
          <div className="text-xl mb-8 text-gray-500">Edição de Produto</div>

          <div className="flex justify-between ">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="category"
                className=" font-medium text-sm text-gray-500"
              >
                Tipo
              </label>
              <select
                id="options-select"
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm border-solid border-gray-300"
                placeholder="category"
                value={category}
                onChange={handleInput}
              >
                <option value="Ovo Branco" className="flex flex-col mb-4">
                  Ovo Branco
                </option>
                <option value="Ovo Vermelho" className="flex flex-col mb-4">
                  Ovo Vermelho
                </option>
                <option value="Caixa Vazia" className="flex flex-col mb-4">
                  Caixa Vazia
                </option>
                <option value="Bandeja Vazia" className="flex flex-col mb-4">
                  Bandeja Vazia
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
              id="name"
              name="name"
              value={name}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
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
              id="description"
              name="description"
              value={description}
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 border-solid border-gray-300"
              onChange={handleInput}
            />
          </div>

          <button className="px-5 py-3 bg-red-700 text-white hover:bg-red-600 text-white  text-base mx-auto p-4 rounded w-full sm:w-auto">
            Atualizar
          </button>
        </form>

        <div></div>
      </div>
    </div>
  );
}

export default ProductEdit;
