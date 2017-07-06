import React from "react";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import SplashPage from "./splash/SplashPage";
import HomePageContainer from "./home/HomePageContainer";

class AppRouter extends React.Component {
  componentDidUpdate() {
    console.log("update");
  }

  renderLoggedIn() {
    return (
      <div>
        <Route exact path="/" component={HomePageContainer} />
      </div>
    );
  }

  renderLoggedOut() {
    return (
      <div>
        <Route exact path="/" render={() => <SplashPage formType="signup" />} />
        <Route
          exact
          path="/login"
          render={() => <SplashPage formType="login" />}
        />
      </div>
    );
  }

  render() {
    return this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut();
  }
}

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

export default withRouter(connect(mapStateToProps)(AppRouter));