


let isModalOpen = false;

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_4uyxiya',
            'template_u04ukmc',
            event.target,
            'user_henYbMMsP2fWcBJobMWCO'
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