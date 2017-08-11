import React from "react";
import NavContainer from "./NavContainer";
import ListingContainer from "../listing/ListingContainer";
import Media from "../media/Media";

class HomePage extends React.Component {
  constructor() {
    super();
    this.fetchContent = this.fetchContent.bind(this);
    this.handleVisibilityClick = this.handleVisibilityClick.bind(this);
    this.state = { interval: null, sideVisibility: true };
  }

  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate() {
    if (this.props.mode !== twitch && this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.fetchContent();
  }

  fetchContent() {
    const mode = this.props.match.params.mode;
    if (mode === "youtube") {
      this.props.fetchYoutubeFollows();
    } else if (mode === "reddit") {
      this.props.fetchRedditFollows();
    } else if (mode === "twitch") {
      this.props.fetchTwitchFollows();
      this.interval = setInterval(() => {
        this.props.fetchTwitchFollows();
      }, 20000);
    }
  }

  handleVisibilityClick() {
    this.setState({ sideVisibility: !this.state.sideVisibility });
  }

  render() {
    const { mode } = this.props.match.params;
    return (
      <div className="home-wrapper">
        <NavContainer />
        <i className="ion-navicon-round" onClick={this.handleVisibilityClick} />
        <div className="content-wrapper">
          <ListingContainer visible={this.state.sideVisibility} mode={mode} />
          <Media mode={mode} />
        </div>
      </div>
    );
  }
}

export default HomePage;
