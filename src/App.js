import React, { Component} from 'react'
import {Route, Link} from 'react-router-dom'
import {Menu, Container} from 'semantic-ui-react';
import Main from './components/Main.jsx'
import Search from './components/Search.jsx'
import Saved from './components/Saved.jsx'

class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState ({ activeItem: name});

  render() {

    const {activeItem} = this.state


    return(
      <div>
      <Menu>
        <Menu.Item header>NYT React Scraper </Menu.Item>
        <Menu.Item as={Link} to='/' name='main' active={activeItem === 'main'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to='/search' name='search' active={activeItem === 'search'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to='/saved' name='saved' active={activeItem === 'saved'} onClick={this.handleItemClick} />
      </Menu>
      <Container>
        <Route exact path='/' component={Main}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/saved' component={Saved}/>

      </Container>
    </div>
    )
  }
}


export default App;
