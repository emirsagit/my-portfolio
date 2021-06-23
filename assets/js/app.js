/* nav menu */
const navigation = document.getElementById('navigation');
function toggle() {
  navigation.classList.toggle('mobile-hidden');
}

document.getElementById('close-button').addEventListener('click', toggle);
document.getElementById('hamburger').addEventListener('click', toggle);

/* dynamically created work item list elements */
// first defined work items array
const workItems = [
  {
    id: 1,
    imgSrc: './assets/img/work/SnapshootPortfolio1.png',
    imgSrcSet: './assets/img/work/SnapshootPortfolio1.png 295w, ./assets/img/work/SnapshootPortfolio1desktop.png 544w',
    title: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://emirsagit.github.io/my-portfolio/',
    linkSource: 'https://github.com/emirsagit/my-portfolio',
  },
  {
    id: 2,
    imgSrc: './assets/img/work/SnapshootPortfolio2.png',
    imgSrcSet: './assets/img/work/SnapshootPortfolio2.png 295w, ./assets/img/work/SnapshootPortfolio2desktop.png 544w',
    title: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://emirsagit.github.io/my-portfolio/',
    linkSource: 'https://github.com/emirsagit/my-portfolio',
  },
  {
    id: 3,
    imgSrc: './assets/img/work/SnapshootPortfolio3.png',
    imgSrcSet: './assets/img/work/SnapshootPortfolio3.png 295w, ./assets/img/work/SnapshootPortfolio3desktop.png 544w',
    title: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://emirsagit.github.io/my-portfolio/',
    linkSource: 'https://github.com/emirsagit/my-portfolio',
  },
  {
    id: 4,
    imgSrc: './assets/img/work/SnapshootPortfolio4.png',
    imgSrcSet: './assets/img/work/SnapshootPortfolio4.png 295w, ./assets/img/work/SnapshootPortfolio4desktop.png 544w',
    title: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://emirsagit.github.io/my-portfolio/',
    linkSource: 'https://github.com/emirsagit/my-portfolio',
  },
];

// dynamically create workitems html tags, attributes, classes and text
function createElement(item, key, element, parent = null) {
  const createdElement = document.createElement(element.element);
  if (element.attributes) {
    const attributes = Object.keys(element.attributes);
    attributes.forEach((key) => {
      createdElement.setAttribute(key, element.attributes[key]);
    });
  }
  if (element.classes) {
    const { classes } = element;
    classes.forEach((key) => {
      createdElement.classList.add(key);
    });
  }
  if (element.text) {
    const textNodeElement = document.createTextNode(element.text);
    createdElement.appendChild(textNodeElement);
  }
  if (element.id) {
    createdElement.id = element.id;
  }
  // If createdElement is child I will append it to the parent
  if (parent) {
    parent.appendChild(createdElement);
  }
  // below I call createElement function until all the child elements were created
  if (element.children) {
    for (let i = 0; i < element.children.length; i += 1) {
      createElement(item, key, element.children[i], createdElement);
    }
  }
  return createdElement;
}

/* First I created elements and its nested children with classes, ids, attributes, text.
Then foreach workItems element (defined at the top) I call the above createElement function */
for (let i = 0; i < workItems.length; i += 1) {
  const elements = {
    element: 'li',
    id: i + 1,
    classes: i % 2 === 0 ? ['work-item'] : ['work-item', 'reverse'],
    children: [
      {
        element: 'img',
        attributes: {
          src: workItems[i].imgSrc,
          srcset: workItems[i].imgSrcSet,
          alt: 'tonic',
          sizes: '(max-width: 600px) 295px, 544px',
        },
        classes: i % 2 === 0 ? ['work-item-image'] : ['work-item-image', 'reverse-image'],
      },
      {
        element: 'div',
        classes: ['work-content'],
        children: [
          {
            element: 'h2',
            text: workItems[i].title,
            classes: ['project-name'],
          },
          {
            element: 'div',
            classes: ['work-header-items'],
            children: [
              {
                element: 'p',
                text: 'CANOPY',
                classes: ['work-header-item-one', 'work-header-item-margin'],
              },
              {
                element: 'span',
                classes: ['work-header-item-round', 'work-header-item-margin'],
              },
              {
                element: 'p',
                text: 'Back End Dev',
                classes: ['work-header-item-margin'],
              },
              {
                element: 'span',
                classes: ['work-header-item-round', 'work-header-item-margin'],
              },
              {
                element: 'p',
                text: '2015',
                classes: ['work-header-item-margin'],
              },
            ],
          },
          {
            element: 'p',
            text: workItems[i].description,
            classes: ['work-pharagraph'],
          },
          {
            element: 'div',
            classes: ['work-tags'],
            children: [],
          },
          {
            element: 'button',
            classes: ['bg-white-button', 'work-button'],
            text: 'See Project',
            attributes: {
              type: 'button',
            },
          },
        ],
      },
    ],
  };
  /*   I didn't know how many technologies used for each project.
  So I added them dynamically after elements object created */
  for (let t = 0; t < workItems[i].technologies.length; t += 1) {
    elements.children[1].children[3].children.push({
      element: 'a',
      text: workItems[i].technologies[t],
      classes: ['work-tag'],
      attributes: { href: '#' },
    });
  }
  // call createElement function for each project (work) item
  const createdElement = createElement(workItems[i], i, elements);
  // above function return the created parent html element. Below I appended it to the DOM
  document.getElementById('portfolio').appendChild(createdElement);
}

/* popup functionality */
// popup section dom elements
const popup = document.getElementById('popup');
const image = document.getElementById('popup-image');
const popupName = document.getElementById('popup-name');
const popupContent = document.getElementById('popup-content');
const popupSection = document.getElementById('popup-section');
const popupTags = document.getElementById('popup-tags');
const seeSource = document.getElementById('see-source');
const seeLive = document.getElementById('see-live');
const { body } = document;

// dynamically create and add technologies elements for the popup section
function createTagElements(item) {
  for (let i = 0; i < item.technologies.length; i += 1) {
    const a = document.createElement('a');
    const nodeText9 = document.createTextNode(item.technologies[i]);
    a.setAttribute('href', '#');
    a.className = 'popup-tag';
    a.appendChild(nodeText9);
    popupTags.appendChild(a);
  }
}

// dynamically manipulate html tags. Add corresponding project (work) array item.
function manipulatePopupElements(workItem) {
  popupName.textContent = workItem.title;
  popupContent.textContent = workItem.description;
  image.src = workItem.imgSrc;
  image.srcset = workItem.imgSrcSet;
  seeSource.setAttribute('href', workItem.linkSource);
  seeLive.setAttribute('href', workItem.linkLive);
}

// show popup
function showPopup(e) {
  const item = e.target.parentNode.parentNode;
  const workItem = workItems[item.id - 1];
  createTagElements(workItem);
  manipulatePopupElements(workItem);
  body.classList.add('noscroll');
  popup.classList.add('d-flex');
  popupSection.classList.add('popup-section');
}

// hide popup
function hidePopup(e) {
  e.preventDefault();
  const tags = document.querySelectorAll('.popup-tag');
  for (let i = 0; i < tags.length; i += 1) {
    tags[i].parentNode.removeChild(tags[i]);
  }
  popup.classList.remove('d-flex');
  body.classList.remove('noscroll');
  popupSection.classList.remove('popup-section');
}

// added popup event listeners
const closePopup = document.querySelector('.close-popup');
const buttons = document.getElementsByClassName('work-button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', showPopup);
}
closePopup.addEventListener('click', hidePopup);
