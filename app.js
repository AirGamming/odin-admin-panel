const projectsDiv = document.querySelector(".projects")
const max = 5
for(i=0; i<=max; i++) {
    const project = document.createElement("div")
    project.innerHTML = `
        <h2>Project ${i}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <div class="buttons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-solid fa-code-fork"></i>
                </div>
        `
    project.classList.add("project")
    projectsDiv.appendChild(project)
}