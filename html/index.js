const form=document.querySelector('#myForm')
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data=new FormData(form);
    console.log(Object.fromEntries(data.entries()));
})
