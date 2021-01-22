const drumPadNames = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
const audioFiles = {
  q: 'https://a.pomf.cat/jcgflk.wav',
  w: 'https://a.pomf.cat/maiyvy.wav',
  e: 'https://a.pomf.cat/pcllms.wav',
  a: 'https://a.pomf.cat/esbjyd.wav',
  s: 'https://a.pomf.cat/owigni.wav',
  d: 'https://a.pomf.cat/hlttpb.wav',
  z: 'https://a.pomf.cat/sycpjw.wav',
  x: 'https://a.pomf.cat/ybvqkg.wav',
  c: 'https://a.pomf.cat/oneahf.wav'
};
const createDrumPadElement = (elementName, display) => {
  // prepare audio
  // const audio = document.createElement('AUDIO');
  // const source = document.createElement('SOURCE');
  // source.type = 'audio/wav';
  // source.src = audioFiles[elementName];
  // audio.appendChild(source);
  const audio = document.createElement('AUDIO');
  audio.id = elementName.toUpperCase();
  audio.classList = 'clip';
  audio.src = audioFiles[elementName];
  audio.type = 'audio/wav';

  // create a drump pad
  const domElement = document.createElement('DIV');
  domElement.classList.add('drum-pad');
  domElement.id = elementName.toUpperCase();
  domElement.textContent = elementName.toUpperCase();
  domElement.appendChild(audio);

  // event --- click to start the audio & change display
  domElement.addEventListener('click', () => {
    audio.play();
    display.innerHTML = 'Playing: ' + elementName.toUpperCase();
  });

  // event -- press a key to start the audio & change display
  document.addEventListener('keydown', event => {
    if(event.key === elementName) {
      const event = new Event('click');
      domElement.dispatchEvent(event);
    }
  });

  // event --- reset the display when the sounds end
  audio.addEventListener('ended', () => {
    display.innerText = 'Ready';
  });

  return domElement;
}


document.addEventListener('DOMContentLoaded', () => {
  const diplay = document.getElementById('#display');
  const drumPadContainer = document.querySelector('.drum-pad_container');

  drumPadNames.forEach(name => {
    const drumPad = createDrumPadElement(name, display);
    drumPadContainer.appendChild(drumPad);
  });
});
