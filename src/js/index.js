import '../scss/main.scss';

const url = 'https://api.github.com/users/dziekonskik/repos';
const projectsContainer = document.querySelector('.projects--js');

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    response.forEach((repository) => {
      const { homepage, description, name, html_url } = repository;
      if (description) {
        projectsContainer.innerHTML += ` <div class="github">
      <header class="github__heading">
        <div class="github__heading__dot-container">
          <span class="github__heading__dot github__heading__dot--red"></span>
          <span
            class="github__heading__dot github__heading__dot--yellow"
          ></span>
          <span class="github__heading__dot github__heading__dot--green"></span>
        </div>
      </header>
      <main class="github__main">
        <img
          class="github__main__image"
          src="img/github-white.svg"
          alt="github logo"
        />
        <article class="github__main__text-container">
          <h3 class="github__main__text github__main__text-container--left">
            project:
          </h3>
          <span
            class="github__main__title github__main__text-container--right github__main__text--js"
          >
            ${name}
          </span>
          <p class="github__main__text github__main__text-container--left">
            description:
          </p>
          <span
            class="github__main__text github__main__text-container--right github__main__text--js"
          >
            ${description}
          </span>
          <p class="github__main__text github__main__text-container--left">
            demo:
          </p>
          <span class="github__main__text"><<a
            class="github__main__link github__main__text-container--right github__main__text--js"
            href="${homepage}"
            target="_blank"
            >see here</a
          >>
          </span>
          <p class="github__main__text github__main__text-container--left">
            github:
          </p>
          <span class="github__main__text"><<a
            class="github__main__link github__main__text-container--right github__main__text--js"
            href="${html_url}"
            target="_blank"
            >source code</a
          >></span>
        </article>
      </main>
    </div>`;
      }
    });
  })
  .catch((error) => console.log(error));
