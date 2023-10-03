//esto es para el efecto parallax que tiene al inicio la página

let text = document.getElementById('text');
let border = document.getElementById('border');
let leaf = document.getElementById('leaf');
let leaf2 = document.getElementById('leaf2');
let leaf3 = document.getElementById('leaf3');
let mv = document.getElementById('mv');
let birds = document.getElementById('birds');
let m = document.getElementById('m');
let v = document.getElementById('v');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    text.style.marginRight = value * 0.8 + 'px';
    border.style.marginRight = value * 0.8 + 'px';
    leaf.style.top = value * -1.0 + 'px';
    leaf2.style.left = value * 1.0 + 'px';
    leaf3.style.left = value * -0.5 + 'px';
    mv.style.marginTop = value * 0.3 + 'px';
    birds.style.left = value * 1.5 + 'px';
    m.style.left = value * -0.5 + 'px';
    v.style.left = value * -0.5 + 'px';
})

