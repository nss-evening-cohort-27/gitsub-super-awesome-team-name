let repos = [
  {
    id: 1,
    title: 'E27-Sorting-Hat',
    desc: 'Individual project to emulate Pet Adoption',
    lang: 'JavaScript'
  },
  {
    id: 2,
    title: 'E27-Pet-Adoption',
    desc: 'Exercise to CRUD',
    lang: 'JavaScript'
  },
  {
    id: 3,
    title: 'E27-Link-In-Bio',
    desc: 'Practice using Bootstrap',
    lang: 'HTML'
  },
  {
    id: 4,
    title: 'E27-Product-Cards',
    desc: 'Introduction to Bootstrap cards',
    lang: 'HTML'
  },
  {
    id: 5,
    title: 'E27-Simple-Calculator',
    desc: 'Flexbox exercise',
    lang: 'HTML'
  },
  {
    id: 6,
    title: 'E27-HTML-Resume',
    desc: 'Building HTML version of your resume',
    lang: 'HTML'
  },
];

// render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const renderRepos = (array) => {
  let reposHTML = '';
  array.forEach((repo) => {
    let langIcon;
    switch (repo.lang) {
      case 'JavaScript':
        langIcon = '🟡';
        break;
      case 'HTML':
        langIcon = '🟠'; 
        break;
      case 'CSS':
        langIcon = '🔵';
        break;
      default:
    }
    reposHTML += `<div class="card">
      <div class="card-header">${repo.title}</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>${repo.desc}</p>
          <p class='lang'>${langIcon} ${repo.lang}</p>
        </blockquote>
      </div>
    </div>
    `;
  });
  renderToDom('#cards', reposHTML);
};

// render form to DOM
const renderForm = () => {
  const formHTML = `
  <form>
    <h4>Create a new repository</h4><hr>
    <div class="mb-3">
      <label for="name" class="form-label">Repository Name<span style="color: rgb(240, 95, 95)"> *</span></label>
      <input type="text" class="form-control name" id="repoform">
      <div id="repoform" class="form-text">Great repository names are short and memorable. Need inspiration? How about <span style="color: green">super-super-engine</span>?</div>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description (optional)</label>
      <textarea class="form-control" id="repoform" rows="1"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Create Repository</button>
    </div>
  </form>`;
  renderToDom('#form', formHTML);
}
;
// event listener 
const reposButton = document.querySelector('#repos');

reposButton.addEventListener('click', () => {
  renderForm();
  renderRepos(repos);
});
