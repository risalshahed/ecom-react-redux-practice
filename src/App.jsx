import { createContext, useEffect, useState } from 'react'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom';
import EachProduct from './components/EachProduct';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export const DataContext = createContext()

function App() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        /* fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(fetchedData => console.log(fetchedData)) */
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch('https://fakestoreapi.com/products');
            if(componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
                // console.log(filter);
            }
            /* return () => {
                // componentMounted = false;
            } */
        }

        getProducts();
    }, [])

    return (
        <>
            <NavBar />
            <DataContext.Provider value={{data, filter: [filter, setFilter], loading}}>
                <Routes>
                    {/* <Route exact path='/' element={<Home />} /> */}
                    <Route exact path='/' Component={Home} />
                    <Route exact path='/products' Component={Products} />
                    <Route exact path='/products/:id' Component={EachProduct} />
                    <Route exact path='/cart' Component={Cart} />
                    <Route exact path='/checkout' Component={Checkout} />
                </Routes>
            </DataContext.Provider>
        </>
    )
}

export default App