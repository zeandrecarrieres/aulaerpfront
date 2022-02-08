import Modal from 'react-modal'
import ProductEdit from './ProductEdit'

export function EditProductModal({isOpen, onRequestClose, id}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
       
        
      >
        <ProductEdit onEditProductModalClose={onRequestClose} id={id} />
      </Modal>
    )
}