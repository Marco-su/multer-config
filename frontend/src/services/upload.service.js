import axios from "axios";
import { URI } from "../utils/const";

//-------------------------SUBIR NUEVA IMAGEN------------------------
export const uploadImage = async (title, image) => {
  const form = new FormData();

  form.append("title", title);
  form.append("image", image);

  await axios({
    url: `${URI}/images`,
    method: "POST",
    data: form,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log("Error al enviar:", err));
};

//------------------------------SHOW PREVIEW--------------------------
export const showPreview = (file, ext, setValidExt, setPathImage, setImage) => {
  //...Si tengo una imagen de los formatos permitidos coloco la extension como valida y muestro el preview. Si no es así coloco la extensión como no valida
  if (
    file.type.includes("image") &&
    (ext === ".jpg" || ext === ".png" || ext === ".jpeg" || ext === ".gif")
  ) {
    setValidExt(true);

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function load() {
      setPathImage(reader.result);
    };

    setImage(file);
  } else {
    setValidExt(false);
  }
};
