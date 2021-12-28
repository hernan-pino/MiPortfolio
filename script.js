const projects = document.querySelectorAll('.project')

window.addEventListener('scroll', checkProject)


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
 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 300) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)