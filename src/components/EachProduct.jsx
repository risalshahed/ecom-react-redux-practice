import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import { addCart } from '../../redux/actionTypes';

const EachProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = product => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setLoading(false)
        }

        getProduct();
    }, []);

    const DisplayEachProduct = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height='400px' width='400px' />
                </div>

                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h2 className='display-5'>
                        {product.title}
                    </h2>
                    <p className="lead fw-bolder">
                        Rating { product.rating && product.rating.rate }
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        {product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <button onClick={() => addProduct(product)} className="btn btn-outline-dark px-4 py-2">
                        Add to Cart
                    </button>
                    <Link to='/cart' className="btn btn-dark ms-3 px-4 py-2">
                        Go to Cart
                    </Link>
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    { loading ? <Loading /> : <DisplayEachProduct /> }
                </div>
            </div>
        </div>
    );
};

export default EachProduct;