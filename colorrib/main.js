let open = document.getElementById('open');
let close = document.getElementById('close');
let link = document.getElementById('links');

open.addEventListener('click',function(){
    open.style.display = 'none';
    close.style.display = 'block';
    link.style.display = 'flex';
})

close.addEventListener('click',function(){
    open.style.display = 'block';
    close.style.display = 'none';
    link.style.display = 'none';
})