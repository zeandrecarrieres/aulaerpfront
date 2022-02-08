import Modal from 'react-modal'
import UserEdit from './UserEdit'

export function EditUserModal({isOpen, onRequestClose, id}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
       
         
        // id={product._id}
        // contentLabel="Example Modal"
      >
        <UserEdit onEditUserModalClose={onRequestClose} id={id} />
      </Modal>
    )
}