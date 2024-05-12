let repos = [
  {
    id: 1,
    title: 'Sorting-Hat',
    desc: 'A Harry Potter-style themed app where you can be randomly sorted into one of the four houses of Hogwarts School of Magic for Witches and Wizards.',
    lang: 'JavaScript'
  },
  {
    id: 2,
    title: 'Pet-Adoption',
    desc: 'An application to help you get introducted to Bootstrap cards and using JS to render those cards from an array of objects.',
    lang: 'JavaScript'
  },
  {
    id: 3,
    title: 'Link-In-Bio',
    desc: 'Practice using HTML, CSS & Bootstrap to build a social media resume of sorts.',
    lang: 'HTML'
  },
  {
    id: 4,
    title: 'Simple-Calculator',
    desc: 'Project to help you get familiar with CSS Flexbox',
    lang: 'CSS'
  },
  {
    id: 5,
    title: 'greys-anatomy-lorem-ipsum-generator',
    desc: 'A lorem ipsum generator with medical terms and words from the show Grey\'s Anatomy.',
    lang: 'JavaScript'
  },
  {
    id: 6,
    title: 'how-many-days-until',
    desc: 'A React countdown app of days between today and next year.',
    lang: 'JavaScript'
  }
];

// render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// render search input field
const renderSearch = () => {
  const searchHTML = `
    <input type="text" id="searchInput" class="form-control" placeholder="Find a repository...">
  `;
  renderToDom('#search', searchHTML);
  document.querySelector('#searchInput').addEventListener('input', handleSearch); // event listener for search input
};

// Search function
const handleSearch = () => {
  const searchTerm = document.querySelector('#searchInput').value.toLowerCase();
  const filteredRepos = repos.filter(repo => repo.title.toLowerCase().includes(searchTerm));
  renderRepos(filteredRepos);
};


// render repos to DOM 
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
    reposHTML += `<div class="card" id="repoCard">
      <div class="card-header">${repo.title}</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p class='desc'>${repo.desc}</p>
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
      <input type="text" class="form-control name" id="repoform" required>
      <div id="repoform" class="form-text">Great repository names are short and memorable. Need inspiration? How about <span style="color: green">super-duper-engine</span>?</div>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description (optional)</label>
      <textarea class="form-control desc" id="repoform" rows="1" required></textarea>
    </div>
    <button type="submit" class="btn btn-success">Create Repository</button>
    </div>
  </form>`;
  renderToDom('#form', formHTML);

  document.querySelector('form').addEventListener('submit', formSubmit);
};

// event listener 
const reposButton = document.querySelector('#repos');

reposButton.addEventListener('click', () => {
  renderForm();
  renderRepos(repos);
  renderSearch();
});


const randomLang = () => {
  const langs = ['JavaScript', 'HTML', 'CSS'];
  const randomIndex = Math.floor(Math.random () * langs.length);
  return langs[randomIndex];
};

const formSubmit = (e) => {
  e.preventDefault();

  const repoName = document.querySelector('.form-control.name').value;
  const repoDesc = document.querySelector('.form-control.desc').value;
  const repoLang = randomLang();

  const newRepo = {
    id: repos.length + 1,
    title: repoName,
    desc: repoDesc,
    lang: repoLang
  };

  repos.unshift(newRepo);
  renderRepos(repos);

  document.querySelector('form').reset();
};
