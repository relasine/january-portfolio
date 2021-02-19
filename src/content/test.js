let cards = document.getElementsByClassName("note");
for (let i = 0; i < cards.length; i++) {
  const bellString = cards[i].children[2].children[2].children[1].textContent;
  const parsedString = bellString.replace(" Bells", "");
  const value = parseInt(parsedString);
  const waitingText = cards[0].children[4].children[0].innerText
    .replace("Waiting: ", "")
    .split("/")[0];
  const queue = parseInt(waitingText);
  if (value < 400 || queue > 15) {
    cards[i].style.display = "none";
  }
}
