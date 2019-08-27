import React, { useCallback, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Modal from 'react-modal';

interface ISearchResults {
  images: IImage[];
}

interface IImage {
  src: string;
  width: number;
  height: number;
}

Modal.setAppElement('#root');

export const SearchResults: React.FC<ISearchResults> = ({images}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const handleOnClick = (event: any, item: any) => {
    setModalIsOpen(true);
    setImageSrc(item.photo.src);
  };

  const handleOnClose = () => {
    setModalIsOpen(false);
    setImageSrc('')
  }

  return (
  <div className="search-results">
    <Gallery
      photos={images}
      onClick={handleOnClick}
    />
      <div onClick={handleOnClose}>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Minimal Modal Example"
      >
        <img src={imageSrc} />
      </Modal>
      </div>
  </div>
)};
