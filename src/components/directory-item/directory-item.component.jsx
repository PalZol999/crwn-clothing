import './directory-item.styles.scss'
//import '/Users/admin/Desktop/Projects/React/crwn-clothing/src/categories.styles.scss'

const DirectoryItem = ({category}) => {
    const {imageUrl, title} = category
    return (
        <div className="directory-item-container">
        <div 
        className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
          }}
          />
        <div className="body" >
      <h2  className="title">{title}</h2>
      <p className="shopNow">Shop Now</p>
    </div>
    </div>
   

    )
}

export default DirectoryItem