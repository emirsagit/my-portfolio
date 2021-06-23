/* nav menu */
const navigation = document.getElementById('navigation');
function toggle() {
  navigation.classList.toggle('mobile-hidden');
}

document.getElementById('close-button').addEventListener('click', toggle);
document.getElementById('hamburger').addEventListener('click', toggle);

/* dynamically created work item list elements */
// first defined work items array
const portfolio = document.getElementById('portfolio');
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

// created child elements
function addElementsToDiv(div, item) {
  const h2 = document.createElement('h2');
  const div2 = document.createElement('div');
  const parentP = document.createElement('p');
  const div3 = document.createElement('div');
  const button = document.createElement('button');

  h2.className = 'project-name';
  const newTextNode = document.createTextNode(item.title);
  h2.appendChild(newTextNode);
  div.appendChild(h2);

  div2.className = 'work-header-items';
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const newTextNode1 = document.createTextNode('CANOPY');
  const newTextNode2 = document.createTextNode('Back End Dev');
  const newTextNode3 = document.createTextNode('2015');
  p1.appendChild(newTextNode1);
  p2.appendChild(newTextNode2);
  p3.appendChild(newTextNode3);
  p1.classList.add('work-header-item-one', 'work-header-item-margin');
  p2.classList.add('work-header-item-margin');
  p3.classList.add('work-header-item-margin');
  span1.classList.add('work-header-item-round', 'work-header-item-margin');
  span2.classList.add('work-header-item-round', 'work-header-item-margin');
  div2.appendChild(p1);
  div2.appendChild(span1);
  div2.appendChild(p2);
  div2.appendChild(span2);
  div2.appendChild(p3);
  div.appendChild(div2);

  parentP.className = 'work-pharagraph';
  const newTextNode4 = document.createTextNode(item.description);
  parentP.appendChild(newTextNode4);
  div.appendChild(parentP);

  div3.className = 'work-tags';
  for (let i = 0; i < item.technologies.length; i += 1) {
    const a = document.createElement('a');
    a.className = 'work-tag';
    a.setAttribute('href', '#');
    const textNode5 = document.createTextNode(item.technologies[i]);
    a.appendChild(textNode5);
    div3.appendChild(a);
  }
  div.appendChild(div3);

  button.className = 'bg-white-button work-button';
  button.setAttribute('aria-label', 'project');
  button.setAttribute('type', 'button');
  const textNode6 = document.createTextNode('See Project');
  button.appendChild(textNode6);
  div.appendChild(button);

  return div;
}

// created parent elements
function createElement(item, i) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  let div = document.createElement('div');

  if (i % 2 === 0) {
    li.className = 'work-item';
  } else {
    li.classList.add('work-item', 'reverse');
  }
  li.id = item.id;
  img.setAttribute('src', item.imgSrc);
  img.setAttribute('srcSet', item.imgSrcSet);
  img.setAttribute('alt', item.title);
  img.setAttribute('sizes', '(max-width: 600px) 295px, 544px');
  if (i % 2 === 0) {
    img.className = 'work-item-image';
  } else {
    img.classList.add('work-item-image', 'reverse-image');
  }
  li.appendChild(img);

  div.className = 'work-content';
  div = addElementsToDiv(div, item);
  li.appendChild(div);
  portfolio.appendChild(li);
}

// dynamically create workitems elements
for (let i = 0; i < workItems.length; i += 1) {
  createElement(workItems[i], i);
}

/* popup functionality */
const popup = document.getElementById('popup');
const image = document.getElementById('popup-image');
const popupName = document.getElementById('popup-name');
const popupContent = document.getElementById('popup-content');
const popupSection = document.getElementById('popup-section');
const popupTags = document.getElementById('popup-tags');
const seeSource = document.getElementById('see-source');
const seeLive = document.getElementById('see-live');
const { body } = document;

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

function showPopup(e) {
  const item = e.target.parentNode.parentNode;
  const workItem = workItems[item.id - 1];
  popupName.textContent = workItem.title;
  popupContent.textContent = workItem.description;
  image.src = workItem.imgSrc;
  image.srcset = workItem.imgSrcSet;
  seeSource.setAttribute('href', workItem.linkSource);
  seeLive.setAttribute('href', workItem.linkLive);
  createTagElements(workItem);
  popup.classList.add('d-flex');
  body.classList.add('noscroll');
  popupSection.classList.add('popup-section');
}
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

const closePopup = document.querySelector('.close-popup');
const buttons = document.getElementsByClassName('work-button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', showPopup);
}
closePopup.addEventListener('click', hidePopup);
