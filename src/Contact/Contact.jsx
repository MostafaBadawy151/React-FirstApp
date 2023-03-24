import React from 'react'
import $ from 'jquery';


export default function Contact() {


  function nameValidation() {
    let inputName = document.getElementById('name');
    if (inputName.value !="") {
      $('.sname').animate({top:'0px'},1000);
    }
    else {
      $('.sname').animate({top:'30px'},1000);
      document.querySelector('.name-alert').classList.add('d-none');
    }
    
    let regx= /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
    if (regx.test(inputName.value)) {
        document.querySelector('.name-alert').classList.add('d-none');
        if (regx.test(inputName.value) ) {
        document.querySelector('.name-alert').classList.add('d-none');
        return true;
        }

    }

    else{
        document.querySelector('.name-alert').classList.remove('d-none');
        return false;
    }
    
}
function emailValidation() {
  let inputEmail = document.getElementById('email');
  if (inputEmail.value !="") {
    $('.semail').animate({top:'0px'},1000);
  }
  else 
    $('.semail').animate({top:'30px'},1000);
  console.log(inputEmail);
    let regx = /^\S+@\S+\.\S+$/;
    if (regx.test(inputEmail.value)) {
        document.querySelector('.email-alert').classList.add('d-none');

        if (regx.test(inputEmail.value)) {
        document.querySelector('.email-alert').classList.add('d-none');
        return true;
            
        }
    }
    else{
        document.querySelector('.email-alert').classList.remove('d-none');
        return false;
    }
}
function phoneValidation() {
  let inputPhone = document.getElementById('phone');
  if (inputPhone.value !="") {
    $('.sphone').animate({top:'0px'},1000);
  }
  else 
    $('.sphone').animate({top:'30px'},1000);
  console.log(inputPhone);
    let regx = /^(002)?01[125][0-9]{8}$/;
    if (regx.test(inputPhone.value)) {
        document.querySelector('.phone-alert').classList.add('d-none');
        if (regx.test(inputPhone.value)) {
        document.querySelector('.phone-alert').classList.add('d-none');
        return true;
            
        }
    }
    else{
        document.querySelector('.phone-alert').classList.remove('d-none');
        return false;
    }
}
function checkValid() {
  nameValidation()
  emailValidation()
  phoneValidation()
     
}
  return<>
  <div className='text-center header p-5 row'>
    <h2 className='porto'>CONTACT ME</h2>
    <div className='d-flex justify-content-center align-items-center'>
            <div className='divider-porto'></div>
            <div className='divider-porto-icon mx-2 fa-2x'><i class="fa-solid fa-star"></i></div>
            <div className='divider-porto'></div>
    </div>
    
  </div>
  <div className="container d-flex justify-content-center align-items-center">
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-9">
            <label htmlFor="" className='ms-2 text-success sname'>Name</label>
            <input type="text" name="name" id="name"  className='form-control my-2' placeholder='Name' onKeyUp={nameValidation}/>
            <div class="name-alert mt-2 d-none">
                        <p class="alert alert-danger p-2 rounded-2">Special characters and numbers not allowed
                        </p>
                    </div>
        </div>
        <div className="col-md-9">
            <label htmlFor="" className='ms-2 text-success semail'>Email</label>
            <input type="email" name="" id="email"  className='form-control my-2' placeholder='Email Address' onKeyUp={emailValidation}/>
            <div class="email-alert mt-2  d-none">
                        <p class="alert alert-danger  p-2 rounded-2">Email not valid *exemple@yyy.zzz</p>
                    </div>
        </div>
        <div className="col-md-9">
            <label htmlFor="" className='ms-2 text-success sphone'>Phone</label>
            <input type="text" name="number" id="phone"  className='form-control my-2'placeholder='Phone Number'onKeyUp={phoneValidation}/>
            <div class="phone-alert mt-2  d-none"> 
                        <p class="alert alert-danger  p-2 rounded-2">Enter valid Phone Number</p>
                    </div>
        </div>
        <div className="col-md-9 mt-4">
        <textarea name="" id="message" placeholder='Mesage' className='form-control'rows={5} cols={10}></textarea>
        </div>
        <div className="col-md-9">
            <button className='btn btn-info my-3 text-white' onClick={checkValid}>Send</button>
         </div>
    </div>
  </div>
  </>
}
