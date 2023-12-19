import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';







function Calculator(){

    const [originalPrice ,setOriginalPrice] = useState(0);
    const [discount,setDiscount] = useState(0)
    const [finalPrice,setFinalPrice] = useState(0);
    const [savedPrice,setSavedPrice] = useState(0)

   

    const calcultaeDiscout = (e) => {
        let priceYouSave = originalPrice * discount / 100
        let priceToPay = originalPrice - priceYouSave

        setFinalPrice(priceToPay)
        setSavedPrice(priceYouSave)
    }

    const resetValue = (e) => {
        setOriginalPrice(0)
        setFinalPrice(0)
        setSavedPrice(0)
        
    }

    return(

        <main>

            <Container className='my-5 bg-dark rounded'>
                <Row className='justify-content-around p-5'>
                    <div className="col-lg-4 mb-5 ">
                        <div className='text-center mb-5'>
                            <h2 className='text-light'>Original price</h2>
                            <TextField type='number' value={originalPrice||""} onChange={(e) => setOriginalPrice(e.target.value)} id="outlined-basic"  variant="outlined" className='yellow' />
                        </div>
                        <div className='text-center mb-2'>
                            <h2 className='text-light'>Discount</h2>
                            <h2 className='text-light'>{discount}%</h2>
                            <Slider defaultValue={0} onChange={(e) => setDiscount(e.target.value)} aria-label="Default"  className='text-warning'/> 
                        </div>
                        <div className='text-center'>
                            <Button variant="contained" onClick={e => calcultaeDiscout(e)} className='bg-warning'>Calculate</Button>
                        </div>
                        
                    </div>
                    <div className="col-lg-4   ">

                            <div className="display rounded text-center text-dark">

                                <h2>Final Price</h2>
                                <p className='display-3'>{finalPrice}</p>
                                <h2>You Save</h2>
                                <p className='display-3'>{savedPrice}</p>
                                

                            </div>
                            <div className='text-center'>
                                <Button variant="outlined" onClick={e => resetValue(e)}>Reset</Button>
                            </div>


                    </div>
                </Row>
            </Container>



        </main>


    )


}

export default Calculator