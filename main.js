const fileUploadForm = document.querySelector('#file-upload-form');

fileUploadForm.addEventListener('submit', (event) => {
  event.preventDefault();

const fileInput = document.querySelector('#file-input');
const file = fileInput.files[0];

const reader = new FileReader();

reader.addEventListener('load', (event) => {
const fileContent = event.target.result;

const lines = fileContent.split('\n');

const anagrams = {};
const palindromes = [];

    lines.forEach((line) => {
      const words = line.trim().split(' ');

      words.forEach((word) => {
        const sortedWord = word.toLowerCase().split('').sort().join('');

        if (anagrams[sortedWord]) {
          anagrams[sortedWord].push(word);
        } else {
          anagrams[sortedWord] = [word];
        }

        const reversedWord = word.toLowerCase().split('').reverse().join('');
        if (word.toLowerCase() === reversedWord) {
          palindromes.push(word);
        }
      });
    });

const anagramsList = document.querySelector('#anagrams-list');
const palindromesList = document.querySelector('#palindromes-list');

Object.values(anagrams).forEach((words) => {
      if (words.length > 1) {
        const listItem = document.createElement('li');
        listItem.innerText = words.join(', ');
        anagramsList.appendChild(listItem);
      }
    });

 palindromes.forEach((word) => {
      const listItem = document.createElement('li');
      listItem.innerText = word;
      palindromesList.appendChild(listItem);
    });
  });

  reader.readAsText(file);
});