function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

wishes = [
  "Happy Valentine’s Day to the one who fills my heart with love and happiness. You mean the world to me!",
  "Wishing you a day full of love, laughter, and sweet memories. You’re my Valentine forever.",
  "May your heart always be as warm as the love you give. Happy Valentine’s Day, my dear!",
  "To the one who makes every moment special, Happy Valentine’s Day! I’m so grateful for you.",
  "On this day of love, I just want to remind you how much you mean to me. Happy Valentine’s Day, with all my heart!",
];

document.getElementById("btn_love_wishes").addEventListener("click", () => {
  document.getElementById("p-love-wishes").innerHTML = wishes[getRandomInt(4)];
});
