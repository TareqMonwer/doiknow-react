import Product from "../Product/Product"
import { products } from './data';

const Products = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
            {products.map(product => {
                return <Product key={product.id} {...product} />
            })}
        </div>
    );
}

export default Products;