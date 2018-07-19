// Function to generate the HTML
function createHtml(ourData) {
  // ourData is just a parameter and can be named anything
  const rawTemplate = document.querySelector('#ourTemplate').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const ourGeneratedHTML = compiledTemplate(ourData);

  const ourContainer = document.querySelector('#container');
  ourContainer.innerHTML = ourGeneratedHTML;
}

const url = 'data.json';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    // Read the response as json.
    return response.json();
  })
  .then(data => {
    // Do stuff with the JSON
    // console.log(data);
    createHtml(data);
  })
  .catch(error => {
    console.log('Looks like there was a problem: \n', error);
  });

// Vanilla JS solution using event delegation, target, matches and destructuring
const ourContainer = document.querySelector('#container');

ourContainer.addEventListener('click', ({ target }) => {
  // Arrow funcion returns an object
  if (target.matches('.btn')) {
    const detailsContainer = target.parentNode.parentNode.nextElementSibling;
    detailsContainer.classList.toggle('visible');
  }
});
