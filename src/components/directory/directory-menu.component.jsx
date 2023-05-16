
import CategoryItem from '../category-item/category-item.component';
import './directory-menu.styles.css'


const Directory = ({categories}) => {
    return(

      <div className="directory-container">
    
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
     
    ))}
      </div>
    )

}

export default Directory