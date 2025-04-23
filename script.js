const apiUrl = "https://api.thedogapi.com/v1/images/search?limit=10";
const buttonContainer = document.getElementById("button-container");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((dog, index) => {
      const button = document.createElement("button");
      const prefixes = [
        "Dog",
        "Puppy",
        "Doge",
        "Cute",
        "Cutie",
        "Paw",
        "Woof",
        "Bark",
        "Slobber",
      ];
      const randomPrefix =
        prefixes[Math.floor(Math.random() * prefixes.length)];
      button.textContent = `${randomPrefix} ${index + 1}`;
      button.addEventListener("click", () => {
        window.location.href = `/display?url=${dog.url}`;
      });
      buttonContainer.appendChild(button);
    });
  })
  .catch((error) => {
    console.error("Error fetching dog images:", error);
  });
