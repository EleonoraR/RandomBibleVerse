const btn = document.querySelector('.btn-verse');

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
  document.querySelector('.verse').textContent = `Verse: ${jsonData[0].verse}`;
  document.querySelector('.text').textContent = `${jsonData[0].text}`;
}
