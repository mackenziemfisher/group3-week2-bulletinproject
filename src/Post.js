import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// https://reactstrap.github.io/
// https://reactstrap.github.io/components/card/#app
export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <Card 
            color="warning"
        >             
          <h1>📌</h1>
          <CardBody>
            <CardTitle>
                {this.props.title} 
            </CardTitle>
             {this.props.title}
            <CardText>
                {this.props.description}
            </CardText>
            <Button href={this.props.link}>Button</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

