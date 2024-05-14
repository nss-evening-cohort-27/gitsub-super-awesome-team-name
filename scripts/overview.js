let repos = [
    {
      id: 1,
      title: 'Project 1',
      desc: 'Individual project to emulate Pet Adoption',
      lang: 'JavaScript'
    },
    {
      id: 2,
      title: 'Project 2',
      desc: 'Exercise to CRUD',
      lang: 'JavaScript'
    },
    {
      id: 3,
      title: 'Project 3',
      desc: 'Practice using Bootstrap',
      lang: 'HTML'
    },
    {
      id: 4,
      title: 'Project 4',
      desc: 'Introduction to Bootstrap cards',
      lang: 'HTML'
    },
    {
      id: 5,
      title: 'Project 5',
      desc: 'Flexbox exercise',
      lang: 'HTML'
    },
    {
      id: 6,
      title: 'Project 6',
      desc: 'Builing HTML version of your resume',
      lang: 'HTML'
    },
  ];

  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

// Array to store saved projects
let savedProjects = [];
const displaySavedProjects = (array) => {
  let projectsHTML = '';
  array.forEach((project) => {
    projectsHTML += `
      <div style="border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 10px;">
        <h3>${project.title}</h3>
        <p><a href="${project.url}" target="_blank">${project.url}</a></p>
        <p>${project.desc}</p>
      </div>`;
  });
  renderToDom("#savedProjects", projectsHTML);
};

function handleFormSubmit(event) {
    event.preventDefault(); 
    console.log('Form submitted'); 
    const repoName = document.getElementById('repoName').value; 
    const repoUrl = document.getElementById('repoUrl').value; 
    const repoDesc = document.getElementById('repoDesc').value; 

    const newRepository = {
      id: repos.length + 1,
      title: repoName,
      desc: repoDesc,
      lang: "", 
      url: repoUrl, 
    };

    console.log('Project Name:', repoName); 
    console.log('Project URL:', repoUrl); 
    console.log('Project Description:', repoDesc); 

    savedProjects.push(newRepository)


    console.log('Saved projects:', savedProjects);


    document.getElementById('repoName').value = '';
    document.getElementById('repoUrl').value = '';
    document.getElementById('repoDesc').value = '';


    displaySavedProjects(savedProjects);
};


document.getElementById('pinForm').addEventListener('submit', handleFormSubmit);