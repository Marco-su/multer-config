import { Route, Switch } from "react-router-dom";
import SingleImage from "./SingleImage";
import UploadContainer from "./UploadContainer";

const RoutesContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={UploadContainer} />
      <Route path="/image/:id" component={SingleImage} />
    </Switch>
  );
};

export default RoutesContainer;
