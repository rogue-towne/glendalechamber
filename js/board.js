const requestURL = 'contactData.json';
const list = document.querySelector('.board-list');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const board = jsonObject['board'];
    
    for(let i=0; i < board.length; i++) {
        let section = document.createElement('section');
        let name = document.createElement('h3');
        let organization = document.createElement('p');

        name.textContent = board[i].name;
        organization.textContent = board[i].organization;
        list.append(section);
        section.append(name);
        section.append(organization);
        section.classList.add("board-card")
    }
});

const requestURL2 = 'faces.json';
fetch(requestURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    const faces = jsObject['faces'];
    const children = list.children
    for(var i=0; i<faces.length; i++){
      var child = children[i];
      console.log(faces[i].urls[0][32]);
      let img = document.createElement('img');
      img.setAttribute('src', faces[i].urls[3][256]);
      img.setAttribute('alt', 'Generated Fake Portrait Face Shot');
      child.prepend(img);
    }
  });

