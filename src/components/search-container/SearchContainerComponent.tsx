import React, { useState, useCallback } from 'react';
import { SearchBar } from '../search-bar/SearchBarComponent';
import { SearchResults } from '../search-results/SearchResults';
import axios from 'axios';

export const SearchContainer: React.FC = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [barSearchHeight, setBarSearchHeight] = useState('');

  const getData = useCallback(async () => {
    const res = await axios(`https://pixabay.com/api/?key=13363728-e9a7826a454f46f908c7543f7&q=${searchQuery}&image_type=photo&pretty=true`);
    if (res.data.hits) {
      const data = res.data.hits.map((image: any) => {
        return {
          src: image.largeImageURL,
          width: image.previewWidth,
          height: image.previewHeight
        }
      })
      setImages(data);
      setBarSearchHeight('search-bar-active')
   }

  }, [searchQuery]);

  return (
    <div className="search-component">
      <SearchBar className={barSearchHeight} onChangeQuery={setSearchQuery} onSearch={getData}/>
      {images && images.length && <SearchResults images={images} />}
    </div>
  );
};
