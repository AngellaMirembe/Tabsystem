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
const finishButton = document.getElementById("finishButton");
const container = document.getElementById("container");
const output = document.getElementById("output");


finishButton.addEventListener("click", function(){
  container.style.display = "none"; //hide table
  output.style.display = "block"; //show result section
  //testing display
  output.innerHTML = `
  <h2>Teams submitted successfully!</h2>
  `;
});

console.log(finishButton);