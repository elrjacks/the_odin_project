


let isModalOpen = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}


function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_020la48',
            'template_u04ukmc',
            event.target
        ).then(()=>{
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";    
        }).catch(() =>{
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarly unavaible. Please email me directly: eleni.jackson217@gmail.com"
            )
        })
}

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    //toggle modal 
    document.body.classList += " modal--open"
}