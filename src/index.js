import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY ='AIzaSyBCigNdUrqETNqDNd1ffMSQBQef-Qp3VO0';
//Create a new component.This component should produce some HTML


class App extends Component {
	constructor(props){
	super(props);
	this.state= { videos:[],
	selectedVideo :null
	 };
	 this.videoSearch('Internet of things');
    }
	videoSearch(term){
	YTSearch({key:API_KEY,term:term},(videos)=>{
     this.setState({ videos:videos ,
               selectedVideo:videos[0]});
     });
     }
	 

	render(){
    const videoSearch=_.debounce((term) => { this.videoSearch(term)},300);
	return (
		<div>
		  <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
		  <VideoDetail  video={this.state.selectedVideo} />
		  <VideoList 
		  onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
		  videos={this.state.videos} />
		</div>
		);
	}
}
//Take this components generated HTML and put it in one page (DOM)

ReactDOM.render(<App />,document.querySelector('.container'));
