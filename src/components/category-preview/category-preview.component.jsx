import {Link} from 'react-router-dom'
import {CategoryPreviewContainer, Title, Preview } from './category-preview.styles.jsx'
import ProductCard from '../product-card/product-card.component'

const CategoryPreview = ({title, products}) => (
        <CategoryPreviewContainer>
            <Title> 
                <Link to={title}>
                    {title.toUpperCase()}</Link>
            </Title>
            <Preview>
                {products
                        .filter((_, idx) => idx <4 ) /* =tartsd meg h ha az index kisebb mint 4, a többi nem kell*/ 
                        .map((product) => (
                            <ProductCard key={product.id} product={product}/>

                ))} 
            </Preview>
        </CategoryPreviewContainer>
)

export default CategoryPreview