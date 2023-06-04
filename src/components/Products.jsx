import { useContext } from 'react';
import Loading from './Loading';
import ShowProducts from './ShowProducts';
import { DataContext } from '../App';

const Products = () => {
    const {loading} = useContext(DataContext);

    // console.log(data);
    // console.log(filter);

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    { loading ? <Loading /> : <ShowProducts /> }
                </div>
            </div>
        </div>
    );
};

export default Products;