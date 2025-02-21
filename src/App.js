import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import OrderInformation from './components/OrderInformation';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [total, setTotal] = React.useState(0);
  const [counts, setCounts] = React.useState(menuItems.map(() => 0));

  const updateCounts = (index, value, price) => {
    if (counts[index] + value >= 0) {
      const newCounts = [...counts];
      newCounts[index] += value;
      setCounts(newCounts);
      setTotal(total + price)
    }
  }

  const clearTotal = () => {
    setCounts(menuItems.map(() => 0));
    setTotal(0)
  };

  const placeOrder = () => {
    const order = menuItems
      .map((item, index) => counts[index] > 0 ? `${counts[index]} ${item.title}` : '')
      .filter(item => item !== '');
    
    if (order.length === 0) {
      alert('No items in the cart');
    } else {
      alert('Order placed!\n' + order.join(', '));
    }
  }

  return (
    <div>
      <MenuHeader/>
      {menuItems.map((item, index) => (
        <MenuItem
          title={item.title} 
          description={item.description} 
          price={item.price} 
          image={process.env.PUBLIC_URL + '/images/' + item.imageName} 
          updateCounts={updateCounts}
          counts={counts}
          index={index}
      />
      ))}
      <OrderInformation total={total} placeOrder={placeOrder} clearTotal={clearTotal} />
    </div>
  );
}

export default App;
