import React, { useContext } from "react";
import { useModal } from "../../hooks/useModal";
import { Delete, Edit } from "@material-ui/icons";
import { EditProductModal } from "./EditProductModal";
import { TransactionsContext } from "../../TransactionsContext";
import { getEstoque } from "../../helpers/getEstoque.js";

function ProductsLine({ products }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { transactions } = useContext(TransactionsContext);

  const deleteProduct = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/products/` + products._id, {
      method: "DELETE",
    });
    alert("Produto deletado com sucesso!");
  };

  return (
    <>
      <table className="table-fixed border w-full  ">
        <tbody>
          <tr>
            <td className="w-1/12 py-2 border text-sm">{products.code}</td>
            <td className="w-2/12 border text-sm">{products.category}</td>
            <td className="w-3/12 border text-sm">{products.name}</td>
            <td className="w-3/12 border text-sm">{products.description}</td>

            <td className="w-1/12 px-8 border text-sm">
              {getEstoque(transactions, products)}
            </td>

            <td className="w-1/12 px-12 border text-yellow-700 hover:text-yellow-500">
              <button onClick={openModal}>
                <Edit />
              </button>
            </td>
            <td className="w-1/12 px-12 border text-red-700 hover:text-red-500">
              <button value="6" onClick={(e) => deleteProduct(products._id)}>
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <EditProductModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        id={products._id}
      />
    </>
  );
}

export default ProductsLine;
