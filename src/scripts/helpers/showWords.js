const showWords = (array) => {
  document.querySelector('#store').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-description">${item.description}.</p>
  </div>
  <button class="btn btn-info" id="edit-word--${item.firebaseKey}">Edit Word</button>
  <button class="btn btn-danger" id="delete-word--${item.firebaseKey}">Delete Word</button>
</div>
    `;
  });
};

export default showWords;
