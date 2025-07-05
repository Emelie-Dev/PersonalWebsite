"use strict";

let slideShow = { index: 0 };

// Text Anmation
const textArray = [
  "Hi, I’m Vincent — thanks for stopping by.",
  "Welcome to my space on the web!",
  "Building cool things for the web, one project at a time.",
];

const animationObject = { text: 0, textIndex: 0, currentText: "" };
const animationElement = document.querySelector("#animation-container");

const animEvent = new CustomEvent("animEvent");
const eraseEvent = new CustomEvent("eraseEvent");

animationElement.addEventListener("animEvent", function () {
  const interval = setInterval(() => {
    const { text, textIndex, currentText } = animationObject;

    if (textIndex === textArray[text].length) {
      animationElement.dispatchEvent(eraseEvent);
      clearInterval(interval);
    } else {
      animationObject.currentText = `${currentText}${textArray[text][textIndex]}`;
      animationObject.textIndex = textIndex + 1;
    }

    animationElement.innerHTML = animationObject.currentText;
  }, 100);
});

animationElement.addEventListener("eraseEvent", function () {
  const { text } = animationObject;
  let value = textArray[text];

  const timeout = setTimeout(() => {
    const interval = setInterval(() => {
      value = `${value.slice(0, value.length - 1)}`;
      animationObject.currentText = value;
      animationElement.innerHTML = animationObject.currentText;

      if (value.length === 0) {
        clearInterval(interval);
        clearTimeout(timeout);
        animationObject.text = text === 2 ? 0 : text + 1;
        animationObject.textIndex = 0;
        animationElement.dispatchEvent(animEvent);
        return;
      }
    }, 100);
  }, 4000);
});

animationElement.dispatchEvent(animEvent);

// Handle skills
const skills = [
  { name: "HTML5", tag: "Frontend" },
  { name: "CSS3", tag: "Frontend" },
  { name: "JavaScript (ES6+)", tag: "Frontend" },
  { name: "React.js", tag: "Frontend" },
  { name: "Node.js", tag: "Backend" },
  { name: "Express.js", tag: "Backend" },
  { name: "MongoDB", tag: "Database" },
  { name: "Git & GitHub", tag: "Version control" },
  { name: "Responsive Design", tag: "Frontend" },
  { name: "REST APIs", tag: "Backend" },
  { name: "Vite", tag: "Frontend" },
  { name: "Docker", tag: "Containerization" },
];

const skillsList = document.querySelector("#skills-list");
const skillsContent = skills.map(
  ({ name, tag }) =>
    `<li class="skill-item">${name}<span class="tag">${tag}</span></li>`
);

skillsList.innerHTML = skillsContent.join("");

// Handle Projects
const projects = [
  {
    name: "Ecommerce-product-page",
    description: "An E-commerce product page.",
    image: "Screenshot (123).png",
    tools: [
      "Semantic HTML5 markup",
      "CSS custom properties",
      "Flexbox",
      "React - JS library",
      "CSS Modules - For styles",
    ],
    repoLink: "https://github.com/Emelie-Dev/ecommerce-product-page.git",
    siteLink: "https://ecommerce-product-page-tau-six.vercel.app",
  },
  {
    name: "TaskFlow",
    description:
      "TaskFlow is a task management web application designed to streamline task tracking, assignments, and updates.",
    image: "Screenshot (127).png",
    tools: ["React", "Vite", "CSS Modules", "Node.js", "Express", "MongoDB"],
    repoLink: "https://github.com/Emelie-Dev/taskflow.git",
    siteLink: "https://taskflow-266v.onrender.com",
  },

  {
    name: "REST Countries API",
    description:
      "A frontend app that fetches and displays country data from a REST API.",
    image: "Screenshot (124).png",
    tools: [
      "Semantic HTML5 markup",
      "CSS custom properties",
      "Flexbox",
      "CSS Grid",
      "React - JS library",
      "CSS Modules - For styles",
    ],
    repoLink: "https://github.com/Emelie-Dev/rest-countries-api.git",
    siteLink:
      "https://rest-countries-j1cdxn8t8-godfathers-projects-0d574a41.vercel.app",
  },

  {
    name: "Buzzer",
    description: "A scalable social media app with real-time search.",
    image: "Screenshot (126).png",
    tools: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Docker",
      "Typesense",
    ],
    repoLink: "https://github.com/Emelie-Dev/buzzer.git",
    siteLink: "https://buzzer-0z8q.onrender.com",
  },
];

