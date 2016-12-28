import React, { Component } from 'react';
import Request from 'superagent';
import Channels from './components/channels';
import CurrentVideo from './components/currentVideo';
import VideoList from './components/videoList';
import { CHANNELS, PLAYLIST_URL } from './constants';

class YoutubePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      selectedChannelVideos: [],
      selectedChannel: '',
      selectedChannelUsername: '',
      selectedVideo: '',
      selectedVideoId: '',
      sidebarToggled: false
    };
    this.findChannelVideos(CHANNELS[0]);
    this.toggleSidebarState = this.toggleSidebarState.bind(this);
  };

  findChannelVideos(channel) {
    const url = PLAYLIST_URL + channel.uploads;
    Request.get(url).end( (error, response) => {
      if (error) {
        console.log('Error while getting videos');
      }
      else {
        const videos = response.body.items.map( (video) => {
          return video;
        });
        this.setState({
          selectedChannelVideos: videos,
          selectedChannel: channel.name,
          selectedChannelUsername: channel.username,
          selectedVideo: videos[0].snippet,
          selectedVideoId: videos[0].snippet.resourceId.videoId
        });
      }
    });
  };


  toggleSidebarState() {
    if(this.state.sidebarToggled === true) {
      this.setState({ sidebarToggled: false });
    }
    if(this.state.sidebarToggled === false) {
      this.setState({ sidebarToggled: true });
    }
  }


  render() {
    return (
      <div className={this.state.sidebarToggled ? 'youtubeContainer toggled' : 'youtubeContainer'} id="wrapper">

        <Channels
            channels={CHANNELS}
            currentChannel={this.state.selectedChannel}
            onChannelSelect={ channel => { this.findChannelVideos(channel) } } />

            <div className="youtubeHeader">
              <div className='menu-toggle' onClick={this.toggleSidebarState}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            
              <a className="channelHeader" href={"https://www.youtube.com/" + this.state.selectedChannelUsername} target="_blank">
                <div className="channelHeader">
                  <div className="channelName">
                    <strong>
                      <p>{this.state.selectedChannel.split(" ")[0]}</p>
                      <p>{this.state.selectedChannel.split(" ")[1]}</p>
                    </strong>
                  </div>
                </div>
              </a>
            </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <VideoList 
                  channelVideos={ this.state.selectedChannelVideos }
                  onVideoSelect={ (selectedVideo, selectedVideoId) => { this.setState({ selectedVideo: selectedVideo.snippet, selectedVideoId }) }} />
              <CurrentVideo 
                  video={this.state.selectedVideo}
                  videoId={this.state.selectedVideoId}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default YoutubePage;