import React from "react";
import { useHistory } from "react-router-dom";
import StyledHeaderLink from "./StyledHeaderLink";
import FontAwesomeIcon from "./FontAwesomeIcon";

const GoBack = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  React.useEffect(() => {});
  return (
    <StyledHeaderLink onClick={handleBack}>
      <FontAwesomeIcon icon="chevron-left" text="Go back" />
    </StyledHeaderLink>
  );
};

export default GoBack;
