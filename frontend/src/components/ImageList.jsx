import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { URI } from "../utils/const";

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const pedirImagenes = async () => {
      await axios({
        method: "GET",
        url: "http://localhost:4000/images",
      })
        .then((res) => setImages(res.data))
        .catch((err) => console.log(err));
    };
    pedirImagenes();
  }, []);

  console.log(images);

  return (
    <div className="row g-2">
      {images.map((image) => (
        <figure className="col-md-4" key={image._id}>
          <Link to={`/image/${image._id}`}>
            <img
              className="w-100 img-thumbnail"
              src={`${URI}/upload/${image.storage_name}`}
              alt="Images"
            />
          </Link>
        </figure>
      ))}
    </div>
  );
};

export default ImageList;
