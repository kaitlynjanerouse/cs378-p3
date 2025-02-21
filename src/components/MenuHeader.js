import React from 'react';

function MenuHeader() {
    return (
      <div>
        <div class="logo-container">
            <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="Coffee Central Logo" class="logo"/>
        </div>
        <div class="first-tag-line">Small Place, Big Flavors</div>
        <div class="second-tag-line">The Best Spot in Town!</div>
      </div>
    );
  }
  
  export default MenuHeader;