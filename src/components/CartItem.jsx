import { useDispatch } from 'react-redux';
import { addCart, deleteCart } from '../../redux/actionTypes';

const CartItem = (item) => {

    const dispatch = useDispatch();

    const handleInsert = item => {
        dispatch(addCart(item));
    }

    const handleRemove = item => {
        dispatch(deleteCart(item));
    }

    return (
        <div className="px-4 my-5 bg-light rounded-3">
            <div className="container py-4">
                {/* <button className="btn-close" aria-label='Close'> */}
                {/* <CloseButton className='float-end' onClick={() => handleClose(item)} /> */}
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={item.image} alt={item.title} height='200px' width='180px' />
                    </div>
                    <div className="col-md-4">
                        <h3>{item.title}</h3>
                        <p className="lead fw-bold">$ {item.price}</p>
                        <div className="d-flex align-items-center gap-3">
                            <button onClick={() => handleRemove(item)} className='btn btn-outline-dark'>-</button>
                            <div>{item.quantity}</div>
                            <button onClick={() => handleInsert(item)} className='btn btn-outline-dark'>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;