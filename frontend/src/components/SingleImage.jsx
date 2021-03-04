import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { URI } from "../utils/const";

const SingleImage = () => {
  const [img, setImg] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const imgIndividual = async () => {
      await axios({
        method: "GET",
        url: `${URI}/images/${id}`,
      })
        .then((res) => setImg(res.data))
        .catch((err) => console.log(err));
    };
    imgIndividual();
  }, [id]);

  return (
    <div className="col-md-8 offset-md-2 card">
      <div className="card-header bg-dark">
        <h2 className="text-white">{img.title}</h2>
      </div>
      <figure className="text-center col-md-8 offset-md-2 my-0">
        <img
          className="w-100"
          src={`${URI}/upload/${img.storage_name}`}
          alt=""
        />
      </figure>
    </div>
  );
};

export default SingleImage;
