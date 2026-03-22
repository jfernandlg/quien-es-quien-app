const baseCharacters = [
  {
    id: 1,
    name: "Lucía",
    avatar: "img/avatar_01.svg",
    favoriteMovie: "Titanic",
    movieGenre: "Romance",
    idealDestination: "París",
    destinationType: "Ciudad",
    favoriteArtist: "Taylor Swift",
    musicGenre: "Pop"
  },
  {
    id: 2,
    name: "Mateo",
    avatar: "img/avatar_02.svg",
    favoriteMovie: "Mad Max: Fury Road",
    movieGenre: "Acción",
    idealDestination: "Maldivas",
    destinationType: "Playa",
    favoriteArtist: "Imagine Dragons",
    musicGenre: "Rock"
  },
  {
    id: 3,
    name: "Sofía",
    avatar: "img/avatar_03.svg",
    favoriteMovie: "Coco",
    movieGenre: "Animación",
    idealDestination: "Tulum",
    destinationType: "Playa",
    favoriteArtist: "Adele",
    musicGenre: "Pop"
  },
  {
    id: 4,
    name: "Diego",
    avatar: "img/avatar_04.svg",
    favoriteMovie: "Interstellar",
    movieGenre: "Ciencia ficción",
    idealDestination: "Islandia",
    destinationType: "Nieve",
    favoriteArtist: "Daft Punk",
    musicGenre: "Electrónica"
  },
  {
    id: 5,
    name: "Valeria",
    avatar: "img/avatar_05.svg",
    favoriteMovie: "Harry Potter y el prisionero de Azkaban",
    movieGenre: "Fantasía",
    idealDestination: "Suiza",
    destinationType: "Montaña",
    favoriteArtist: "Rosalía",
    musicGenre: "Urbano"
  },
  {
    id: 6,
    name: "Bruno",
    avatar: "img/avatar_06.svg",
    favoriteMovie: "The Dark Knight",
    movieGenre: "Acción",
    idealDestination: "Nueva York",
    destinationType: "Ciudad",
    favoriteArtist: "Metallica",
    musicGenre: "Rock"
  },
  {
    id: 7,
    name: "Carla",
    avatar: "img/avatar_07.svg",
    favoriteMovie: "Amélie",
    movieGenre: "Comedia",
    idealDestination: "Kioto",
    destinationType: "Ciudad",
    favoriteArtist: "Shakira",
    musicGenre: "Pop"
  },
  {
    id: 8,
    name: "Hugo",
    avatar: "img/avatar_08.svg",
    favoriteMovie: "Avatar",
    movieGenre: "Ciencia ficción",
    idealDestination: "Patagonia",
    destinationType: "Naturaleza",
    favoriteArtist: "Coldplay",
    musicGenre: "Indie"
  },
  {
    id: 9,
    name: "Elena",
    avatar: "img/avatar_09.svg",
    favoriteMovie: "Frozen",
    movieGenre: "Animación",
    idealDestination: "Laponia",
    destinationType: "Nieve",
    favoriteArtist: "Billie Eilish",
    musicGenre: "Indie"
  },
  {
    id: 10,
    name: "Nico",
    avatar: "img/avatar_10.svg",
    favoriteMovie: "The Hangover",
    movieGenre: "Comedia",
    idealDestination: "Costa Rica",
    destinationType: "Naturaleza",
    favoriteArtist: "Bad Bunny",
    musicGenre: "Urbano"
  },
  {
    id: 11,
    name: "Paula",
    avatar: "img/avatar_11.svg",
    favoriteMovie: "The Lord of the Rings",
    movieGenre: "Fantasía",
    idealDestination: "Alpes",
    destinationType: "Montaña",
    favoriteArtist: "Ludovico Einaudi",
    musicGenre: "Clásica"
  },
  {
    id: 12,
    name: "Marco",
    avatar: "img/avatar_12.svg",
    favoriteMovie: "Top Gun: Maverick",
    movieGenre: "Acción",
    idealDestination: "Ibiza",
    destinationType: "Playa",
    favoriteArtist: "Calvin Harris",
    musicGenre: "Electrónica"
  },
  {
    id: 13,
    name: "Irene",
    avatar: "img/avatar_01.svg",
    favoriteMovie: "La La Land",
    movieGenre: "Romance",
    idealDestination: "Roma",
    destinationType: "Ciudad",
    favoriteArtist: "Dua Lipa",
    musicGenre: "Pop"
  },
  {
    id: 14,
    name: "Sergio",
    avatar: "img/avatar_02.svg",
    favoriteMovie: "John Wick",
    movieGenre: "Acción",
    idealDestination: "Cancún",
    destinationType: "Playa",
    favoriteArtist: "Foo Fighters",
    musicGenre: "Rock"
  },
  {
    id: 15,
    name: "Alba",
    avatar: "img/avatar_03.svg",
    favoriteMovie: "Toy Story",
    movieGenre: "Animación",
    idealDestination: "Bali",
    destinationType: "Playa",
    favoriteArtist: "Katy Perry",
    musicGenre: "Pop"
  },
  {
    id: 16,
    name: "Adrián",
    avatar: "img/avatar_04.svg",
    favoriteMovie: "The Matrix",
    movieGenre: "Ciencia ficción",
    idealDestination: "Oslo",
    destinationType: "Nieve",
    favoriteArtist: "Kavinsky",
    musicGenre: "Electrónica"
  },
  {
    id: 17,
    name: "Marta",
    avatar: "img/avatar_05.svg",
    favoriteMovie: "El viaje de Chihiro",
    movieGenre: "Fantasía",
    idealDestination: "Dolomitas",
    destinationType: "Montaña",
    favoriteArtist: "C. Tangana",
    musicGenre: "Urbano"
  },
  {
    id: 18,
    name: "Óscar",
    avatar: "img/avatar_06.svg",
    favoriteMovie: "Deadpool",
    movieGenre: "Comedia",
    idealDestination: "Berlín",
    destinationType: "Ciudad",
    favoriteArtist: "Arctic Monkeys",
    musicGenre: "Indie"
  },
  {
    id: 19,
    name: "Julia",
    avatar: "img/avatar_07.svg",
    favoriteMovie: "Before Sunrise",
    movieGenre: "Romance",
    idealDestination: "Viena",
    destinationType: "Ciudad",
    favoriteArtist: "Aitana",
    musicGenre: "Pop"
  },
  {
    id: 20,
    name: "Iván",
    avatar: "img/avatar_08.svg",
    favoriteMovie: "Dune",
    movieGenre: "Ciencia ficción",
    idealDestination: "Yosemite",
    destinationType: "Naturaleza",
    favoriteArtist: "The Weeknd",
    musicGenre: "Pop"
  },
  {
    id: 21,
    name: "Nora",
    avatar: "img/avatar_09.svg",
    favoriteMovie: "Encanto",
    movieGenre: "Animación",
    idealDestination: "Banff",
    destinationType: "Montaña",
    favoriteArtist: "Lana Del Rey",
    musicGenre: "Indie"
  },
  {
    id: 22,
    name: "Leo",
    avatar: "img/avatar_10.svg",
    favoriteMovie: "Superbad",
    movieGenre: "Comedia",
    idealDestination: "Seychelles",
    destinationType: "Playa",
    favoriteArtist: "Rauw Alejandro",
    musicGenre: "Urbano"
  },
  {
    id: 23,
    name: "Clara",
    avatar: "img/avatar_11.svg",
    favoriteMovie: "The Chronicles of Narnia",
    movieGenre: "Fantasía",
    idealDestination: "Aspen",
    destinationType: "Nieve",
    favoriteArtist: "Yiruma",
    musicGenre: "Clásica"
  },
  {
    id: 24,
    name: "Dani",
    avatar: "img/avatar_12.svg",
    favoriteMovie: "Mission: Impossible",
    movieGenre: "Acción",
    idealDestination: "Dubái",
    destinationType: "Ciudad",
    favoriteArtist: "David Guetta",
    musicGenre: "Electrónica"
  },
  {
    id: 25,
    name: "Vega",
    avatar: "img/avatar_01.svg",
    favoriteMovie: "Pride & Prejudice",
    movieGenre: "Romance",
    idealDestination: "Lisboa",
    destinationType: "Ciudad",
    favoriteArtist: "Olivia Rodrigo",
    musicGenre: "Pop"
  },
  {
    id: 26,
    name: "Pablo",
    avatar: "img/avatar_02.svg",
    favoriteMovie: "Gladiator",
    movieGenre: "Acción",
    idealDestination: "Madeira",
    destinationType: "Naturaleza",
    favoriteArtist: "Muse",
    musicGenre: "Rock"
  },
  {
    id: 27,
    name: "Aitana",
    avatar: "img/avatar_03.svg",
    favoriteMovie: "Up",
    movieGenre: "Animación",
    idealDestination: "Orlando",
    destinationType: "Ciudad",
    favoriteArtist: "Sia",
    musicGenre: "Pop"
  },
  {
    id: 28,
    name: "Rubén",
    avatar: "img/avatar_04.svg",
    favoriteMovie: "Blade Runner 2049",
    movieGenre: "Ciencia ficción",
    idealDestination: "Lofoten",
    destinationType: "Nieve",
    favoriteArtist: "Justice",
    musicGenre: "Electrónica"
  },
  {
    id: 29,
    name: "Candela",
    avatar: "img/avatar_05.svg",
    favoriteMovie: "Stardust",
    movieGenre: "Fantasía",
    idealDestination: "Pirineos",
    destinationType: "Montaña",
    favoriteArtist: "Karol G",
    musicGenre: "Urbano"
  },
  {
    id: 30,
    name: "Álvaro",
    avatar: "img/avatar_06.svg",
    favoriteMovie: "The Grand Budapest Hotel",
    movieGenre: "Comedia",
    idealDestination: "Praga",
    destinationType: "Ciudad",
    favoriteArtist: "The Strokes",
    musicGenre: "Indie"
  },
  {
    id: 31,
    name: "Noa",
    avatar: "img/avatar_07.svg",
    favoriteMovie: "The Notebook",
    movieGenre: "Romance",
    idealDestination: "Santorini",
    destinationType: "Playa",
    favoriteArtist: "Selena Gomez",
    musicGenre: "Pop"
  },
  {
    id: 32,
    name: "Eric",
    avatar: "img/avatar_08.svg",
    favoriteMovie: "Star Wars",
    movieGenre: "Ciencia ficción",
    idealDestination: "Yellowstone",
    destinationType: "Naturaleza",
    favoriteArtist: "Phoenix",
    musicGenre: "Indie"
  },
  {
    id: 33,
    name: "Sara",
    avatar: "img/avatar_09.svg",
    favoriteMovie: "Moana",
    movieGenre: "Animación",
    idealDestination: "Maui",
    destinationType: "Playa",
    favoriteArtist: "Ariana Grande",
    musicGenre: "Pop"
  },
  {
    id: 34,
    name: "Gael",
    avatar: "img/avatar_10.svg",
    favoriteMovie: "The Mask",
    movieGenre: "Comedia",
    idealDestination: "Amazonas",
    destinationType: "Naturaleza",
    favoriteArtist: "J Balvin",
    musicGenre: "Urbano"
  },
  {
    id: 35,
    name: "Laura",
    avatar: "img/avatar_11.svg",
    favoriteMovie: "The Hobbit",
    movieGenre: "Fantasía",
    idealDestination: "Zermatt",
    destinationType: "Montaña",
    favoriteArtist: "Hans Zimmer",
    musicGenre: "Clásica"
  },
  {
    id: 36,
    name: "Joel",
    avatar: "img/avatar_12.svg",
    favoriteMovie: "Baby Driver",
    movieGenre: "Acción",
    idealDestination: "Mykonos",
    destinationType: "Playa",
    favoriteArtist: "Avicii",
    musicGenre: "Electrónica"
  },
  {
    id: 37,
    name: "Inés",
    avatar: "img/avatar_01.svg",
    favoriteMovie: "Me Before You",
    movieGenre: "Romance",
    idealDestination: "Sevilla",
    destinationType: "Ciudad",
    favoriteArtist: "Camila Cabello",
    musicGenre: "Pop"
  },
  {
    id: 38,
    name: "Mario",
    avatar: "img/avatar_02.svg",
    favoriteMovie: "The Batman",
    movieGenre: "Acción",
    idealDestination: "Marrakech",
    destinationType: "Ciudad",
    favoriteArtist: "Linkin Park",
    musicGenre: "Rock"
  },
  {
    id: 39,
    name: "Marina",
    avatar: "img/avatar_03.svg",
    favoriteMovie: "Inside Out",
    movieGenre: "Animación",
    idealDestination: "Fiordos noruegos",
    destinationType: "Naturaleza",
    favoriteArtist: "Zara Larsson",
    musicGenre: "Pop"
  },
  {
    id: 40,
    name: "Tomás",
    avatar: "img/avatar_04.svg",
    favoriteMovie: "Ready Player One",
    movieGenre: "Ciencia ficción",
    idealDestination: "Hokkaido",
    destinationType: "Nieve",
    favoriteArtist: "ODESZA",
    musicGenre: "Electrónica"
  }
];

