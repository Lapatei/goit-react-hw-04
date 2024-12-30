import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.list}>
    {images.map(image => (
      <li key={image.id}>
        <ImageCard image={image} onClick={() => onImageClick(image)} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
