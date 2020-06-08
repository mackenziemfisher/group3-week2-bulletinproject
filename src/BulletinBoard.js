import React, { Component } from 'react';
import Post from './Post.js';
export default class BulletinBoard extends Component {
  render() {
    return (
      <div className="board">
        <div className="steve" id="steve">
          <h1>Steve's posts</h1>
          <Post
            title="How to jump to div"
            description="hint hint"
            link="https://www.codeproject.com/Questions/620431/Go-to-div-in-HTML-by-id"
          />
          <Post
            title="CSS Tricks: Complete Guide to Centering in CSS"
            description="The holy grail of beginner css resources"
            link="https://css-tricks.com/centering-css-complete-guide/"
          />
          <Post
            title="Bootstrap Colors"
            description="Bootstrap does colors in a weird way. Use this to help change the color of these posts"
            link="https://getbootstrap.com/docs/4.0/utilities/colors/"
          />
        </div>
        
        <div className="mackenzie"id="mackenzie" >
          <h1>MacKenzie's Post</h1>
            <Post 
             title="Beginner's Guide to React"
             description=" Resources and concepts help beginners understand react a bit better."
             link="https://www.freecodecamp.org/news/rock-solid-react-js-foundations-a-beginners-guide-c45c93f5a923/"
             />
             <Post 
             title="Understanding CSS Grid"
             description="This article breaks down CSS, and gives very specific details on how to create a grid container."
             link="https://www.smashingmagazine.com/2020/01/understanding-css-grid-container/"
             />
        </div>
       
        
       
      
       
        <div className="carissa" id="carissa">
          <h1>Carissa's Posts</h1>
            <Post
                title="Building a NavBar with CSS Grid"
                description="Resource that explains how to utilize CSS Grid with React"
                link="https://www.youtube.com/watch?v=5y1XRuGDpTA"
              />
              <Post
                title="Cropping images in CSS"
                description="How-to guide on cropping images in CSS"
                link="https://www.educative.io/edpresso/how-to-crop-an-image-in-css"
              />
              
        </div>

          <div className="tahj " id ="tahj">
            <h1>Tahj's Post</h1>
            <Post
              title="React Strap"
              description="Resource for using Bootstrap and React"
              link="https://reactstrap.github.io/"
            />
            <Post 
              title ="CSS Grid"
              description="CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system. "
              link="https://css-tricks.com/snippets/css/complete-guide-grid/"
              />
              
              <Post
                title = "CSS color picker"
                description ="This website helps you find a certain color and gives its hexidecimal code for it"
                link ="https://htmlcolorcodes.com/color-picker/"
              />
          </div>
      </div>
    );
  }
}