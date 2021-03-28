import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const ShoppingCart = () => {
    return (
        <div className="shopping-cart w-full flex fixed bottom-0
        justify-between content-center items-center bg-blue-600 sm:hidden">
            <div className="cart flex justify-between content-center items-center">
                <div className="cart-counter bg-blue-700 px-6 py-4 flex justify-center mr-3">
                    <FontAwesomeIcon icon={faShoppingBag} className="text-white" />
                    <sup className="total-items rounded-full h-4 w-4 font-sm bg-white
                    flex items-center justify-center">
                        1
                    </sup>
                </div>
                <div className="total-amount mr-2 text-white">
                    599.00 BDT
                </div>
            </div>
            <div className="divider-line bg-blue-500">
                &nbsp;
            </div>
            <div className="order w-2/5 text-white cursor-pointer">
                Place Order
            </div>
        </div>
    );
}

export default ShoppingCart;