const PLAYERS_PER_MATCH = 8;

const questionConfig = {
  movieGenre: {
    label: "Película favorita",
    question: value => `¿Su película favorita es de ${value.toLowerCase()}?`,
    options: ["Acción", "Comedia", "Animación", "Ciencia ficción", "Fantasía", "Romance"]
  },
  destinationType: {
    label: "Destino ideal",
    question: value => `¿Su destino ideal es ${value.toLowerCase()}?`,
    options: ["Playa", "Montaña", "Ciudad", "Nieve", "Naturaleza"]
  },
  musicGenre: {
    label: "Artista favorito",
    question: value => `¿Su artista favorito es del género ${value.toLowerCase()}?`,
    options: ["Pop", "Rock", "Indie", "Electrónica", "Urbano", "Clásica"]
  }
};

const state = {
  characters: [],
  secretCharacter: null,
  attemptsLeft: 2,
  gameOver: false
};

const questionCategory = document.getElementById("questionCategory");
const questionValue = document.getElementById("questionValue");
const askButton = document.getElementById("askButton");
const answerText = document.getElementById("answerText");
const guessSelect = document.getElementById("guessSelect");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const attemptsCounter = document.getElementById("attemptsCounter");
const characterGrid = document.getElementById("characterGrid");
const statusMessage = document.getElementById("statusMessage");
const revealBox = document.getElementById("revealBox");
const revealName = document.getElementById("revealName");
const revealMovie = document.getElementById("revealMovie");
const revealDestination = document.getElementById("revealDestination");
const revealArtist = document.getElementById("revealArtist");

