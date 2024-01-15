'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();
  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChanged(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.contrlos}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet!</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt='The image selected by the user'
              fill
            />
          )}
        </div>
        <input
          ref={imageInputRef}
          className={classes.input}
          type='file'
          name={name}
          id={name}
          //   multiple
          accept='image/png, image/jpeg'
          onChange={handleImageChanged}
          required
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
