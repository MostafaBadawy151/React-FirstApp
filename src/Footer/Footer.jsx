import React from 'react'

export default function Footer() {
  return <>

    <div className="container-fluid  text-center">
        <div className="row p-5 info text-white">
            <div className="col-md-4">
                <div className="item">
                <h3>Location</h3>
                <p>2215 John Daniel DriveClark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item">
                    <h3>AROUND THE WEB</h3>
                    <div className="social-icons d-flex justify-content-center align-items-center">
                        <div className="icon-cover mx-2">
                    <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className="icon-cover mx-2">
                    <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div className="icon-cover mx-2">
                    <i class="fa-brands fa-linkedin"></i>
                        </div>
                        <div className="icon-cover mx-2">
                    <i class="fa-brands fa-github"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Mostafa</p>
                </div>
            </div>
        </div>
        <div className="row">
        <footer className='text-center bg-dark text-white p-3 w-100 m-0 w-100'>Copyright © Your Website 2023</footer>

        </div>
    </div>
  </>
}
