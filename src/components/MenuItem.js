import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, image, updateCounts, counts, index}) => {

    return (
        <div class='container'>
            <div class="row menu-item">
                <div class="col-4"><img src={image} alt={description} class="item-image"/></div>
                <div class="col-7 item-info">
                    <div class="row item-title">{title}</div>
                    <div class="row item-description">{description}</div>
                    <div class="row">
                        <div class="col item-price">{price}</div>
                        <div class="col button-container">
                            <button onClick={() => updateCounts(index, 1, price)} class="item-button-style">+</button>
                            <button class="item-button-style">{counts[index]}</button>
                            <button onClick={() => updateCounts(index, -1, -price)} class="item-button-style">-</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default MenuItem;