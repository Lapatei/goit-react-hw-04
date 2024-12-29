import Modal from 'react-modal';
import './ImageModal.css'

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => (
  <Modal
    isOpen={!!image}
    onRequestClose={onClose}
    contentLabel="Image Modal"
  >
    <button className='close' onClick={onClose}>Close</button>
    {image && (
      <>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>{image.description || 'No description'}</p>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </>
    )}
  </Modal>
);

export default ImageModal;
