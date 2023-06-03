import * as players from './players.js';

// console.log(players.Players[0].name);

// console.log(player_natio);
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}





let infoContainer = document.querySelector(".info_card");
let img = document.getElementById("player_img")
let input = document.getElementById("player_name")
let btn = document.getElementById("submit")
let result = document.getElementById("result")
let choose = document.getElementById("choose_player")

let index = Math.floor(Math.random() * 37)
// console.log(index);
let player_name = players.Players[index].name;
let player_age = players.Players[index].age;
let player_club = players.Players[index].club
let player_natio = players.Players[index].nationality
let player_position = players.Players[index].position
let player_img = players.Players[index].img
// console.log("image" + player_img);

let choose_players = [player_name, players.Players[index + 1].name, players.Players[index - 1].name]

// for (let i = 0; i < choose_players.length; i++) {


// }


infoContainer.innerHTML =
    `
            <li class="list-group-item">Age: ${player_age}</li>
            <li class="list-group-item">Club: ${player_club}</li>
            <li class="list-group-item">Nationality: ${player_natio}</li>
            <li class="list-group-item">Position: ${player_position}</li>
`


shuffle(choose_players);
choose.innerHTML += ` 
              <option value="">Choose player</option>
              <option value="${choose_players[0]}">${choose_players[0]}</option>
              <option value="${choose_players[1]}">${choose_players[1]}</option>
              <option value="${choose_players[2]}">${choose_players[2]}</option>
`
// choose.innerHTML = ` 
//               <option value="">Choose player</option>
//               <option value="">${player_name}</option>
//               <option value="">${players.Players[index+1].name}</option>
//               <option value="">${players.Players[index-1].name}</option>
// `

btn.addEventListener("click", () => {

    let dropdown = document.getElementById("choose_player");
    let selectedValue = dropdown.value;
    // console.log(selectedValue);
    
    // let correct_answer = player_name.toLowerCase()
    // let user_guess = (input.value).toLowerCase()

    let correct_answer = player_name.toLowerCase()
    let user_guess = selectedValue.toLowerCase()


    if (user_guess == correct_answer) {
        result.innerHTML = `<p>Correct! ((${player_name}))</p>`
        img.src = player_img
    }
    else {

        result.innerHTML = `<p>Wrong! ((${player_name}))</p>`
        img.src = player_img
    }

})
