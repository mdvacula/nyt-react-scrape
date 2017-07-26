import React, {Component} from 'react'
import {getSaved} from '../utils/helper.js'
import SavedArt from './children/SavedArt'


class Saved extends Component {
  constructor () {
    super();

    this.state = {
      articles: []
    };
    
  };
  componentDidMount() {
    getSaved().then((response) => {
        this.setState({
          articles: response.data
        });
      }
    );
  }


   render() {


     return(
      <SavedArt articles={this.state.articles}/>
     )
   }
}

export default Saved;
