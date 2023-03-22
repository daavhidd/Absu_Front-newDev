import React from 'react';
import PDPLOG0 from '../../assets/images/PDP-LOGO.png';

export default function IdentityValidation() {
  return (
    <div>
            <center >
                 <div className='row'>
                    <div className='col-lg-4 col-sm-12 bg-img-ikonne'>
                    <div className='text-right'>
                            <img className='' src={PDPLOG0} style={{width: '200px'}}/>
                    </div>
                    <center>
                    <div className='' style={{borderRadius: '50%', 
                    width: '200px',
                        height: '200px',
                        backgroundColor: 'green'}}>
                        <img />
                    </div>
                    </center>
                    <div className='text-left text-success mt-5'>
                            <p>NAME:</p>
                            <p>LGA:</p>
                            <p>POLLING UNIT:</p>
                            <p>WARD:</p>
                    </div>
                    <div className=' mt-5 pt-2 pb-2 pl-1' style={{backgroundColor: 'red'}}>
                        <p className='text-white' style={{fontSize: '30px'}}>UCHE NDI ABIA 2023</p>
                    </div>
                    
                    </div>
                    
                </div>  
            </center>
    </div>
  )
}
