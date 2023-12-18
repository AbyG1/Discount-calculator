import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header(){

    return(
        <header>
                <Navbar className="nav shadow">
                    <Container>
                        <Navbar.Brand className='text-dark h1 fw-5'>DISCAL</Navbar.Brand>
                        
                            <Navbar.Text className="me-auto">
                                Your personal discount calculator
                            </Navbar.Text>
                        
                    </Container>
                </Navbar>

        </header>
    );
}
export default Header