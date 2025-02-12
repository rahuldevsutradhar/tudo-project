

let allPost=document.querySelector('.allPost');
let name=document.querySelector('.name');
let caption=document.querySelector('.caption');
let button=document.querySelector('.button');
let error=document.querySelector('.error');
let updateButton=document.querySelector('.updateButton');




let arr=[  ]

let indexInfo;

button.addEventListener('click', function(){
  if (!name.value && !caption.value) {
    error.innerHTML='fill up your data';
    error.style.color='red'   
    error.style.marginTop='20px'   
  }else if(!isNaN(name.value && caption.value)){
    error.innerHTML='please enter a latter';
    error.style.color='red'   
    error.style.marginTop='20px'
  }else{

    arr.push({
      name:name.value,
      caption:caption.value
     })
     error.innerHTML=""
     allPost.innerHTML=""
     display();
     name.value=""
     caption.value=""
    
  }
    
})


updateButton.addEventListener('click', function(){
  arr[indexInfo].name=name.value
  arr[indexInfo].caption=caption.value

  allPost.innerHTML=""
  display()

  updateButton.style.display="none"
  button.style.display="block"

  name.value=""
  caption.value=""

  
})



function display() {
    arr.map(item =>{
        allPost.innerHTML +=`<div class="card mt-3"  style="width: 18rem;">   
                    <div class="card-body">
                      <h5 class="card-title">${item.name} </h5>
                      <p class="card-text">${item.caption}</p>
                      <button  class="btn btn-primary editButton">Edit info</button>
                      <button  class="btn btn-danger deleteButton">Delete info</button>
                    </div>
                  </div>`
    })

    let deleteButton=document.querySelectorAll('.deleteButton')
    let convertDeleteButton=Array.from(deleteButton)   
    convertDeleteButton.map((items,index) => {
      items.addEventListener('click', function(){
        arr.splice(index,1)
        allPost.innerHTML=""
        display()       
      })
    })
    let editButton=document.querySelectorAll('.editButton')
    let convertEditButton=Array.from(editButton)
    convertEditButton.map((edit,index) =>{
      edit.addEventListener('click', function() {
        name.value=arr[index].name
        caption.value=arr[index].caption

        indexInfo=index

        updateButton.style.display="block"
        button.style.display="none"
        
      })
    })
 

}
