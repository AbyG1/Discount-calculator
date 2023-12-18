import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Calculator(){


    return(

        <main>

            <Container className='my-5 bg-dark rounded'>
                <Row className='justify-content-around p-5'>
                    <div className="col-lg-4 mb-5 ">
                        <div className='text-center mb-5'>
                            <h2 className='text-light'>Original price</h2>
                            <TextField id="outlined-basic" label="price" variant="outlined" className='yellow' />
                        </div>
                        <div className='text-center mb-2'>
                            <h2 className='text-light'>Discount</h2>
                            <h2 className='text-light'>{}%</h2>
                            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" className='text-warning'/> 
                        </div>
                        <div className='text-center'>
                            <Button variant="contained" className='bg-warning'>Calculate</Button>
                        </div>
                        
                    </div>
                    <div className="col-lg-4  display rounded">

                            <div className="text-center text-dark">

                                <h2>Final Price</h2>
                                <p className='display-3'>33</p>
                                <h2>You Save</h2>
                                <p className='display-3'>33</p>


                            </div>


                    </div>
                </Row>
            </Container>



        </main>


    )


}

export default Calculator