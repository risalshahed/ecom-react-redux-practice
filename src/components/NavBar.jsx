import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const state = useSelector(state => state.handleCart);
    // console.log(state);
    // console.log(state.handleCart);

    return (
        <Navbar bg="white py-3 shadow-sm" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold fs-4' href="#">
                    Our Collection
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                    </Nav>

                    <div className="buttons nav-anchors">
                        <Link to='/login' className="btn btn-outline-dark">
                            <i className="fa fa-sign-in">
                                <span className='ms-2'>Login</span>
                            </i>
                        </Link>
                        <Link to='/register' className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus">
                                <span className='ms-2'>Register</span>
                            </i>
                        </Link>
                        <Link to='/cart' className="btn btn-outline-dark ms-2">
                            <i className="fa fa-shopping-cart">
                                <span className='ms-2'>Cart ({state.length})</span>
                            </i>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default NavBar;