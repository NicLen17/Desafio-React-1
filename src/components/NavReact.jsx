import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default function NavReact(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">FR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.setsection('Cards')}>Cards</Nav.Link>
                    <Nav.Link onClick={() => props.setsection('Carro')}>Carrusel</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}