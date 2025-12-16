const cards = document.querySelectorAll(".card");

const sizes = ["normal", "card-tall", "card-wide", "card-big"];

cards.forEach(card => {
    const random = Math.floor(Math.random() * sizes.length);
    if (sizes[random] !== "normal") {
        card.classList.add(sizes[random]);
    }
});
