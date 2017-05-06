import { connect } from "react-redux";
import React, { Component } from "react";

import Channels from "./channels";
import Videos from "./videos";

class YoutubeApp extends Component {
  render() {
    const channels = this.props.channels;

    if (channels.all[0] === undefined) {
      return <Channels />;
    } else {
      return (
        <div className="wrapper">
          <Channels />
          <Videos channel={channels.all[channels.current]} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { channels: state.channels };
}

export default connect(mapStateToProps)(YoutubeApp)