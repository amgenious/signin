import React from 'react'
import Signform from './Signform'

const SignInPage = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-6">
            <div className='leftside' style={{height:'800px',display:'flex', flexDirection:'column', justifyContent:'space-evenly',}}>
                <div className='textlogo text-center'>
                    <h1>IL.</h1>
                </div>
                <Signform />
            </div>
            </div>
            <div className="col-12 col-lg-6 bgimage">
                 <div className='rightside'>
                    <div className='group'></div>
                 </div>   
            </div>
        </div>
    </div>
    </>
  )
}

export default SignInPage