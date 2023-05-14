import './categories.styles.css'
//import './App.css';

const App= () => {
  const categories =
    [
      {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
    ]
    
  
  return (
    <div className="categories-container">
    
      {categories.map(({title, id, imageUrl}) => (
        <div key={id} className="category-container" style={{backgroundImage: `url(${imageUrl})`}}>
          <div className='background-image' />
          <div className="category-body-container" >
        <h2 style={{margin: '0 6px 0'}}  className="title">{title}</h2>
        <p className="shopNow">Shop Now</p>
      </div>
      </div>
     
      ))}
      </div>
  );
}

export default App;
