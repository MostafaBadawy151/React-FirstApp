import React from 'react'

import avatar from '../../images/avatars.svg'

export default function Home() {
  return <>
    <div className="row home">
        <div className="col-md-12 text-center p-5">
        <img src={avatar} className="w-25"/>
        <div className="header">
        <h2 className='text-white m-3 p-3 start-react'>Start React</h2>
        <div className='divider d-flex justify-content-center align-items-center'>
            <div className='divider-into'></div>
            <div className='divider-into-icon mx-2 text-white fa-2x'><i class="fa-solid fa-star"></i></div>
            <div className='divider-into'></div>
        </div>
        </div>
        </div>
  </div>
  </>
    
  
}
