import UploadForm from "./UploadForm";
import ImageList from "./ImageList";

const UploadContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <UploadForm />
        </div>
        <div className="col-md-8">
          <ImageList />
        </div>
      </div>
    </div>
  );
};

export default UploadContainer;
