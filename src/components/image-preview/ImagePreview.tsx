import React from 'react';

interface IImagePreview {
  image: any;
}
export const ImagePreview: React.FC<IImagePreview> = ({image}) => {
  return (
    <div className="image-preview">
      <img src={image.userImageURL} alt="not found"/>
    </div>
  );
};
