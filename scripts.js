/* Add your JavaScript to this file */
const links = document.getElementsByTagName("a");
    //console.log(links);  
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
//document.addEventListener("DOMContentLoaded",function(){
    const bttn= document.getElementsByClassName(".btn");

    
    bttn.addEventListener("submit", function(event){
        event.preventDefault();

        const email= document.getElementById("email").value;
        const emessage = document.getElementsByClassName(".message");
        const regx =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/

        if (!email.test(regx)){
            emessage.textContent="Please enter a valid email address";

        }else{
            emessage.textContent="Thank you! Your email address ",$emailField.value,"has been to our mailing list!"
        }
        return emessage;

    });
    
//});