const productsContainer = document.querySelector("#projects-container");
const productsContent = projects.map(
  ({ name, description, tools, repoLink, siteLink, image }) =>
    `<article class="project">
            <div class="project-data">
              <div class="front-details">
                <img
                  class="project-img"
                  src="./assets/images/${image}"
                />

                <div class="project-details">
                  <span class="project-name">${name}</span>

                  <p class="project-description">
                   ${description}
                  </p>
                </div>
              </div>

              <div class="back-details">
                <img
                  class="project-img2"
                  src="./assets/images/${image}"
                />

                <span class="project-name">${name}</span>

                <div class="tools-container">
                  <span class="tools-text">Built with:</span>

                  <ul class="tools-list">

                  ${tools
                    .map((tool) => `<li class="tools-item">${tool}</li>`)
                    .join("")}
                   
                   
                  </ul>
                </div>
              </div>
            </div>

            <div class="project-btns">
              <button class="code-btn">
                <a href="${repoLink}">
                  <svg class="github-icon" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path></svg
                  >Code</a
                >
              </button>
              <button class="site-btn">
                <a href="${siteLink}">
                  <svg class="web-icon" viewBox="0 0 24 24">
                    <g id="style=fill">
                      <g id="web">
                        <g id="Vector">
                          <path
                            d="M15.3222 10.383C15.3796 10.9457 15.4125 11.4903 15.4125 12C15.4125 12.9541 15.2972 14.0315 15.1208 15.1208C14.0315 15.2972 12.9541 15.4125 12 15.4125C11.0502 15.4125 9.97313 15.2975 8.87911 15.1205C8.70281 14.0312 8.5875 12.954 8.5875 12C8.5875 11.4905 8.62039 10.9458 8.67789 10.383C9.82608 10.5668 10.9715 10.6875 12 10.6875C13.0286 10.6875 14.174 10.5668 15.3222 10.383Z"
                            fill="darkblue"
                          />
                          <path
                            d="M16.8752 10.0994C16.9462 10.7579 16.9875 11.399 16.9875 12C16.9875 12.8769 16.8997 13.8389 16.7599 14.8153C18.7425 14.4016 20.575 13.8731 21.5567 13.5722C21.8739 13.475 21.9986 13.4363 22.1658 13.3694C22.2494 13.336 22.326 13.302 22.4259 13.2543C22.4748 12.843 22.5 12.4244 22.5 12C22.5 10.878 22.324 9.79714 21.9982 8.78346L21.9133 8.81017C20.8868 9.12245 18.9652 9.6745 16.8752 10.0994Z"
                            fill="darkblue"
                          />
                          <path
                            d="M21.4017 7.31948C20.3698 7.63221 18.579 8.14039 16.6599 8.53603C16.2178 5.84926 15.443 3.16951 15.0702 1.95598C17.8422 2.80227 20.1273 4.76467 21.4017 7.31948Z"
                            fill="darkblue"
                          />
                          <path
                            d="M15.1117 8.82229C14.0253 8.99781 12.9513 9.1125 12 9.1125C11.0487 9.1125 9.97477 8.99781 8.88843 8.8223C9.30471 6.28005 10.0478 3.68306 10.4278 2.44333C10.525 2.12606 10.5637 2.00144 10.6306 1.83418C10.664 1.75062 10.698 1.67398 10.7457 1.57414C11.157 1.52518 11.5756 1.5 12 1.5C12.4434 1.5 12.8803 1.52748 13.3093 1.58083C13.3184 1.61564 13.3268 1.64679 13.3351 1.67626C13.3597 1.76333 13.3982 1.8857 13.4628 2.09104L13.4696 2.11261C13.7935 3.14223 14.6519 6.01401 15.1117 8.82229Z"
                            fill="darkblue"
                          />
                          <path
                            d="M7.34004 8.536C7.7801 5.86107 8.54986 3.19576 8.92192 1.98181L8.92983 1.95597C6.15777 2.80225 3.8727 4.76465 2.59835 7.31946C3.63018 7.63219 5.42095 8.14036 7.34004 8.536Z"
                            fill="darkblue"
                          />
                          <path
                            d="M2.00184 8.78345C1.67598 9.79714 1.5 10.878 1.5 12C1.5 12.4389 1.52693 12.8715 1.57923 13.2963L1.74471 13.3515L1.74603 13.3519L1.74765 13.3525L1.74879 13.3528C1.80205 13.3705 3.36305 13.886 5.41878 14.3975C5.99886 14.5418 6.61307 14.6844 7.24006 14.8151C7.10025 13.8388 7.0125 12.8769 7.0125 12C7.0125 11.3988 7.05374 10.7577 7.12472 10.0994C5.03428 9.67436 3.11218 9.12212 2.08597 8.80989L2.07883 8.80771L2.00184 8.78345Z"
                            fill="darkblue"
                          />
                          <path
                            d="M12 16.9875C12.8769 16.9875 13.8389 16.8997 14.8153 16.7599C14.4016 18.7425 13.8731 20.575 13.5722 21.5566C13.475 21.8739 13.4363 21.9985 13.3694 22.1658C13.336 22.2494 13.302 22.326 13.2543 22.4259C12.843 22.4748 12.4244 22.5 12 22.5C11.5756 22.5 11.157 22.4748 10.7457 22.4259C10.698 22.326 10.664 22.2494 10.6306 22.1658C10.5637 21.9986 10.525 21.8739 10.4278 21.5567C10.1269 20.5751 9.59846 18.7427 9.18478 16.7603C10.1579 16.8996 11.1201 16.9875 12 16.9875Z"
                            fill="darkblue"
                          />
                          <path
                            d="M5.0385 15.9259C3.73853 15.6024 2.63135 15.2775 1.95597 15.0702C2.97258 18.4002 5.59982 21.0274 8.92983 22.044L8.92192 22.0182C8.59705 20.9582 7.96897 18.7917 7.52191 16.4784C6.6525 16.3103 5.80722 16.1171 5.0385 15.9259Z"
                            fill="darkblue"
                          />
                          <path
                            d="M22.0182 15.0781C20.9582 15.403 18.7915 16.0311 16.4781 16.4781C16.0311 18.7915 15.403 20.9581 15.0781 22.0182L15.0702 22.044C18.4002 21.0274 21.0274 18.4002 22.044 15.0702L22.0182 15.0781Z"
                            fill="darkblue"
                          />
                          <path
                            d="M1.6103 13.323C1.64665 13.3277 1.67628 13.3327 1.68611 13.3349C1.69472 13.337 1.70821 13.3406 1.7131 13.3419L1.72391 13.345L1.72973 13.3468L1.73585 13.3487L1.74098 13.3503C1.7381 13.3494 1.67976 13.3348 1.6103 13.323Z"
                            fill="darkblue"
                          />
                        </g>
                      </g>
                    </g></svg
                  >Site
                </a>
              </button>
            </div>
          </article>`
);

