const addWordForm = (obj = {}) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
  <form>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter a word" value="${obj.title || ''}" required>
  </div>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="description" aria-describedby="wordDescription" placeholder="Word Description" value="${obj.description || ''}" required>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="typeCheck1" id="tech" value="${obj.tech ? 'checked' : ''}>
    <label class="form-check-label" for="techCheck">Tech</label>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="typeCheck2" id="language" value="${obj.language ? 'checked' : ''}>
    <label class="form-check-label" for="languageCheck">Language</label>
  </div>
   <button type="submit" id="${obj.firebaseKey ? `updateWord--${obj.firebaseKey}` : 'submit-word'}" class="btn btn-primary">Submit</button>
  </form>
  `;
};

export default addWordForm;
