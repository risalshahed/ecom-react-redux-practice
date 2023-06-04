import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { DataContext } from '../App';
import { Link } from 'react-router-dom';

const ShowProducts = () => {
    const {data, filter: [filter, setFilter], loading} = useContext(DataContext);
    // console.log(data);

    const filteredProducts = cat => {
        const updatedFilter = data.filter(x => x.category === cat);
        setFilter(updatedFilter);
    }

    return (
        <>
            {/* <div className='buttons d-flex justify-content-center mb-5 pb-5 gap-2'>
                <button className="btn btn-outline-dark">All</button>
                <button className="btn btn-outline-dark">Men's Clothing</button>
                <button className="btn btn-outline-dark">WoMen's Clothing</button>
                <button className="btn btn-outline-dark">Jewelery</button>
                <button className="btn btn-outline-dark">Electronics</button>
            </div> */}
            <div className='buttons d-flex justify-content-center mb-5 pb-5 gap-2'>
                <button onClick={() => setFilter(data)} className="btn btn-outline-dark">All</button>
                <button onClick={() => filteredProducts("men's clothing")} className="btn btn-outline-dark">Men's Clothing</button>
                <button onClick={() => filteredProducts("women's clothing")} className="btn btn-outline-dark">WoMen's Clothing</button>
                <button onClick={() => filteredProducts('jewelery')} className="btn btn-outline-dark">Jewelery</button>
                <button onClick={() => filteredProducts('electronics')} className="btn btn-outline-dark">Electronics</button>
            </div>

            {
                filter.map(product => {
                    return (
                        <>
                            <div className='col-md-3 mb-4' key={product.id}>
                                <Card className='text-center' style={{ width: '250px' }}>
                                    <Card.Img variant="top" src={product.image} alt={product.title} height='250px' />
                                    <Card.Body>
                                        <Card.Title>{product.title.substring(0,12)}...</Card.Title>
                                        <Card.Text className='lead fw-bold'>
                                            ${product.price}
                                        </Card.Text>
                                        <Link to={`/products/${product.id}`}>
                                            <Button variant="btn btn-outline-dark">Buy Now</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </>
                    )
                })
            }
        </>
    );
};

export default ShowProducts;