var introElem = document.getElementById('intro');
var topElem = document.getElementById('top');
var contentElem = document.getElementById('content');
var audio = new Audio('./mp3/connection.mp3');

var introTexts = [
  'Tape load success!',
  'Finding header...',
  'Reading contents...',
  'Done!',
];

function showText() {
  introElem.innerHTML = ''; // Clear any debug text before adding new elements

  function appendText(index) {
    setTimeout(() => {
      let newElem = document.createElement(
          'p'); // Create a new p element to write the text into
      newElem.innerHTML =
          introTexts[index]; // Set innerHTML of p to be the current index of
                             // introTexts' string
      introElem.appendChild(newElem); // Append the newElem to introElem
    }, 1200 * index);
  }

  for (i = 0; i < introTexts.length; i++) {
    appendText(i);
  }

  setTimeout(() => { introElem.style.display = 'none'; },
             1100 * introTexts.length + 1);
}

function royalBack() { topElem.style.display = 'block'; }

function blackBack() { topElem.style.display = 'none'; }

function go() {
  audio.currentTime = 0;
  audio.play();
  contentElem.style.display = 'none';
  introElem.innerHTML = '';
  royalBack();

  setTimeout(() => {
    // Called just before back is turned to black
    blackBack();
  }, 850);

  setTimeout(() => {
    // Called when text first starts appearing
    showText();
  }, 1150);

  setTimeout(() => {
    // Called as soon as text as finished printing
    contentElem.style.display = 'block';
    // royalBack()
  }, 1400 * introTexts.length + 1);
}

go();
