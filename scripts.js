/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded",function(){
    const links = document.getElementsByTagName("a");
    function hovlink(){
        links.forEach(link =>{
            link.addEventListener('mouseover',()=>{
                link.classList.add('hover');
                console.log(link);
            });
            link.addEventListener('mouseout', ()=>{
                link.classList.remove('hover');
                console.log(link);
            });
        });
    }

    const bttn= document.getElementsByClassName(".btn");

        bttn.addEventListener("click", function(event){
            event.preventDefault();
            validateEmail();
        });


    function validateEmail(){
            const email= document.getElementById("email").value;
            const emessage = document.getElementsByClassName("message");
            const regx =/^([a-zA-Z0-9\._-]+)@([a-zA-Z])+.([a-z]+)?$/;

            if (regx.test(email)){
                emessage.textContent = "Please enter a valid email address";
                alert(emessage);

            }else{
                emessage.textContent = "Thank you! Your email address  has been to our mailing list!";
                alert(emessage);
            }
            

        };
}
    
);