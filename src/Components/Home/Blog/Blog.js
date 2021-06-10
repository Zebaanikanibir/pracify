import React from 'react';
import image from '../../../images/Group 114.png';
import img1 from '../../../images/eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools_80743-2766.png';
import img2 from '../../../images/containers-with-products-table-with-copy-space_23-2148366089.png';
import img3 from '../../../images/potted-plant-near-cosmetics-bottles-jars_23-2147787938.png';
import './Blog.css';
const Blog = () => {
  return (
    <div className="blog">
      <div>
          <img src={image} alt="" />
          <h1>Read Our Blog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, minus. Saepe earum aliquam laudantium vel, labore delectus inventore magni. Dolorum.</p>
      </div>
      <div className="blog-boxes">
          <div className="blog-box">
              <img src={img1} alt="" />
              <h3>Blog Post One</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum consequatur libero adipisci eaque! Veritatis velit dolorem ratione consectetur expedita.</p>
              <h4>Read more</h4>
          </div>
          <div className="blog-box">
              <img src={img2} alt="" />
              <h3>Blog Post One</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum consequatur libero adipisci eaque! Veritatis velit dolorem ratione consectetur expedita.</p>
              <h4>Read more</h4>
          </div>
          <div className="blog-box">
              <img src={img3} alt="" />
              <h3>Blog Post One</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum consequatur libero adipisci eaque! Veritatis velit dolorem ratione consectetur expedita.</p>
              <h4>Read more</h4>
          </div>
      </div>
    </div>
  );
}

export default Blog;
