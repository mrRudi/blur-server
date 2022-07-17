import React, { useState } from "react";
import Image from "next/image";

export default function ImageContainer() {
  const [imgUrl, setImgUrl] = useState(null);

  const onImageChange = (e) => {
    const files = e.target.files;
    const [file] = files;
    const url = URL.createObjectURL(file);
    setImgUrl(url);
  };

  return (
    <div>
      <input type="file" onChange={onImageChange} />
      <img src={imgUrl} alt="image url" />
      {imgUrl && (
        <Image src={imgUrl} alt="Vercel Logo" width={100} height={100} />
      )}
    </div>
  );
}
