// function sum(name, ...data) {
//   let total = 0;
//   for (item of data) {
//     total += item;
//   }

//   console.log(`Total ${name} is ${total}`);
// }

// sum("Orange", 2, 2, 2, 2, 2, 2, 2, 2);

// const values = [10, 10, 10, 10, 10];
// sum("Orange", ...values);

// function oldSum() {
//   let total = 0;
//   for (const item of arguments) {
//     total += item;
//   }
//   console.log(`Total is ${total}`);
// }

// oldSum(10, 10, 10, 10, 10);

// const say = function sayHello(name) {
//   console.log(`Hello ${name}`);
// };

// say("Hello");

const initialCards = [
  {
    image: "img/image 1.jpg",
    title: "Exploring the Tranquil Beauty of Japan's Zen Gardens",
    description:
      "Discover the serene and meticulously designed Zen gardens of Japan, where tranquility meets artistry. Learn about the history, significance, and key elements that make these gardens a perfect retreat from the hustle and bustle of modern life.",
    category: "city",
    date: "Posted on August 24, 2023",
  },
  {
    image: "img/image 2.jpg",
    title: "A Culinary Journey Through Japan: From Sushi to Ramen",
    description:
      "Embark on a mouth-watering adventure across Japan's diverse culinary landscape. From the delicate flavors of sushi to the comforting warmth of ramen, explore the unique dishes and traditions that define Japanese cuisine.",
    category: "city",
    date: "Posted on August 24, 2023",
  },
  {
    image: "img/image 3.jpg",
    title: "The Hidden Gems of Kyoto: Temples, Shrines, and Secret Spots",
    description:
      "Uncover the lesser-known treasures of Kyoto, a city steeped in history and culture. Beyond the famous landmarks, discover secluded temples, quaint shrines, and charming spots that offer a glimpse into the city's rich heritage.",
    category: "city",
    date: "Posted on August 24, 2023",
  },
  {
    image: "img/image 4.jpg",
    title: "Japan's Cultural Festivals: A Guide to Matsuri Celebrations",
    description:
      "Experience the vibrant and colorful world of Japan's Matsuri festivals, where tradition and celebration come alive. From dazzling parades to sacred rituals, learn about the various festivals held throughout the year and their cultural significance.",
    category: "city",
    date: "Posted on August 24, 2023",
  },
  {
    image: "img/image 5.jpg",
    title: "The Art of Japanese Tea Ceremony: A Timeless Tradition",
    description:
      "Dive into the refined world of the Japanese tea ceremony, a practice that epitomizes grace and mindfulness. Discover the history, rituals, and cultural significance of this ancient art form that has been perfected over centuries.",
    category: "city",
    date: "Posted on August 24, 2023",
  },
  {
    image: "img/image 6.jpg",
    title: "Modern Tokyo: A Guide to the City's Best Tech and Innovation Spots",
    description:
      "Explore the cutting-edge side of Tokyo, where tradition meets innovation. From high-tech gadget stores to futuristic architecture, uncover the must-visit spots that showcase Tokyo's role as a global leader in technology and innovation.",
    category: "city",
    date: "Posted on August 24, 2023",
  },
];

const additionalCards = [
  {
    image: "img/image 1.jpg",
    title: "Modern Tokyo: A Guide to the City's Best Tech and Innovation Spots",
    description:
      "Explore the cutting-edge side of Tokyo, where tradition meets innovation. From high-tech gadget stores to futuristic architecture, uncover the must-visit spots that showcase Tokyo's role as a global leader in technology and innovation.",
    category: "city",
    date: "Posted on August 24, 2023",
  },
  {
    image: "img/image 3.jpg",
    title: "Modern Tokyo: A Guide to the City's Best Tech and Innovation Spots",
    description:
      "Explore the cutting-edge side of Tokyo, where tradition meets innovation. From high-tech gadget stores to futuristic architecture, uncover the must-visit spots that showcase Tokyo's role as a global leader in technology and innovation.",
    category: "city",
    date: "Posted on August 24, 2023",
  },
  {
    image: "img/image 5.jpg",
    title: "Modern Tokyo: A Guide to the City's Best Tech and Innovation Spots",
    description:
      "Explore the cutting-edge side of Tokyo, where tradition meets innovation. From high-tech gadget stores to futuristic architecture, uncover the must-visit spots that showcase Tokyo's role as a global leader in technology and innovation.",
    category: "city",
    date: "Posted on August 24, 2023",
  },
];

const blogCard = document.querySelector(".blog-card");
const loadMoreBtn = document.querySelector(".load-more-button");

function createAppendCards(initialCards) {
  initialCards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cards");

    const img = document.createElement("img");
    img.src = card.image;

    const title = document.createElement("h2");
    title.textContent = card.title;

    const description = document.createElement("p");
    description.textContent = card.description;

    const category = document.createElement("p");
    category.textContent = card.category;

    const date = document.createElement("p");
    date.textContent = card.date;

    cardDiv.appendChild(img);
    cardDiv.appendChild(title);
    cardDiv.appendChild(description);
    cardDiv.appendChild(category);
    cardDiv.appendChild(date);

    blogCard.appendChild(cardDiv);
  });
}

createAppendCards(initialCards);

loadMoreBtn.addEventListener("click", () => {
  console.log("ni hao, clicked");
  if (additionalCards.length > 0) {
    createAppendCards(additionalCards);
  }
  if (additionalCards.length === 0) {
    loadMoreBtn.style.display = "none";
  }
});
