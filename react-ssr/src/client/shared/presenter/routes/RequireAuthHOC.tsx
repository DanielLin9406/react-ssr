import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { pagePaths } from "../../../pages/AppPages";

export default (ChildComponent: any) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case true:
          return <ChildComponent {...this.props} />;
        case null:
          return <div>Loading...</div>;
        default:
          return <Redirect to={pagePaths.login} />;
      }
    }
  }

  function mapStateToProps({ auth = true }: { auth: any }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
