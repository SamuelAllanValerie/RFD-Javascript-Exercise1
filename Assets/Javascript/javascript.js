var resultat = "<ul>";
var compteur = 0;

for (var i = -12728 ; i < 16856 ; i += 17) {
  if (i % 23 == 0) {
 resultat += "<li>" + i + "</li>";
 // resultat = resultat + "<li>" + i + "</li>" ;
  compteur++;

  resultat += "<ul>";
  for (var j = 0 ; j < 11 ; j++) {
    resultat += "<li>" + j + "</li>";
  }
  resultat += "<ul>";
  resultat += "</ul>";
 }
}

resultat += "</ul>" ;

document.write(resultat);
alert(compteur);
