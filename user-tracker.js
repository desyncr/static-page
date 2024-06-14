// source: https://stackoverflow.com/a/2117523
function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

const clientId = document.currentScript.dataset.client || '';

(function (clientId) {
  const endpoint = 'http://localhost:8001/api/click'
  const localStorageKey = 'u'

  let uuid = localStorage.getItem(localStorageKey);
  if (!uuid) {
    localStorage.setItem(localStorageKey, uuidv4())
  }

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': clientId,
    },
    body: JSON.stringify({
      pageUrl: window.location.href,
    }),
  });

})(clientId);
