function displayError(selector, string) {
  document.querySelector(selector).innerHTML = string;
}

function hideError(selector) {
  document.querySelector(selector).innerHTML = '';
}

module.exports = {
  display: displayError,
  hide: hideError
}
