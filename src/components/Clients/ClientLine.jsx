import { Delete, Edit } from "@material-ui/icons";
import { EditClientModal } from "./EditClientModal";
import { useModal } from "../../hooks/useModal";

function ClientsLine({ clients }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const deleteClient = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/clients/` + clients._id, {
      method: "DELETE",
    });
    alert("Cliente deletado com sucesso!");
  };

  return (
    <>
      <table className="table-fixed border w-4/6 ">
        <tbody>
          <tr>
            <td className="w-2/12  text-sm">{clients.category}</td>

            <td className="w-4/12  text-sm">{clients.name}</td>
            <td className="w-4/12   text-sm">{clients.email}</td>
            <td className="w-2/12   text-sm">{clients.telephone}</td>
            <td className="w-1/12   text-sm text-yellow-700 hover:text-yellow-500">
              <button onClick={openModal}>
                <Edit />
              </button>
            </td>
            <td className="w-1/12  border text-red-700 hover:text-red-500">
              <button value="6" onClick={(e) => deleteClient(clients._id)}>
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <EditClientModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        id={clients._id}
      />
    </>
  );
}

export default ClientsLine;
