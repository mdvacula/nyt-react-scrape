import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {getResults} from "../utils/helper.js"
import Results from "./children/Results"

class Search extends Component {
  constructor() {
    super();

    this.state = {
      topic: "",
      startDate: "",
      endDate: "",
      searchRes: []
    };

  }
    handleInputChange = (event) => {

    const target = event.target;
    const value = target.value;
    const name = target.name;


      this.setState({
        [name]: value
    });
    console.log(this.state);
  }

  handleSubmit = (event)  => {
    event.preventDefault();
     getResults(this.state).then((response) =>{
     this.setState({
       searchRes: response.data.response.docs
     });
   }
   );
  }
  render() {

    return(
      <div>
      <Form>
        <Form.Field>
          <label>Topic</label>
            <input name="topic" type="text" onChange={this.handleInputChange} placeholder=''/>
        </Form.Field>
        <Form.Field>
            <label>Start Date</label>
            <input name="startDate" type="text" onChange={this.handleInputChange} placeholder=''/>
        </Form.Field>
        <Form.Field>
          <label>End Date</label>
          <input name="endDate" type="text" onChange={this.handleInputChange} placeholder=''/>
          </Form.Field>
          <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
      </Form>

        <Results articles={this.state.searchRes} />

    </div>
    )
  }
}
  export default Search;
