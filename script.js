let display = document.getElementById('screen')
const wipe = () =>{
    display.value = '';
}
const show = (n) =>{
    display.value += n;
}
const calc = () =>{
    display.value = eval(display.value)
}
const c = () =>{
    display.value = display.value.slice(0, -1)
}