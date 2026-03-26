const baseCharacters = [
  {
    id: 1,
    name: "Kyrylo Yenakiyev",
    avatar: "img/avatar_01.svg",
    favoriteMovie: "El señor de los anillos",
    movieGenre: "Fantasía",
    idealDestination: "Antártida",
    destinationType: "Nieve",
    favoriteArtist: "Metallica",
    musicGenre: "Rock"
  },
  {
    id: 2,
    name: "David Ferrández",
    avatar: "img/avatar_02.svg",
    favoriteMovie: "El señor de los anillos",
    movieGenre: "Fantasía",
    idealDestination: "Islandia",
    destinationType: "Naturaleza",
    favoriteArtist: "Oasis",
    musicGenre: "Rock"
  },
  {
    id: 3,
    name: "Noelia Alonso",
    avatar: "img/avatar_03.svg",
    favoriteMovie: "Harry Potter",
    movieGenre: "Fantasía",
    idealDestination: "Perú",
    destinationType: "Naturaleza",
    favoriteArtist: "Tini",
    musicGenre: "Pop"
  },
  {
    id: 4,
    name: "Mario Blanco",
    avatar: "img/avatar_04.svg",
    favoriteMovie: "Los vengadores: Infinity war",
    movieGenre: "Acción",
    idealDestination: "Sudáfrica",
    destinationType: "Naturaleza",
    favoriteArtist: "La M.O.D.A.",
    musicGenre: "Indie"
  },
  {
    id: 5,
    name: "Laura Sánchez",
    avatar: "img/avatar_05.svg",
    favoriteMovie: "El viaje de Chihiro",
    movieGenre: "Animación",
    idealDestination: "China",
    destinationType: "Ciudad",
    favoriteArtist: "RaiNao",
    musicGenre: "Urbano"
  },
  {
    id: 6,
    name: "Lorena Durán",
    avatar: "img/avatar_06.svg",
    favoriteMovie: "Vaiana",
    movieGenre: "Animación",
    idealDestination: "Perú",
    destinationType: "Naturaleza",
    favoriteArtist: "Hens",
    musicGenre: "Indie"
  },
  {
    id: 7,
    name: "Marta Valero",
    avatar: "img/avatar_07.svg",
    favoriteMovie: "Como perder a un chico en 10 días",
    movieGenre: "Romance",
    idealDestination: "Kenia",
    destinationType: "Naturaleza",
    favoriteArtist: "Walls",
    musicGenre: "Pop"
  },
  {
    id: 8,
    name: "Ana Rubio",
    avatar: "img/avatar_08.svg",
    favoriteMovie: "Spiderman",
    movieGenre: "Acción",
    idealDestination: "Tailandia",
    destinationType: "Playa",
    favoriteArtist: "Mvrk",
    musicGenre: "Urbano"
  },
  {
    id: 9,
    name: "Andrés Cervera",
    avatar: "img/avatar_09.svg",
    favoriteMovie: "Interstellar",
    movieGenre: "Ciencia ficción",
    idealDestination: "Vietnam",
    destinationType: "Naturaleza",
    favoriteArtist: "Quevedo",
    musicGenre: "Urbano"
  },
  {
    id: 10,
    name: "Guzmán Crespo",
    avatar: "img/avatar_10.svg",
    favoriteMovie: "El pianista",
    movieGenre: "Drama",
    idealDestination: "Costa Rica",
    destinationType: "Naturaleza",
    favoriteArtist: "Mora",
    musicGenre: "Urbano"
  },
  {
    id: 11,
    name: "Maribel Cubel",
    avatar: "img/avatar_11.svg",
    favoriteMovie: "Ninguna en especial",
    movieGenre: "Otros",
    idealDestination: "Japón",
    destinationType: "Ciudad",
    favoriteArtist: "Mikel Izal / La Fúmiga",
    musicGenre: "Indie"
  },
  {
    id: 12,
    name: "Pablo Fernández",
    avatar: "img/avatar_12.svg",
    favoriteMovie: "El señor de los anillos",
    movieGenre: "Fantasía",
    idealDestination: "Tailandia",
    destinationType: "Playa",
    favoriteArtist: "J Abecia",
    musicGenre: "Urbano"
  },
  {
    id: 13,
    name: "Leandro Perez",
    avatar: "img/avatar_01.svg",
    favoriteMovie: "El Hobbit",
    movieGenre: "Fantasía",
    idealDestination: "Filipinas",
    destinationType: "Playa",
    favoriteArtist: "Shakira",
    musicGenre: "Pop"
  },
  {
    id: 14,
    name: "Jose Luis Gonzalez",
    avatar: "img/avatar_02.svg",
    favoriteMovie: "El señor de los anillos",
    movieGenre: "Fantasía",
    idealDestination: "Nueva Zelanda",
    destinationType: "Naturaleza",
    favoriteArtist: "Berri Txarrak",
    musicGenre: "Rock"
  },
  {
    id: 15,
    name: "Inés Gonzalez",
    avatar: "img/avatar_03.svg",
    favoriteMovie: "Mulán",
    movieGenre: "Animación",
    idealDestination: "Indonesia",
    destinationType: "Playa",
    favoriteArtist: "Danny Ocean",
    musicGenre: "Urbano"
  },
  {
    id: 16,
    name: "Adrián Lizzadro",
    avatar: "img/avatar_04.svg",
    favoriteMovie: "Smile 2",
    movieGenre: "Terror",
    idealDestination: "Japón",
    destinationType: "Ciudad",
    favoriteArtist: "Mora / Bad Gyal",
    musicGenre: "Urbano"
  },
  {
    id: 17,
    name: "Sergio Galbis",
    avatar: "img/avatar_05.svg",
    favoriteMovie: "The big short",
    movieGenre: "Drama",
    idealDestination: "Argentina",
    destinationType: "Ciudad",
    favoriteArtist: "Linkin Park",
    musicGenre: "Rock"
  },
  {
    id: 18,
    name: "Joan Terol",
    avatar: "img/avatar_06.svg",
    favoriteMovie: "Forrest Gump",
    movieGenre: "Drama",
    idealDestination: "Japón",
    destinationType: "Ciudad",
    favoriteArtist: "Ninguno",
    musicGenre: "Otros"
  },
  {
    id: 19,
    name: "Ximo Grau",
    avatar: "img/avatar_07.svg",
    favoriteMovie: "El show de Truman",
    movieGenre: "Drama",
    idealDestination: "Cuba",
    destinationType: "Playa",
    favoriteArtist: "Arde Bogotá",
    musicGenre: "Rock"
  },
  {
    id: 20,
    name: "Jose Antonio Rodrigo",
    avatar: "img/avatar_08.svg",
    favoriteMovie: "Los tipos malos",
    movieGenre: "Animación",
    idealDestination: "Cualquier parte del mundo",
    destinationType: "Naturaleza",
    favoriteArtist: "Hombres G",
    musicGenre: "Pop"
  },
  {
    id: 21,
    name: "Jose Santana",
    avatar: "img/avatar_09.svg",
    favoriteMovie: "Malditos Bastardos",
    movieGenre: "Acción",
    idealDestination: "China",
    destinationType: "Ciudad",
    favoriteArtist: "Serko",
    musicGenre: "Urbano"
  },
  {
    id: 22,
    name: "Héctor Rodríguez",
    avatar: "img/avatar_10.svg",
    favoriteMovie: "V de vendetta",
    movieGenre: "Acción",
    idealDestination: "China",
    destinationType: "Ciudad",
    favoriteArtist: "MGMT",
    musicGenre: "Indie"
  },
  {
    id: 23,
    name: "Lorena Bru",
    avatar: "img/avatar_11.svg",
    favoriteMovie: "Antes de ti",
    movieGenre: "Romance",
    idealDestination: "Islandia",
    destinationType: "Naturaleza",
    favoriteArtist: "Beret",
    musicGenre: "Pop"
  },
  {
    id: 24,
    name: "Carlos Martinez",
    avatar: "img/avatar_12.svg",
    favoriteMovie: "Harry Potter",
    movieGenre: "Fantasía",
    idealDestination: "Chile",
    destinationType: "Naturaleza",
    favoriteArtist: "Leiva",
    musicGenre: "Rock"
  },
  {
    id: 25,
    name: "Alexis García",
    avatar: "img/avatar_01.svg",
    favoriteMovie: "Braveheart",
    movieGenre: "Acción",
    idealDestination: "Indonesia",
    destinationType: "Playa",
    favoriteArtist: "The Offspring",
    musicGenre: "Rock"
  },
  {
    id: 26,
    name: "Hector López",
    avatar: "img/avatar_02.svg",
    favoriteMovie: "El señor de los anillos",
    movieGenre: "Fantasía",
    idealDestination: "China",
    destinationType: "Ciudad",
    favoriteArtist: "Los de marras",
    musicGenre: "Rock"
  },
  {
    id: 27,
    name: "Paula Catala",
    avatar: "img/avatar_03.svg",
    favoriteMovie: "Scream",
    movieGenre: "Terror",
    idealDestination: "Japón",
    destinationType: "Ciudad",
    favoriteArtist: "Amaia",
    musicGenre: "Pop"
  },
  {
    id: 28,
    name: "Vicente Cuevas",
    avatar: "img/avatar_04.svg",
    favoriteMovie: "Interstellar",
    movieGenre: "Ciencia ficción",
    idealDestination: "Canadá o Japón",
    destinationType: "Naturaleza",
    favoriteArtist: "Berto Romero",
    musicGenre: "Otros"
  },
  {
    id: 29,
    name: "Josep Belda",
    avatar: "img/avatar_05.svg",
    favoriteMovie: "Piratas del Caribe 1",
    movieGenre: "Acción",
    idealDestination: "Japón",
    destinationType: "Ciudad",
    favoriteArtist: "Estopa",
    musicGenre: "Pop"
  },
  {
    id: 30,
    name: "Alberto Moreno",
    avatar: "img/avatar_06.svg",
    favoriteMovie: "Interstellar",
    movieGenre: "Ciencia ficción",
    idealDestination: "Islandia",
    destinationType: "Naturaleza",
    favoriteArtist: "Quevedo",
    musicGenre: "Urbano"
  },
  {
    id: 31,
    name: "Juan Luis German",
    avatar: "img/avatar_07.svg",
    favoriteMovie: "Fight Club",
    movieGenre: "Drama",
    idealDestination: "Turquía",
    destinationType: "Ciudad",
    favoriteArtist: "Estopa",
    musicGenre: "Pop"
  },
  {
    id: 32,
    name: "Juan Cornejo",
    avatar: "img/avatar_08.svg",
    favoriteMovie: "Los Simpsons",
    movieGenre: "Animación",
    idealDestination: "USA (Parques Naturales)",
    destinationType: "Naturaleza",
    favoriteArtist: "Avicii",
    musicGenre: "Electrónica"
  },
  {
    id: 33,
    name: "Diego Gastaldi",
    avatar: "img/avatar_09.svg",
    favoriteMovie: "Los Increíbles",
    movieGenre: "Animación",
    idealDestination: "Australia",
    destinationType: "Naturaleza",
    favoriteArtist: "C Mari",
    musicGenre: "Urbano"
  },
  {
    id: 34,
    name: "Laura Marcelo",
    avatar: "img/avatar_10.svg",
    favoriteMovie: "Avatar",
    movieGenre: "Ciencia ficción",
    idealDestination: "Noruega",
    destinationType: "Naturaleza",
    favoriteArtist: "Robe",
    musicGenre: "Rock"
  },
  
  {
    id: 35,
    name: "Álvaro Mártinez",
    avatar: "img/avatar_09.svg",
    favoriteMovie: "Knives Out",
    movieGenre: "Ciencia ficción",
    idealDestination: "Japón",
    destinationType: "Naturaleza",
    favoriteArtist: "RALY",
    musicGenre: "Rock"
  }
];

