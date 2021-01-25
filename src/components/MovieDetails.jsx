import React, { Component } from "react";
import { connect } from "react-redux";
import StyledHeader from "./StyledHeader";
import GoBack from "./go-back.component";

class MovieDetails extends Component {
  render() {
    return (
      <StyledHeader>
        <GoBack />
      </StyledHeader>
    );
  }
}

export default connect()(MovieDetails);
