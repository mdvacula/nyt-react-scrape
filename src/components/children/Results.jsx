import React, {Component} from 'react';
import { Image, Item, Button, Icon, Header } from 'semantic-ui-react';
import {saveArticle} from "../../utils/helper.js";


const Results = (props) => {
    const articles = props.articles;

    const handleItemClick = (object) => {
      let art = {
        title: object.headline.main,
        date: object.pub_date,
        url: object.web_url
      };
        saveArticle(art).then((response) => {
            console.log(response);
        })
    };

    let listArticles = articles.map((article) =>
    <Item key={article._id}>
        <Item.Content>
            <Item.Header as='a' href={article.web_url}>{article.headline.main}</Item.Header>
        <Item.Meta>
            <span>{article.pub_date}</span>}
        </Item.Meta>
        <Item.Description>{article.snippet}</Item.Description>
        <Item.Extra>
        <Button primary floated='right' onClick={handleItemClick.bind(this, article)}>
                Save
                <Icon name='right chevron' />
        </Button>
        </Item.Extra>
        </Item.Content>
    </Item>
        );


      return(
          <Item.Group>
              <Header as='h2'>Results</Header>

              {listArticles}
        </Item.Group>
      );
    }

export default Results;
