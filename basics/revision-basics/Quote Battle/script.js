const votes = [0, 0];
let currentQuotes = [];
const LikedQuotes = new Map();
let isBoardOpen = false;
const selectElement = (selector) => {
  let element = document.querySelectorAll(selector);
  if (element.length === 1) {
    return element[0];
  }
  return element;
};

const quoteOne = selectElement("#quoteText1");
const quoteTwo = selectElement("#quoteText2");
const quoteOneAuth = selectElement("#quoteAuthor1");
const quoteTwoAuth = selectElement("#quoteAuthor2");
const leaderBoard = selectElement("#leaderboard");
const leaderlist = selectElement("#leaderboard-list");
const table = selectElement("tbody");

const updateScores = (choice) => {
  if (choice !== 0 && choice !== 1) {
    console.error("Invalid Choice");
    return;
  }
  if (LikedQuotes.has(currentQuotes[choice])) {
    console.log(LikedQuotes.has(currentQuotes[choice]));
    LikedQuotes.set(
      currentQuotes[choice],
      LikedQuotes.get(currentQuotes[choice]) + 1
    );
  } else {
    LikedQuotes.set(currentQuotes[choice], 1);
  }

  console.log(LikedQuotes);
};

const updateQuote = (choice) => {
  if (choice === 0) {
    loadQuotes("right");
  } else if (choice === 1) {
    loadQuotes("left");
  } else {
    console.error("Invalid Choice");
  }
};

const updateLeaderBoard = () => {};

const vote = (choice) => {
  updateScores(choice);
  updateQuote(choice);
  if (isBoardOpen) {
    showLeaderBoard();
  }
};

const onPageLoad = () => {
  fetchData();
  loadQuotes("both");
};

const fetchData = async () => {
  try {
    const response = await fetch("https://quotes-api-self.vercel.app/quote");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const loadQuotes = async (which = "both") => {
  if (which === "both") {
    const quotes = await Promise.all([fetchData(), fetchData()]);
    quoteOne.textContent = quotes[0]["quote"];
    quoteTwo.textContent = quotes[1]["quote"];
    quoteOneAuth.textContent = quotes[0]["author"];
    quoteTwoAuth.textContent = quotes[1]["author"];
    currentQuotes = quotes;
    console.log(currentQuotes);
  } else if (which === "left") {
    quoteTwoAuth.classList.remove("locked-text"); //remove the blur of current author
    quoteOneAuth.classList.add("locked-text"); //add blue to other author
    const quotes = await fetchData();
    quoteOne.textContent = quotes["quote"];
    quoteOneAuth.textContent = quotes["author"];
    currentQuotes[0] = quotes; //update the current quote with the new one

    console.log(currentQuotes);
  } else {
    quoteTwoAuth.classList.add("locked-text");
    quoteOneAuth.classList.remove("locked-text");
    const quotes = await fetchData();
    quoteTwo.textContent = quotes["quote"];
    quoteTwoAuth.textContent = quotes["author"];
    currentQuotes[1] = quotes;
    console.log(currentQuotes);
  }
};

const showLeaderBoard = () => {
  isBoardOpen = true;
  const leaderboard = document.getElementById("leaderboard");
  leaderboard.classList.remove("hidden");
  leaderboard.classList.add("show");

  const sorted = [...LikedQuotes].sort((a, b) => b[1] - a[1]);

  const table = document.querySelector(".leaderboard-list");

  // Clear old rows except header
  table.innerHTML = `
    <tr>
      <th>Quotes</th>
      <th>Author</th>
      <th>Score</th>
    </tr>
  `;

  sorted.forEach(([quoteObj, score]) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${quoteObj.quote}</td>
      <td>${quoteObj.author}</td>
      <td>${score}</td>
    `;

    table.appendChild(row);
  });
};

document.addEventListener("DOMContentLoaded", onPageLoad);
