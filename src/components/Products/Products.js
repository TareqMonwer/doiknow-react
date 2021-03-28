import Product from "../Product/Product"
import { products } from './data';

const Products = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {products.map(product => {
                return <Product key={product.id} {...product} />
            })}
        </div>
    );
}

export default Products;