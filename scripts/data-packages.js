const packages = [
  {
    id: 1,
    title: "Docker",
    description: "A software platform used for building applications based on containers --- small and lightweight execution environments",
    image:
      "https://iconduck.com/icons/27287/docker"
      
  },

  {
    id: 2,
    title: "Apache Maven",
    description: "A default package manager used for the Java programming language and the Java runtime environment.",
    image:
      "https://https://iconduck.com/icons/158851/maven"
  },

  {
    id: 3,
    title: "NuGet",
    description: "A free and open source package manager used for the Microsoft development platforms including.NET ",
    image:
      "https://https://iconduck.com/icons/102270/file-type-nuget"
  },

  {
    id: 4,
    title: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for Ruby programming language.",
    image:
      "https://https://iconduck.com/icons/94847/rubygems"
  },

  {
    id: 5,
    title: "npm",
    description: "A package manager for JavaScript, included with Node.js.  npm makes it easy for developers to share and reuse code.",
    image:
      "https://https://iconduck.com/icons/27736/npm"
  },

  {
    id: 6,
    title: "Containers",
    description: "A single place for your team to manage docker images and decide who can see and access your images.",
    image:
      "https://iconduck.com/icons/27287/docker"
  },
    
]

// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

 const renderPackages = (array) => {
  let packagesHTML = '';
  array.forEach((package) => {
    packagesHTML += `<div id="Packages" class="card" style="width: 18rem;">
        <img src="${package.image}" class="card-img-top" alt="...">
        <div class="card-body">
         <p class="card-title>${package.name} </p>  
        <p class="card-text">${package.description}</p>
          <button href="#" class="btn btn-primary">Learn More</button>
      </div>
      </div>`;
    });
  renderToDom('#Packages', packagesHTML);
};
renderPackages(packages);

// form for user to add on the DOM
const form = document.querySelector('form');

// function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate
const createTitle = (e) => {
  e.preventDefault(); 

  const newTitleObj = {
    id: packages.length + 1,
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
    image: document.querySelector("#image").value
  }

  title.push(newTitleObj);
  cardsOnDom(title);
  form.reset();
}

// delete
const app = document.querySelector("#Packages");

app.addEventListener('click', (e) => {
  
  if (e.target.id.includes("delete")) {
       const [, id] = e.target.id.split("--");

    const index = packages.findIndex(e => e.id === Number(id));

    packages.splice(index, 1);

    cardsOnDom(packages);
  }
});

const startApp = () => {
  cardsOnDom(team);
}


startApp();
