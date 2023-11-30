function opentab(tabname) 
{
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (tablink of tablinks) 
    {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) 
    {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwyTx218Ni55vaDctUE-lTqXzLQ05EqyAjhe_9uffvCIS3BzDfpWxQP3-8pkuza__bC2A/exec'
const form = document.forms['submitForm']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => 
{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) 
            {
                msg.innerHTML = "Message sent successfully";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            } 
            
            else 
            {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Error sending message. Please try again later.";
        });
});
