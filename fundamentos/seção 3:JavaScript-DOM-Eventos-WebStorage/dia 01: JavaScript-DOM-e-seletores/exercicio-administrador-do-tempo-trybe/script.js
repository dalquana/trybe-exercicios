const header = document.getElementById('header-container');
header.style.backgroundColor = 'purple';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0]
emergencyTasks.style.backgroundColor = 'salmon'

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    emergencyTasksHeaders[index].style.backgroundColor = 'gold';
}
const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0]
noEmergencyTasks.style.backgroundColor = 'yellow'

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for(let i = 0;i < noEmergencyTasksHeaders.length;i += 1){
    noEmergencyTasksHeaders[i].style.backgroundColor = 'black'
}
const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#006400';

