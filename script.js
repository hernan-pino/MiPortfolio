const projects = document.querySelectorAll('.project')

// pa copiar mi correo - clipboar
const emailBtn = document.getElementById('email-copy')
const correo = document.getElementById('mi-correo')

window.addEventListener('scroll', checkProject)


// copy email code

function copyEmail(){
    if(window.innerWidth > 680 ) {
        emailBtn.addEventListener('click', () => {
    
            copyText(correo)
            
        })
    } else {
        correo.addEventListener('click', () => {
            copyText(correo)
        })
    }
}

copyEmail()

function copyText(htmlEl){
    if(!htmlEl) {
        return
    }

    let elText = htmlEl.innerText
    let inpputEl = document.createElement('input')
    inpputEl.setAttribute('value', elText)
    document.body.appendChild(inpputEl)

    inpputEl.select()

    document.execCommand('copy')

    inpputEl.parentNode.removeChild()

}


// priject in
function checkProject(){
    const trigger = window.innerHeight / 5 *4

    if(window.innerWidth >= 750 ) {
        
    projects.forEach(project => {
        const projectTop = project.getBoundingClientRect().top
 
        if(projectTop < trigger){
            project.classList.add('show')
        } 
    })
    } 
    
 
}

// show scroll
 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 300) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)