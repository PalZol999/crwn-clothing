import {Link} from 'react-router-dom'
import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component'

const CategoryPreview = ({title, products}) => (
        <div className='category-preview-container'>
            <h2> 
                <Link className='title' to={title}>
                    {title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {products
                        .filter((_, idx) => idx <4 ) /* =tartsd meg h ha az index kisebb mint 4, a többi nem kell*/ 
                        .map((product) => (
                            <ProductCard key={product.id} product={product}/>

                ))} 
            </div>
        </div>
)

export default CategoryPreview