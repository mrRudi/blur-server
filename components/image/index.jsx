import React, { useState } from "react";
import Image from "next/image";
import { styled } from "@linaria/react";
import Button from "@mui/material/Button";

const Container = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
`;

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
      <Button variant="outlined">Text</Button>
      {imgUrl && (
        <Container>
          <Image
            src={imgUrl}
            alt="Vercel Logo"
            layout="fill"
            objectFit="contain"
          />
        </Container>
      )}
    </div>
  );
}
