const projects =[
  {
  id: 1,
  title: "Example 1 Private",  
  info: "No desciprtion",
},
{
  id: 2,
  title: "my-goals",  
  info: "No desciprtion",
},
{
  id: 3,
  title: "Sample my Goals",  
  info: "No desciprtion",
} 
]

const renderToDom = (divId, htmlToRender) => {
const selectedDiv = document.querySelector(divId)
selectedDiv.innerHTML = htmlToRender}

const projectsOnDom =(projects) => {
let projectString =""
projects.forEach((project) => {
  projectString += `
  <div class="card">
  <div class="card-body">
    <p>${project.title}</p>
    <p>${project.info}</p>
  </div>
</div>`
  })
  renderToDom("#projects", projectString)
}

const formOnDom = () => {
  const formProject = `<div class="mb-3">
  <h3>Create a new project</h3>
  <h4>Coordinate, track, and update your work in one place, so projects stay transparaent and on schedule.</h4>
  <label for="formGroupExampleInput" class="form-label">Project Board Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example 2">
</div>`
renderToDom("#projectForm", formProject)
}

//event listener
const projectButton = document.querySelector("#proj")

projectButton.addEventListener("click", () => {
  projectsOnDom ()
  formOnDom ()
})
