import './category-item.styles.css'

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category
    return (

        <div className="category-container" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className='background-image' />
        <div className="category-body-container" >
      <h2 style={{margin: '0 6px 0'}}  className="title">{title}</h2>
      <p className="shopNow">Shop Now</p>
    </div>
    </div>
   

    )
}

export default CategoryItem