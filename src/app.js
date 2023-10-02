function aktif(){
    let menu = document.getElementById('menu');
    menu.classList.toggle('tranform');
    menu.classList.toggle('translate-x-0');
    menu.classList.toggle('hidden')
}

const darkMode = document.querySelector('#darkMode');
const html = document.querySelector('html');
const dark = document.querySelector('#dark');
darkMode.addEventListener('click', function(){
    html.classList.toggle('dark');
    darkMode.classList.toggle('bg-white');
    dark.classList.toggle('translate-x-10')
    dark.classList.toggle('text-white');

    

})