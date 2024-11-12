/* 1-  Digital Clock :
 Définir un minuteur pour mettre à jour l'heure chaque seconde (1000 millisecondes) */
setInterval(myTime, 1000);

// Définir la fonction 'myTime' qui sera exécutée chaque seconde
function myTime() {

  // Créer un nouvel objet 'Date' pour obtenir l'heure actuelle
  const date = new Date();
  
  // Mettre à jour l'élément HTML id : time avec l'heure actuelle au format local
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}


// 2-Countdown Timer :

// Définir la date et l'heure de fin pour le compte à rebours
var limitedate = new Date("Jun 27, 2024 14:34:00").getTime();

// Initialiser le compte à rebours qui s'exécute toutes les secondes
var x = setInterval(function() {

  // Obtenir le temps actuel
  var datenow = new Date().getTime();
  
  // Calculer la différence entre la date limite et l'heure actuelle
  var datediff = limitedate - datenow;
  
  // Calculer le nombre de jours restants
  var days = Math.floor(datediff / (1000 * 60 * 60 * 24));
  
  // Calculer le nombre d'heures restantes (après avoir soustrait les jours)
  var hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  // Calculer le nombre de minutes restantes (après avoir soustrait les heures)
  var minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
  
  // Calculer le nombre de secondes restantes (après avoir soustrait les minutes)
  var seconds = Math.floor((datediff % (1000 * 60)) / 1000);
  
  // Mettre à jour l'affichage du compte à rebours par id : countdown
  document.getElementById("countdown").innerHTML = days + "d " 
  + hours + "h " + minutes + "m " + seconds + "s ";
  
  // Vérifier si le compte à rebours est terminé
  if (datediff < 0) {
    // Arrêter le compte à rebours
    clearInterval(x);
    
    // Afficher le message "Expiré"
    document.getElementById("countdown").innerHTML = "Expiré";
  }
}, 1000);

// 3- Hex Colour Background Change :

// Fonction 'changefond' pour changer la couleur de fond de la page
function changefond() {
  
//variable 'couleurinput' obtenir la valeur de la couleur choisie par l'utilisateur à partir de l'id 'colorInput'
  var couleurinput = document.getElementById('colorInput').value;
  
  // Changer la couleur de fond du corps du document en utilisant la couleur choisie par l'utilisateur
  document.body.style.backgroundColor = couleurinput;
}

// 4-Speech Detection :

// Fonction 'voice' pour utiliser la reconnaissance vocale
function voice() {

  // Créer un objet de reconnaissance vocale 'webkitSpeechRecognition'
  var recognition = new webkitSpeechRecognition();
  
  /* Définir la langue pour la reconnaissance vocale
  'en-GB" reconnaissance vocale en anglaise
  */
  recognition.lang = "en-GB";
  
  /* Définir ce qui se passe lorsque des résultats sont obtenus
  'event' : est un parametre dans une fonction
   */
  recognition.onresult = function(event) {

    // Afficher les résultats de la reconnaissance vocale dans l'élément avec l'ID "result"
    document.getElementById("result").value = event.results[0][0].transcript;
  };
  
  // Démarrer la reconnaissance vocale
  recognition.start();
}

// 5-  To-Do List

// Fonction pour ajouter une nouvelle tâche 
const addTask = () => {
// Récupérer le champ de saisie de texte 
  const taskInput = document.getElementById('taskInput'); 
//  Obtenez une liste de tâches 
  const taskList = document.getElementById('taskList'); 

// prenez la valeur de la saisie de texte et supprimez les espaces supplémentaires
  const taskValue = taskInput.value.trim(); 

  // Créer un élément de tâche si du texte est saisi 
  taskValue && createTaskElement(taskValue, taskList);

  // réinitialiser la valeur d'entrée à vide
    taskInput.value = '';
};

// fonction pour créer un élément de tâche avec le bouton supprimer
const createTaskElement = (taskValue, taskList) => {

// créer un nouvel élément de menu  (li)
  const li = document.createElement('li'); 

 //  Définir le texte saisi comme valeur de l'élément de menu 
  li.textContent = taskValue; 

// créer un boutton supprimer 
  const deleteBtn = document.createElement('button'); 
  
  // Définissez le texte "Delete" comme valeur pour le bouton Supprimer
  deleteBtn.textContent = 'Delete'; 
  
  // Ajouter une classe CSS pour le bouton Supprimer
  deleteBtn.classList.add('delete');
 
  // Définissez la fonction de suppression lorsque vous cliquez sur le bouton Supprimer
  deleteBtn.onclick = () => taskList.removeChild(li);

  //Ajouter un bouton de suppression en tant que 'appendChild' de l'élément de menu
  li.appendChild(deleteBtn); 
  
  // Ajouter l'élément de menu à la liste de tâches
  taskList.appendChild(li);
};


// 6-  Webpage Filter :
/* Fonction 'filterSelection' pour filtrer les éléments 
category est un parametre de fonction filterSelection
*/
function filterSelection(category) {
  /* Obtenir tous les éléments 'elements' avec la classe 'filterDiv'
   et les convertir en un tableau par 'Array.from' */
  const elements = Array.from(document.getElementsByClassName('filterDiv'));
  
  /* Parcourir chaque élément pour déterminer s'il doit être affiché ou masqué
    et convertissez forEach en tableau
    element : est un parametre de la fonction flechee
    */

  elements.forEach(element => {
    // Afficher element si la category  est 'all' ou s'il appartient à la category spécifiée
    if (category === 'all' || element.classList.contains(category)) { 
      element.style.display = 'block';
    } 
       // Masquer element s'il n'appartient pas à la category spécifiée
    else {
      element.style.display = 'none';
    }
  });
}

// Afficher tous les éléments au chargement de la page
filterSelection('all');

// 7-Popup Message Generation :

// Fonction showPopup pour afficher le message pop-up
function showPopup() {
  // Ajouter la classe 'spectacle' pour rendre le pop-up visible
  document.getElementById('popupContainer').classList.add('spectacle');
}

// Fonction hidePopup pour masquer le message pop-up
function hidePopup() {
  // Supprimer la classe 'spectacle' pour rendre le pop-up invisible
  document.getElementById('popupContainer').classList.remove('spectacle');
}