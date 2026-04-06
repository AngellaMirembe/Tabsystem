const form = document.getElementById("teamForm");

form.addEventListener("submit", function(event){
  event.preventDefault(); //prevent page reload
  console.log("Form submitted");

//get values
const teamName = document.getElementById("teamName").value;
const speaker1 = document.getElementById("speaker1").value;
const speaker2 = document.getElementById("speaker2").value;
const speaker3 = document.getElementById("speaker3").value;

//get selected genders
const gender1 = document.querySelector('input[name="gender1"]:checked')?.value;
const gender2 = document.querySelector('input[name="gender2"]:checked')?.value;
const gender3 = document.querySelector('input[name="gender3"]:checked')?.value;

//create object
const teamData = {
  teamName,
  speakers: [
    {name: speaker1, gender: gender1},
    {name: speaker2, gender: gender2},
    {name: speaker3, gender: gender3}
  ]
};

console.log(teamData);

//store temporarily
let allTeams = JSON.parse(localStorage.getItem("teams"))||[];
allTeams.push(teamData);
localStorage.setItem("teams", JSON.stringify(allTeams));

//reset form
form.reset();

});


//finish button logic
finishButton.addEventListener("click", function(){
  let teams = JSON.parse(localStorage.getItem("teams")) || [];

  console.log("All teams:", teams);

  if (teams.length === 0){
    alert("No teams registered yet!");
    return;
  }

  if (teams.length %2 !== 0){
    alert("Odd number of teams! Please register one more team to proceed.");
    return;
  }

  let outputHTML = "<h2>Registered Teams:</h2>";

  teams.forEach(function(team, index){
    outputHTML += `<p>Team ${index + 1}: ${team.teamName}</p>`;});

    output.innerHTML = outputHTML;

    //clear data after finish
    localStorage.removeItem("teams");

    container.style.display = "none";
    output.style.display = "block";
});

console.log(finishButton);