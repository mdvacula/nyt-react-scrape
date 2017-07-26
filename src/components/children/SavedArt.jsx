import React, {Component} from 'react';
import { Image, Item, Button, Icon, Header } from 'semantic-ui-react';
import {deleteArticle} from "../../utils/helper.js"



const SavedArt = (props) => {
    console.log(props);
    const articles = props.articles;

    const handleItemClick = (object) => {
        deleteArticle(object).then((response) => {
            console.log(response);
        });
    };

    let listArticles = articles.map((article) =>
    <Item key={article._id}>
        <Item.Content>
            <Item.Header as='a' href={article.web_url}>{article.title}</Item.Header>
        <Item.Meta>
            <span>{article.date}</span>}
        </Item.Meta>
        <Item.Description>{article.snippet}</Item.Description>
        <Item.Extra>
        <Button negative floated='right' onClick={handleItemClick.bind(this, article)}>
                Delete
                <Icon name='right chevron' />
        </Button>
        </Item.Extra>
        </Item.Content>
    </Item>
        );


      return(
          <Item.Group>
              <Header as='h2'>Saved Articles</Header>

              {listArticles}
        </Item.Group>
      );
    }

export default SavedArt;
