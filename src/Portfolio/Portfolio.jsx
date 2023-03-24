import React from 'react'
import cabin from '../../images/cabin.png'
import cake from '../../images/cake.png'
import circus from '../../images/circus.png'
import game from '../../images/game.png'
import safe from '../../images/safe.png'
import submarine from '../../images/submarine.png'


export default function Portfolio() {

    function display(index) {
        let imgList = Array.from(document.querySelectorAll('.item img'));
        let lightBoxContainer = document.getElementById('lightBoxContainer');
        lightBoxContainer.classList.remove('d-none');
        let imgSrc = imgList[index].getAttribute('src');
        document.querySelector('.img-zzz').style.backgroundImage = `url(${imgSrc})`;
        document.getElementById('img-name').innerText= imgList[index].getAttribute('name');             
    }


    function close() {
        document.getElementById('lightBoxContainer').classList.add('d-none');
        
    }
    document.addEventListener('keydown', function(e) {
          if (e.code == 'Escape') {
            close();
        }
    })
    
        
        
        

  return <>
  <div className='text-center header p-5 row'>
    <h2 className='porto'>PORTFOLIO</h2>
    <div className='d-flex justify-content-center align-items-center'>
            <div className='divider-porto'></div>
            <div className='divider-porto-icon mx-2 fa-2x'><i class="fa-solid fa-star"></i></div>
            <div className='divider-porto'></div>
    </div>
    
  </div>
  <div className="container">
  <div className="row gy-5 mb-5">
    <div className="col-md-4">
        <div className="item position-relative " onClick={()=> display(0)}> 
            <img src={cabin} alt="" className='w-100 rounded-5' name='LOG CABIN'/>
            <div className="overlay rounded-5"><i class="fa-solid fa-circle-plus text-white fa-2x"></i></div>
        </div>
    </div>
    <div className="col-md-4" onClick={()=> display(1)}>
        <div className="item position-relative ">
            <img src={cake} alt="" className='w-100 rounded-5' name='TASTY CAKE'/>
            <div className="overlay rounded-5"><i class="fa-solid fa-circle-plus text-white fa-2x"></i></div>
        </div>
    </div>
    <div className="col-md-4" onClick={()=> display(2)}>
        <div className="item position-relative " >
            <img src={circus} alt="" className='w-100 rounded-5' name='CIRCUS TENT'/>
            <div className="overlay rounded-5"><i class="fa-solid fa-circle-plus text-white fa-2x"></i></div>
        </div>
    </div>
    <div className="col-md-4" onClick={()=> display(3)}>
        <div className="item position-relative ">
            <img src={game} alt="" className='w-100 rounded-5' name='CONTROLLER'/>
            <div className="overlay rounded-5"><i class="fa-solid fa-circle-plus text-white fa-2x"></i></div>
        </div>
    </div>
    <div className="col-md-4" onClick={()=> display(4)}>
        <div className="item position-relative ">
            <img src={safe} alt="" className='w-100 rounded-5' name='LOCKED SAFE'/>
            <div className="overlay rounded-5"><i class="fa-solid fa-circle-plus text-white fa-2x"></i></div>
        </div>
    </div>
    <div className="col-md-4" onClick={()=> display(5)}>
        <div className="item position-relative ">
            <img src={submarine} alt="" className='w-100 rounded-5' name='SUBMARINE'/>
            <div className="overlay rounded-5"><i class="fa-solid fa-circle-plus text-white fa-2x"></i></div>
        </div>
    </div>
  </div>
  </div>
  <div id="lightBoxContainer" class="text-center d-none">
        <div id="lightbox">
        <i id="closebtn" class="fa-solid fa-circle-xmark" onClick={close}></i>
           <div>
            <h2 id='img-name'>Protfolio</h2>
           </div>
           <div className='d-flex justify-content-center align-items-center'>
            <div className='divider-porto'></div>
            <div className='divider-porto-icon mx-2 fa-2x'><i class="fa-solid fa-star"></i></div>
            <div className='divider-porto'></div>
        </div>  
           <div className='img-zzz'></div>
           <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, mollitia!</p>
            <button className='btn btn-info text-white' onClick={close}> <i className='fa-solid fa-circle-xmark text-white'></i> Close Window</button>
        </div>

    </div>
    
  </>
    
}
