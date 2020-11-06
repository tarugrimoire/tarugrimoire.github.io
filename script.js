var request = new XMLHttpRequest();
 
request.open('GET', 'https://api.github.com/orgs/tarugrimoire/repos', true);
request.responseType = 'json';

var writeups_element = document.getElementsByClassName("writeups")[0];

request.onload = function () {
  var api_resp = this.response;
  for (let i = 0; i < api_resp.length; i++) {
      const data = api_resp[i];
      if (data.name == "tarugrimoire.github.io") {
          continue
      }
      writeups_element.innerHTML += `<p class="writeup"><a href=${data.html_url}>${data.name}</a></p>`;
    }
}

request.send();
