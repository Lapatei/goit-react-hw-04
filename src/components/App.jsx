import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';
import './App.css'

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleSearch = async (searchQuery) => {
    if (!searchQuery) {
      toast.error('Please enter a search query');
      return;
    }

    setQuery(searchQuery);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=CJPGSRq6UMEAuMRjGC5Fu8-MnjaLURDpQFAAMjnTVyU`);
      const data = await response.json();
      setImages(data.results);
      setPage(1);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const nextPage = page + 1;
      const response = await fetch(`https://api.unsplash.com/search/photos?page=${nextPage}&query=${query}&client_id=CJPGSRq6UMEAuMRjGC5Fu8-MnjaLURDpQFAAMjnTVyU`);
      const data = await response.json();
      setImages(prevImages => [...prevImages, ...data.results]);
      setPage(nextPage);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMoreImages} />}
      {showModal && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