function shuffleArray(list) {
  const copy = [...list];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function createRandomMatch() {
  return shuffleArray(baseCharacters)
    .slice(0, PLAYERS_PER_MATCH)
    .map(character => ({ ...character, discarded: false }));
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function initSelectors() {
  questionCategory.innerHTML = Object.entries(questionConfig)
    .map(([key, config]) => `<option value="${key}">${config.label}</option>`)
    .join("");

  populateQuestionValues();
}

function populateQuestionValues() {
  const category = questionCategory.value;
  const options = questionConfig[category].options;

  questionValue.innerHTML = options
    .map(option => `<option value="${option}">${option}</option>`)
    .join("");
}

function renderGuessOptions() {
  guessSelect.innerHTML = state.characters
    .map(character => `<option value="${character.id}">${character.name}</option>`)
    .join("");
}

function renderBoard() {
  characterGrid.innerHTML = state.characters
    .map(character => {
      const classes = ["character-card"];
      if (character.discarded) classes.push("discarded");
      if (state.gameOver && state.secretCharacter.id === character.id) classes.push("revealed-secret");

      return `
        <article class="${classes.join(" ")}" data-id="${character.id}">
          <img src="${character.avatar}" alt="Avatar de ${character.name}" />
          <div class="card-content">
            <div class="card-name">${character.name}</div>
            <span class="card-tag">Toca para descartar</span>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".character-card").forEach(card => {
    card.addEventListener("click", () => toggleDiscard(Number(card.dataset.id)));
  });
}

function toggleDiscard(characterId) {
  if (state.gameOver) return;

  const character = state.characters.find(item => item.id === characterId);
  if (!character) return;

  character.discarded = !character.discarded;
  renderBoard();
}

function setStatus(message, type = "neutral") {
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${type}`;
}

function updateAttempts() {
  attemptsCounter.textContent = String(state.attemptsLeft);
}

function revealSecret() {
  revealName.textContent = state.secretCharacter.name;
  revealMovie.textContent = `${state.secretCharacter.favoriteMovie} (${state.secretCharacter.movieGenre})`;
  revealDestination.textContent = `${state.secretCharacter.idealDestination} (${state.secretCharacter.destinationType})`;
  revealArtist.textContent = `${state.secretCharacter.favoriteArtist} (${state.secretCharacter.musicGenre})`;
  revealBox.classList.remove("hidden");
}

function disableGameControls() {
  askButton.disabled = true;
  guessButton.disabled = true;
  questionCategory.disabled = true;
  questionValue.disabled = true;
  guessSelect.disabled = true;
}

function enableGameControls() {
  askButton.disabled = false;
  guessButton.disabled = false;
  questionCategory.disabled = false;
  questionValue.disabled = false;
  guessSelect.disabled = false;
}

function askQuestion() {
  if (state.gameOver) return;

  const category = questionCategory.value;
  const value = questionValue.value;
  const answer = state.secretCharacter[category] === value ? "Sí" : "No";

  answerText.textContent = answer;
  setStatus(questionConfig[category].question(value), "neutral");
}

function makeFinalGuess() {
  if (state.gameOver) return;

  const selectedId = Number(guessSelect.value);
  const guessedCharacter = state.characters.find(character => character.id === selectedId);
  if (!guessedCharacter) return;

  if (guessedCharacter.id === state.secretCharacter.id) {
    state.gameOver = true;
    answerText.textContent = "Sí";
    setStatus(`¡Victoria! Has adivinado correctamente a ${guessedCharacter.name}.`, "success");
    revealSecret();
    disableGameControls();
    renderBoard();
    return;
  }

  state.attemptsLeft -= 1;
  updateAttempts();
  answerText.textContent = "No";

  if (state.attemptsLeft > 0) {
    setStatus(`No era ${guessedCharacter.name}. Te queda 1 oportunidad final.`, "warning");
    return;
  }

  state.gameOver = true;
  setStatus(`Has agotado tus 2 oportunidades. La persona correcta era ${state.secretCharacter.name}.`, "error");
  revealSecret();
  disableGameControls();
  renderBoard();
}

function resetGame() {
  state.characters = createRandomMatch();
  state.secretCharacter = randomFrom(state.characters);
  state.attemptsLeft = 2;
  state.gameOver = false;

  answerText.textContent = "—";
  revealBox.classList.add("hidden");
  setStatus(
    `Se han seleccionado ${PLAYERS_PER_MATCH} personajes aleatorios de un total de ${baseCharacters.length}. ¡Empieza a jugar!`,
    "neutral"
  );
  updateAttempts();
  renderGuessOptions();
  renderBoard();
  enableGameControls();
}

questionCategory.addEventListener("change", populateQuestionValues);
askButton.addEventListener("click", askQuestion);
guessButton.addEventListener("click", makeFinalGuess);
resetButton.addEventListener("click", resetGame);

initSelectors();
resetGame();