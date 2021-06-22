/* nav menu */
const navigation = document.getElementById('navigation');
const portfolio = document.getElementById('portfolio');
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
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://emirsagit.github.io/my-portfolio/',
    linkSource: 'https://github.com/emirsagit/my-portfolio',
  },
  {
    id: 2,
    imgSrc: './assets/img/work/SnapshootPortfolio2.png',
    imgSrcSet: './assets/img/work/SnapshootPortfolio2.png 295w, ./assets/img/work/SnapshootPortfolio2desktop.png 544w',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://emirsagit.github.io/my-portfolio/',
    linkSource: 'https://github.com/emirsagit/my-portfolio',
  },
  {
    id: 3,
    imgSrc: './assets/img/work/SnapshootPortfolio3.png',
    imgSrcSet: './assets/img/work/SnapshootPortfolio3.png 295w, ./assets/img/work/SnapshootPortfolio3desktop.png 544w',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://emirsagit.github.io/my-portfolio/',
    linkSource: 'https://github.com/emirsagit/my-portfolio',
  },
  {
    id: 4,
    imgSrc: './assets/img/work/SnapshootPortfolio4.png',
    imgSrcSet: './assets/img/work/SnapshootPortfolio4.png 295w, ./assets/img/work/SnapshootPortfolio4desktop.png 544w',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
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
  const newTextNode = document.createTextNode('Tonic');
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

  button.className = 'bg-white-button';
  button.setAttribute('aria-label', 'project');
  button.setAttribute('type', 'button');
  const textNode6 = document.createTextNode('See Project');
  button.appendChild(textNode6);
  div.appendChild(button);

  return div;
}

// created parent elements
function createElement(item) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  let div = document.createElement('div');
  li.className = 'work-item';

  img.setAttribute('src', item.imgSrc);
  img.setAttribute('srcSet', item.imgSrcSet);
  img.setAttribute('alt', item.title);
  img.setAttribute('sizes', '(max-width: 600px) 295px, 544px');
  img.className = 'work-item-image';
  li.appendChild(img);

  div.className = 'work-content';
  div = addElementsToDiv(div, item);
  li.appendChild(div);
  portfolio.appendChild(li);
}

// dynamically create workitems elements
for (let i = 0; i < workItems.length; i += 1) {
  createElement(workItems[i]);
}

// popup functionality
