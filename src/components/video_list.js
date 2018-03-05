import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) =>{
const VideoItems = props.videos.map((value)=>{
          return (
          	<VideoListItem onVideoSelect={props.onVideoSelect}
          key={value.etag} 
          video={value} />
          );
	});
	return(
	<div>
	<ul className="col-md-4 list-group">
	{VideoItems}
	</ul>
	</div>
	);

}
export default VideoList;
