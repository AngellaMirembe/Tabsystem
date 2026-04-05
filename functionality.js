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
document.getElementById("finishButton").addEventListener("click", function(){

  let teams = JSON.parse(localStorage.getItem("teams"))||[];

  //check if number of teams are even
  if(teams.length %2!==0){
    alert("You have an  odd number of teams. Please add a swing team.");
    return;
  }

  //hide form
  document.getElementById("teamForm").style.display = "none";

  const output = document.getElementById("output");
  output.innerHTML = "<h2>Teams Entered</h2>";

  //display teams
  teams.forEach((team, index)=>{
    output.innerHTML+=`
    <div>
    <h3>Team ${index+1}: ${team.teamName}</h3>
    <ul>
    ${team.speakers.map(
    s=> `<li>${s.name}(${s.gender})</li>`).join("")}
    </ul>
    </div>
    `;
  });
});