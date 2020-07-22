let myHeaders = new Headers({ 'Content-Type': 'application/json' });
document.getElementById('submit-btn').addEventListener('click', () => {
  let auteurValue = document.getElementById('auteur').value;
  let commentValue = document.getElementById('comment').value;
  let body = {
    "auteur": auteurValue,
    "comment": commentValue,
  };
  console.log(body);
  console.log(JSON.stringify(body));
  fetch("https://quotes-light-api.herokuapp.com/api/comments/", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body)
  }).then(res =>
    console.log("hello"))
});

fetch("https://quotes-light-api.herokuapp.com/api/comments/", {
  method: "GET"
})
  .then(res => {
    return res.json();
  })
  .then(res => {
    let data = res;
    data.forEach(element => {
      // je retourne dans mon tableau avec foreach pour accèder à chaque objet //
      let auteurDiv = document.createElement("div");
      let commentDiv = document.createElement("div")
      //Je cree le contenu en div et en texte //
      let auteurContent = document.createTextNode(element.auteur)
      auteurDiv.appendChild(auteurContent);
      let commentContent = document.createTextNode(element.comment)
      commentDiv.appendChild(commentContent);
      // je greffe ce contenu //
      let currentDiv = document.getElementById("point-de-repère");
      //Je specifie à quel endroit de mon html je veux insérer ce contenu //
      document.body.insertBefore(auteurDiv, currentDiv.nextElementSibling)
      document.body.insertBefore(commentDiv, currentDiv.nextElementSibling);
      auteurDiv.setAttribute("class", "div-auteur");
      commentDiv.setAttribute("class", "div-comment");
      // ajout d'un attribut pour pointer ver l'élément HTML//
    });
  })
