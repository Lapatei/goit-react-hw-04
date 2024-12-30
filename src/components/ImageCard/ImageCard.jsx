const ImageCard = ({ image, onClick }) => (
  <div>
    <img src={image.urls.small} alt={image.alt_description} onClick={onClick} />
  </div>
);

export default ImageCard;

