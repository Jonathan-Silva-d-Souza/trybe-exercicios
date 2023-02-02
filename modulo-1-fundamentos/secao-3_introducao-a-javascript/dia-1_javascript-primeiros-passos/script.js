const titulo = document.getElementById("header-container");
titulo.style.backgroundColor = "rgb(0, 176, 105)";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksTitle = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasksTitle.length; index += 1){
    emergencyTasksTitle[index].style.backgroundColor = "rgb(165, 0, 243)";
}

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksTitle = document.querySelectorAll(".no-emergency-tasks h3");
for(let index2 = 0; index2 < noEmergencyTasksTitle.length; index2 += 1 ){
    noEmergencyTasksTitle[index2].style.backgroundColor = "rgb(35, 37, 37)";
};

const rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "rgb(0, 53, 51)"