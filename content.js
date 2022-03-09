function malkifyText(node) {
    if(node.nodeType === 1)
      return [].forEach.call(node.childNodes, malkifyText);

    if(node.nodeType === 3)  
      node.textContent = node.textContent
           .replace(/\b[A-Z]\w+/g, "Malkovich")
           .replace(/\b[a-z]\w+/g, "malkovich")

};

function malkifyImages() {
  const images = document.getElementsByTagName('img');

  let malkovichImageFilenames = [];

  for (let i = 0; i < 9; i++)
  {
    malkovichImageFilenames.push(`pictures_of_john_malkovich/malk${i + 1}.jpeg`)
    console.log("DEBUG: Image Filename: " + malkovichImageFilenames[i]);
  }

  for (let i of images) {
    const diceRoll = Math.floor(Math.random() * malkovichImageFilenames.length);

    const malkovichURL = chrome.runtime.getURL(malkovichImageFilenames[diceRoll]);

    i.src = malkovichURL;
    i.srcset = malkovichURL;
  };
};

malkifyText(document.body);
malkifyImages();
