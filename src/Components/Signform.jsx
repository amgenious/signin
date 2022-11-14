import React from 'react'

const Signform = () => {
  return (
    <>
    <div className='signinbox '>
                    <h1>Sign In</h1>
                    <form method='post'>
                        <div>
                            <label>Email or Phone Number</label>
                            <input type="text" placeholder='' required></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder='' required></input>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <p style={{color:'rgba(73, 55, 175, 1)'}}>Forgot Password?</p>
                            <p style={{color:'rgba(73, 55, 175, 1)'}}>Join</p>
                        </div>
                        </form>
                        <button type='submit' className='buttonSign'>Sign In</button>
                        <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <span></span>
                            <p>Or</p>
                            <span></span>
                        </div>
                        <button type='submit' className='buttonGoogle'><div className='googlelogo'></div><p>Sign in with Google</p></button>
                </div>
    </>
  )
}

export default Signform