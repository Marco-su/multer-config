//---IMPORTS
import { useState } from "react";

import { uploadImage, showPreview } from "../services/upload.service";
import { URI } from "../utils/const";

const UploadForm = () => {
  //---STATES
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [validExt, setValidExt] = useState(false);
  const [pathImage, setPathImage] = useState(`${URI}/img/upload.png`);

  //---SUBIR IMAGEN
  const subirArchivo = (e) => {
    e.preventDefault();

    if (validExt === true) {
      uploadImage(title, image);
    } else {
      console.log("Seleccione un archivo con extensión de imagen valido");
    }
  };

  //---MOSTRAR PREVISUALIZACIÓN
  const mostrarPreview = (e) => {
    if (e.target.files.length > 0) {
      //...Colocar el archivo en una variable y extraer su extensión
      const file = e.target.files[0];
      const ext = e.target.value.substring(
        e.target.value.lastIndexOf("."),
        e.target.value.length
      );

      showPreview(file, ext, setValidExt, setPathImage, setImage);
    }
  };

  //---FORMULARIO
  return (
    <div className="card">
      <div className="card-header bg-dark">
        <h2 className="text-white">Sube una imagen</h2>
      </div>

      <div className="card-body">
        <form onSubmit={subirArchivo}>
          <input
            className="form-control mb-2"
            type="text"
            name="title"
            placeholder="Título de la imágen"
            onChange={(e) => setTitle(e.target.value)}
          />

          <div>
            <input
              className="mb-2 form-control"
              onChange={mostrarPreview}
              type="file"
            />

            <img
              className="img-fluid img-thumbnail mb-2"
              src={pathImage}
              alt="Preview"
            />
          </div>

          <button className="btn btn-success w-100">Subir Imagen</button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
