import Modal from 'react-modal';
import styles from './ImageModal.module.css'

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => (
  <Modal
    isOpen={!!image}
    onRequestClose={onClose}
    contentLabel="Image Modal"
  >
    <button className={styles.close} onClick={onClose}>Close</button>
    {image && (
      <>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p className={styles.param}>{image.description || 'No description'}</p>
        <p className={styles.param}>Author: {image.user.name}</p>
        <p className={styles.param}>Likes: {image.likes}</p>
      </>
    )}
  </Modal>
);

export default ImageModal;
