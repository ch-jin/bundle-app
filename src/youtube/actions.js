import { 
  SET_SIDEBAR_TOGGLE,
  SET_CHANNELS,
  SELECT_CHANNEL,
  SELECT_VIDEO,
  SET_VIDEOS
} from './actionTypes';
import Request from 'superagent';
import { PLAYLIST_URL } from './constants';

export const toggleSidebar = (status) => {
  const newStatus = !status;
  return {
    type: SET_SIDEBAR_TOGGLE,
    payload: newStatus
  };
};

export const fetchChannels = (usernames) => {

}

export const setChannels = (channels) => {
  return {
    type: SET_CHANNELS,
    payload: channels
  }
}

export const selectChannel = (channel) => {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
};

export const selectVideo = (video) => {
  return {
    type: SELECT_VIDEO,
    payload: video
  }
}

export const setVideos = (videos) => {
  return {
    type: SET_VIDEOS,
    payload: videos
  }
}

export const fetchVideos = (channel) => {
  const url = PLAYLIST_URL + channel.uploads;
  return (dispatch) => {  
    Request.get(url).end( (error, response) => {
      if (error) {
        console.log('Error while getting videos');
      }
      else {
        const videos = response.body.items.map( (video) => video.snippet );
        dispatch(setVideos(videos));
      };
    });
  } 
}