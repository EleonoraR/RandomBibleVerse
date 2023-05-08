const btn = document.querySelector('.btn-verse');

const motivation = function () {
  alert('works');
};
btn.addEventListener('click', logJSONData);
logJSONData();

async function logJSONData() {
  const response = await fetch(
    'https://labs.bible.org/api/?passage=random&type=json'
  );
  const jsonData = await response.json();

  document.querySelector('.book').textContent = `${jsonData[0].bookname}`;
  document.querySelector(
    '.chapter'
  ).textContent = `Chapter: ${jsonData[0].chapter}`;
  document.querySelector('.text').textContent = `${jsonData[0].text}`;
  document.querySelector('.verse').textContent = `Verse: ${jsonData[0].verse}`;
  document.querySelector('.text').textContent = `${jsonData[0].text}`;

  console.log(`Book ${jsonData[0].bookname}`);
  console.log(`Chapter: ${jsonData[0].chapter}, Verse: ${jsonData[0].verse}`);
  console.log(jsonData[0].text);
}
