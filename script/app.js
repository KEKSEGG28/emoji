import { data } from "../data/data.js";
const inputNode = document.querySelector(".header__input");

const emojiWrapper = document.querySelector(".cards");

const createEmoji = ({ title, symbol, keywords }) => {
  const emoji = document.createElement("div");

  emoji.className = "card";

  emoji.innerHTML = `<div class="card">
              <div class="card__text">
                <h2 class="card__emoji">${symbol}</h2>
                <p class="card__title">${title}</p>
                <p class="card__subtitle">
                 ${dublLetter(keywords)}
                </p>
              </div>
            </div>`;

  return emoji;
};

const renderEmoji = (data) => {
  emojiWrapper.innerHTML = "";
  data.forEach((article) => {
    const emoji = createEmoji(article);
    emojiWrapper.append(emoji);
  });
};

function dublLetter(str) {
  return Array.from(new Set(str.split(" "))).join(" ");
}

function inputHandler(evt) {
  let inputValue = evt.target.value.toLowerCase().trim(" ");
  const filter = data.filter(
    (el) =>
      el.title.toLowerCase().includes(inputValue) ||
      el.keywords.toLowerCase().includes(inputValue)
  );
  console.log(inputValue);
  renderEmoji(filter);
}
inputNode.addEventListener("input", inputHandler);

renderEmoji(data);
