import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { articleList, ArticleListItem } from "./components/Articles";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    articles: [],
    articleSearch: ""
  };

  handleInputChange = event =>{
    const { name, value } = event.target;
    this.setState({
      [name]:value
    });
  }

  handleFormSubmit = event =>{
    event.preventDefault();
    API.getArticles(this.state.articleSearch).
    then( res=> {
      this.setState({articles : res.data});
    }).catch( err => console.log(err));
  };

  render(){
    return (
        <div>
          <Nav />
          <Jumbotron />
          <Container>
            <Row>
              <Col size="md-12">
                <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="articleSearch"
                      value={this.stat.articleSearch}
                      onChange={this.handleInputChange}
                      placeholder="serach for an article"
                      />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={this.handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >Search</Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size ="xs-12">
            {! this.state.articles.length ? (
                <h1 className="text-center">No Articles to Display</h1>
              ) :
            (
              <articleList>
              {this.state.articles.map(article =>{
                return (
                  <ArticleListItem
                    key={article.title}
                    title={article.title}
                    href={article.href}
                    date={article.date}
                  />
                  );
              })}
              </articleList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      )
  }
}
 
export default App;