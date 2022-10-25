class Work {
  constructor(place, name, notes) {
    this.place = place;
    this.name = name;
    this.notes = notes;
  }
}

var artworks = [
  new Work(
    'i',
    'An Idea',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Work(
    'ii',
    'Face',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Work(
    'iii',
    'Speech',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Work(
    'iv',
    'Escape',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Work(
    'v',
    'Political News',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Work(
    'vi',
    'Out of Control',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Work(
    'vii',
    'Another Speech',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Work(
    'viii',
    'The Consequence',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Work(
    'ix',
    'Regular News',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
  new Work(
    'x',
    'A Consequence',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ),
]; // Init a class for each artwork

function createWorkElem(work) {
  let outterDiv = document.createElement('div');
  outterDiv.className = 'artcontent';

  let titleDiv = document.createElement('div');
  titleDiv.className = 'title';

  let titleh3 = document.createElement('h3');
  titleh3.innerHTML = work.place.toUpperCase();

  let titleh4 = document.createElement('h4');
  titleh4.innerHTML = work.name;

  let img = document.createElement('img');
  img.src = `https://raw.githubusercontent.com/SammmyJr/themajorarchive/main/img/works/${work.place}.png?_sm_au_=iVVTDtWWDP0Q7qqQQJ41FK606VQW1`; // This requires the naming convention in /img/works/ to be i.png, ii.png, iii.png etc.
  img.alt = `${work.place}, ${work.name}`;

  let notesh5 = document.createElement('h5');
  notesh5.innerHTML = "_Examiner's Notes";

  let notesp = document.createElement('p');
  notesp.innerHTML = work.notes;

  titleDiv.appendChild(titleh3);
  titleDiv.appendChild(titleh4);

  outterDiv.appendChild(titleDiv);
  outterDiv.appendChild(img);
  outterDiv.appendChild(notesh5);
  outterDiv.appendChild(notesp);

  //artElem.appendChild(outterDiv);
  return outterDiv;
} // I really really hate JavaScript, if it wasn't obvious, using string injection would've been a vul so I chose not to.

function loadWorks(works) {
  var artElem = document.getElementById('arts');

  for (i = 0; i < artworks.length; i++) {
    artElem.appendChild(createWorkElem(artworks[i]));
  }
}

loadWorks(artworks);
