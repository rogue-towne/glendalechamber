const requestURL = '../data/companies.json';
fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const company = jsObject['company'];
    const directory = document.querySelector('.directory');
    for(var i=0; i < company.length; i++){
      // console.log();
      let img = document.createElement('img');
      img.setAttribute('src', company[i].logo);
      img.setAttribute('alt', `${company[i].name} Logo`);
      
      let info = document.createElement('div');
      let section = document.createElement('section');
      section.classList.add('info');
      let name = document.createElement('h2');
      let phone = document.createElement('p');
      let streetAddress = document.createElement('p');
      let cityZip = document.createElement('p');
      let website = document.createElement('a');
      name.textContent = company[i].name;
      phone.textContent = `📞${company[i].phone}`;
      streetAddress.textContent = `🏠${company[i].streetAddress}` ;
      cityZip.textContent = company[i].cityZip;
      website.textContent = `🔗Company Site` ;
      website.setAttribute('href', `${company[i].website}`)

      directory.append(info);
      info.append(img);
      info.append(section);
      section.append(name);
      section.append(phone);
      section.append(streetAddress);
      section.append(cityZip);
      section.append(website);
    }
  });