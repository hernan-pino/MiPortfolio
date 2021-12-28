const projects = document.querySelectorAll('.project')

window.addEventListener('scroll', checkProject)


function checkProject(){
    const trigger = window.innerHeight / 5 *4
 
    projects.forEach(project => {
        const projectTop = project.getBoundingClientRect().top
 
        if(projectTop < trigger){
            project.classList.add('show')
        }
    })
 }
 
 