import React,{ Component } from 'react';
//we have create a class with components
class SearchBar extends React.Component{
    constructor(props){
    super(props);
    this.state ={ term : ''};
    }
	render(){
        return(
        <div className="search-bar">
         <input 
           value = {this.state.term}
           onChange={ event => this.onInputChange(event.target.value)} />
         </div>
         );
	}
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}
export default SearchBar;