const PLAYERS_PER_MATCH = 8;

const questionConfig = {
  favoriteMovie: {
    label: "Película favorita",
    question: value => `¿Su película favorita es "${value}"?`,
    options: [
      "El señor de los anillos",
      "Harry Potter",
      "Los vengadores: Infinity war",
      "El viaje de Chihiro",
      "Vaiana",
      "Como perder a un chico en 10 días",
      "Spiderman",
      "Interstellar",
      "El pianista",
      "Ninguna en especial",
      "El Hobbit",
      "Mulán",
      "Smile 2",
      "The big short",
      "Forrest Gump",
      "El show de Truman",
      "Los tipos malos",
      "Malditos Bastardos",
      "V de vendetta",
      "Antes de ti",
      "Braveheart",
      "Scream",
      "Piratas del Caribe 1",
      "Fight Club",
      "Los Simpsons",
      "Los Increíbles",
      "Avatar",
      "Knives Out"
    ]
  },
  idealDestination: {
    label: "Destino ideal",
    question: value => `¿Su destino ideal es "${value}"?`,
    options: [
      "Antártida",
      "Islandia",
      "Perú",
      "Sudáfrica",
      "China",
      "Kenia",
      "Tailandia",
      "Vietnam",
      "Costa Rica",
      "Japón",
      "Filipinas",
      "Nueva Zelanda",
      "Indonesia",
      "Argentina",
      "Cuba",
      "Cualquier parte del mundo",
      "Chile",
      "Canadá",
      "Turquía",
      "USA (Parques Naturales)",
      "Australia",
      "Noruega"
    ]
  },
  favoriteArtist: {
    label: "Artista favorito",
    question: value => `¿Su artista favorito es "${value}"?`,
    options: [
      "Metallica",
      "Oasis",
      "Tini",
      "La M.O.D.A.",
      "RaiNao",
      "Hens",
      "Walls",
      "Mvrk",
      "Quevedo",
      "Mora",
      "Mikel Izal / La Fúmiga",
      "J Abecia",
      "Shakira",
      "Berri Txarrak",
      "Danny Ocean",
      "Mora / Bad Gyal",
      "Linkin Park",
      "Ninguno",
      "Arde Bogotá",
      "Hombres G",
      "Serko",
      "MGMT",
      "Beret",
      "Leiva",
      "The Offspring",
      "Los de marras",
      "Amaia",
      "Berto Romero",
      "Estopa",
      "Avicii",
      "C Mari",
      "Robe",
      "RALY"
    ]
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
  revealMovie.textContent = `${state.secretCharacter.favoriteMovie}`;
  revealDestination.textContent = `${state.secretCharacter.idealDestination}`;
  revealArtist.textContent = `${state.secretCharacter.favoriteArtist}`;
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
