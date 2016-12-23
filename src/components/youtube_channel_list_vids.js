import React from 'react';

const YoutubeChannelListVids = ({channelVideos, onVideoSelect}) => {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      {
        channelVideos.map( video => { 
          return( 
            <div className="col-md-2 col-xs-6 videos" key={video.etag}>
              <div className="video">
                <img onClick={ () => onVideoSelect(video, video.snippet.resourceId.videoId) } 
                    className="thumbnail" src={video.snippet.thumbnails.medium.url} 
                    alt="Youtube Clip Thumbnail" />
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default YoutubeChannelListVids;