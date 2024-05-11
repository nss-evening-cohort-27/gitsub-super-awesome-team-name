// Array to store saved projects
let savedProjects = [];

function handleFormSubmit(event) {
    event.preventDefault(); 
    console.log('Form submitted'); 
    const repoName = document.getElementById('repoName').value; 
    const repoUrl = document.getElementById('repoUrl').value; 
    const repoDesc = document.getElementById('repoDesc').value; 
    
    console.log('Project Name:', repoName); =
    console.log('Project URL:', repoUrl); 
    console.log('Project Description:', repoDesc); 
    
    savedProjects.push({ name: repoName, url: repoUrl, description: repoDesc });

    
    console.log('Saved projects:', savedProjects);

    
    document.getElementById('repoName').value = '';
    document.getElementById('repoUrl').value = '';
    document.getElementById('repoDesc').value = '';

    
    displaySavedProjects();
}

function displaySavedProjects() {
    
    const savedProjectsContainer = document.getElementById('savedProjects');

   
    savedProjectsContainer.innerHTML = '';

   
    savedProjects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p><a href="${project.url}" target="_blank">${project.url}</a></p>
            <p>${project.description}</p>
        `;
        savedProjectsContainer.appendChild(projectElement);
    });
}

document.getElementById('pinForm').addEventListener('submit', handleFormSubmit);
