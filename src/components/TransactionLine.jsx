import {useState, useEffect} from "react";
import { Delete, Edit } from "@material-ui/icons";
import { EditTransactionModal } from "../components/EditTransactionModal";

function TransactionsLine({ transactions, totalValue}) {
 
  const [modalEditTransactionIsOpen, setModalEditTransactionIsOpen] = useState(false);

  useEffect(() => {
   
  },[transactions])

  function openEditTransactionModal() {
    setModalEditTransactionIsOpen(true);
  }

  function closeEditTransactionModal() {
    setModalEditTransactionIsOpen(false);
  }

  const openModalWithId = (id) => {
    console.log(transactions._id);
    openEditTransactionModal();
  };
 
  const deleteTransaction = async () => {
    await fetch(
      `${process.env.REACT_APP_URL_API}/transactions/` + transactions._id,
      {
        method: "DELETE",
      }
    );
    alert("Transação deletada com sucesso!");
  };


  
  return (
    <>
      <table className="table-fixed border w-full ">
        <tbody>
          <tr>
            <td className="w-1/12  pl-6 py-2 border">
              {new Intl.DateTimeFormat("pt-br").format(
                new Date(transactions.date)
              )}
            </td>
            <td className="w-1/12  pl-12 py-2 border">{transactions.type}</td>
            <td className="w-3/12  pl-12 py-2 border">{transactions.user}</td>
            {/* <td className="w-1/12  pl-12 py-2 border">
              {transactions.comission}
            </td> */}
            <td className="w-3/12   border">{transactions.client}</td>
            {/* <td className="w-3/12  border">{transactions.product}</td>
            <td className="w-1/12  border">{transactions.qtde}</td> */}
            <td className="w-1/12  border ">
              {/* {transactions.reference_price
                .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
                .replace(".", ",")} */}
                  {/* {transactions.totalValue
                } */}
            </td>
            {}

            {transactions.totalValue >= 0 ? (
              <td className="w-1/12  border text-green-500">
                {transactions.totalValue
                  .toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                  .replace(".", ",")}
              </td>
            ) : (
              <td className="w-1/12  border text-red-500">
                {(transactions.totalValue * -1)
                  .toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                  .replace(".", ",")}
              </td>
            )}

            {/* <td className="w-1/12 px-12 border text-red-500">
             {transactions.total_price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
              .replace(".", ",")}
            </td> */}

            <td className="w-1/12  border">{new Intl.DateTimeFormat("pt-br").format(
                new Date(transactions.vcto)
              )}</td>

            <td className="w-1/12 pl-16 border text-yellow-700 hover:text-yellow-500">
              <button>
              {/* <button onClick={(e) => openModalWithId(transactions._id)}> */}
                <Edit />
              </button>
            </td>
            <td className="w-1/12 pl-4 border text-red-700 hover:text-red-500">
              <button
                value="6"
                onClick={(e) => deleteTransaction(transactions._id)}
              >
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <EditTransactionModal
        isOpen={modalEditTransactionIsOpen}
        onRequestClose={closeEditTransactionModal}
        id={transactions._id}
      />

    </>
  );
}

export default TransactionsLine;
