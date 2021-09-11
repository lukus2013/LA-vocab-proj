const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vocab-YOU-Larrye</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="all-words">All Words</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="filter-words">Filter Words</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="add-word">Add a Word</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="signout-button">Signout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `;
};

export default navBar;
