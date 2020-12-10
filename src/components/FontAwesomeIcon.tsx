import React from "react";

interface fProp {
  icon?: any;
  text?: any;
}

const FontAwesomeIcon = ({ icon, text = false }: fProp) => {
  return (
    <>
      <span className={`fa fa-${icon}`} />
      {Boolean(text) && <span> &nbsp; {text}</span>}
    </>
  );
};

export default FontAwesomeIcon;