productsContainer.innerHTML = productsContent.join("");

// Handles projects animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible"); // Remove class when out of view
    }
  });
});

document.querySelectorAll(".project").forEach((el) => {
  observer.observe(el);
});

// Handle Gllery
const images = [
  "1729503758180.jpg",
  "1751700809102.jpg",
  "1751701018717.jpg",
  "1751701018703.jpg",
  "1751701018747.jpg",
  "1751701018733.jpg",
  "1751700809115.jpg",
  "1751700760298.jpg",
];
const gallery = document.querySelector("#gallery");
const galleryContent = images.map(
  (
    img,
    index
  ) => `<article class="gallery-item" onclick="showLightBox(${index})">
            <img
              class="gallery-image"
              src="./assets/images/${img}"
            />
          </article>`
);

gallery.innerHTML = galleryContent.join("");

// Handle lightbox

const lightbox = document.querySelector("#lightbox");
const figureImg = document.querySelector("#img");
const thumbnailElement = document.querySelector("#thumbnail-div");

lightbox.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) hideLightBox();
});

const showLightBox = (index) => {
  slideShow.index = index;

  const thumbnailContent = images.map(
    (img, index) => ` <span class="thumbnail-box"
              onclick="changeCurrentImage(${index})"><img
                class="thumbnail-img ${
                  index === slideShow.index ? "active-thumbnail" : ""
                }"
                src="./assets/images/${img}"
            /></span>`
  );
  thumbnailElement.innerHTML = thumbnailContent.join("");
  document.querySelector("#slide-index").innerHTML = index + 1;

  figureImg.src = `./assets/images/${images[index]}`;
  lightbox.classList.add("show");

  document
    .querySelectorAll(".thumbnail-box")
    [index].scrollIntoView({ behavior: "smooth" });
};

const hideLightBox = () => {
  lightbox.classList.remove("show");
};

const changeCurrentImage = (index) => {
  let id = index;

  if (index === "prev") {
    id = slideShow.index - 1;
  } else if (index === "next") {
    id = slideShow.index + 1;
  }

  if (id === images.length) id = 0;
  if (id === -1) id = 7;

  slideShow.index = id;
  figureImg.src = `./assets/images/${images[id]}`;

  const thumbnailContent = images.map(
    (img, index) => ` <span class="thumbnail-box  ${
      index === slideShow.index ? "active-thumbnail" : ""
    }"
              onclick="changeCurrentImage(${index})"><img
                class="thumbnail-img"
                src="./assets/images/${img}"
            /></span>`
  );
  thumbnailElement.innerHTML = thumbnailContent.join("");

  document.querySelector("#img").animate(
    {
      opacity: [0, 1],
    },
    {
      fill: "both",
      duration: 250,
    }
  );
  document.querySelector("#slide-index").innerHTML = id + 1;
  document
    .querySelectorAll(".thumbnail-box")
    [id].scrollIntoView({ behavior: "smooth" });
};
