const projects =[
  {
  id: 1,
  title: "Example 1 Private",  
  info: "No description",
},
{
  id: 2,
  title: "my-goals",  
  info: "No description",
},
{
  id: 3,
  title: "Sample my Goals",  
  info: "goals for the NSS Bootcamp",
} 
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const projectsOnDom =(projects) => {
let projectString ="";
projects.forEach((project) => {
  projectString += `
  <div class="card">
  <div class="card-body">
    <p class ="card-title">${project.title}</p>
    <p class ="card-info">${project.info}</p>
  </div>
</div>`
  })
  renderToDom("#projects", projectString)
}
projectsOnDom(projects)

const formOnDom = () => {
  let formInfo= `<form id ="projectForm">
  <h5>Create a new project</h5>
  <h6>Coordinate, track, and update your work in one place, so projects stay transparaent and on schedule.</h6>
  <div id ="projectForm" class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Project Board Name</label>
  <input type="text" class="form-control" id="title" placeholder="Example 2">
  <label for="formGroupExampleInput" class="form-label">Description(optional)</label>
  <input type="text" class="form-control" id="info" placeholder="">
  <button type="submit" id ="create" class="btn btn-success">Create project</button>
</div>
</form>`;
renderToDom("#projectForm", formInfo)
}
formOnDom()


  const createProject = (e) => {
    e.preventDefault();
    const newProject = {
      id: projects.length +1, 
      title: document.querySelector("#title").value, 
      info: document.querySelector("#info").value,
    }
    projects.push(newProject) 
    projectsOnDom(projects)
   document.querySelector("#projectForm").reset()
    
  }
  form.addEventListener("submit", createProject)
//event listener
// const createButton = document.querySelector("#submit")

// createButton.addEventListener("click", () => {
//   projectsOnDom(projects)
//   formOnDom ()
// })
