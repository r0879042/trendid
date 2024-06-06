const closeBtn = document.getElementById('close-btn');
const newsletter = document.querySelector('.subscribe-wrapper');
const fullname = document.getElementById('name');
const email= document.getElementById('email');
const submitBtn =document.querySelector('.submit-btn');
const newsletterform = document.querySelector('.subs-form')


closeBtn.addEventListener('click',() => {
    newsletter.style.display = 'none';
});

newsletterform.addEventListener('submit', sendSubsInfo); 

function sendSubsInfo(e) {
    e.preventDefault();
    if (fullname.value !== "" && email.value !== "") {
        if(checkEmail(email.value) === true){
            addAlert("valid");
        } else {
            
            addAlert("invalid");
        }

    }
       
}
function addAlert(type){
   if (type === "invalid") {
    fullname.classList.add('invalid-alert');
    email.classList.add('invalid-alert')
    
    console.log("Here3");
   }

   if(type === "valid"){
    fullname.classList.add('valid-alert');
    email.classList.add('valid-alert')
   }
    setTimeout(()=>  {
        fullname.classList.remove('invalid-alert','valid-alert');
        email.classList.remove('invalid-alert','valid-alert')
        newsletterform.reset();
    },1000)

}


function checkEmail(emailAddr){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(String(emailAddr).toLowerCase());
}


