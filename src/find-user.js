function findUser(collection, query) {
      var found = search(collection, query);
      var display = document.querySelector('.inline');
      var node = document.querySelector('.infodiv');
      var textnode =  `<p>${found._name}</p>
                       <p>${found._password}</p>
                       <p>${found.onList}</p>`;
      node.innerHTML = textnode;
      display.style.opacity = 1;
    }

function search(collection, search) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i]._name === search) {
        return collection[i];
        }
      }
    }
    
module.exports = findUser;
