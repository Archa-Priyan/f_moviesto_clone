import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className='bg-dark w-100 '>
      <hr />
        <div className='mt-5' style={{marginLeft:'15%'}} >
          <img src="https://fmovies.chat/fmovies-logo.png" alt="" height={'50px'}/>
          <div className='d-flex align-items-center justify-content-middle me-5 ' style={{marginTop:'-5%',marginLeft:'75%'}}>
            <a href='#' className='me-3 text-light' style={{textDecoration:'white'}}><i class="fa-brands fa-facebook-f fa-2x"></i></a>        
            <a href='#' ><i class="fa-brands fa-twitter fa-2x text-light"></i></a>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-center flex-column mt-5' style={{color:'gray'}}>
          <p>Copyright © 2023 - FMovies</p>
          <div className='link flex-column' style={{marginTop:'-1%'}}>
            <a href=''className='link' style={{textDecoration:'none',color:'gray'}}>Home | Movies | TV Series </a>
          </div>
          <div className='d-flex align-items-center justify-content-center flex-column ' style={{color:'gray'}}>
            <br />
            <div>FMovies is a Free Movies streaming site with zero ads. We let you watch movies online without</div>
            <div>any register or paying, with over 10000 movies and TV-Series. You can also Download full</div>
            <p>movies from Fmovies and watch it later if you want.</p>
          </div>
        </div>
     </div>
      
      
    </>
  )
}

export default Footer