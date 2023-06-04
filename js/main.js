let page = document.body.id;
import * as players from './players.js';

if (page == "player1.0") {

    let infoContainer = document.querySelector(".info_card");
    let img = document.getElementById("player_img")
    let btn = document.getElementById("submit")
    let next_btn = document.getElementById("next")
    let result = document.getElementById("result")
    let my_score = document.getElementById("score")

    let choose = document.getElementById("choose_player")
    let choose_players;

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    const ten_players = []

    let playersCount = 10;

    while (ten_players.length < playersCount) {
        let random = Math.floor(Math.random() * 37);
        let player = players.Players[random];
        if (!ten_players.includes(player)) {
            ten_players.push(player);
        }
    }
    console.log(ten_players);



    // first player
    let current_player_name = ten_players[0].name
    let current_player_age = ten_players[0].age
    let current_player_num = ten_players[0].number
    let current_player_club = ten_players[0].club
    let current_player_natio = ten_players[0].nationality
    let current_player_position = ten_players[0].position
    // let current_player_career = ten_players[0].career
    let current_player_img = ten_players[0].img

    infoContainer.innerHTML =
        `
        <li class="list-group-item">Age: ${current_player_age}</li>
        <li class="list-group-item">Club: ${current_player_club}</li>
        <li class="list-group-item">Number in club: ${current_player_num}</li>
        <li class="list-group-item">Nationality: ${current_player_natio}</li>
        <li class="list-group-item">Position: ${current_player_position}</li>
`

    // options to first player

    choose_players = [current_player_name, ten_players[1].name, ten_players[2].name]
    shuffle(choose_players);
    choose.innerHTML = ` 
              <option value="">Choose player</option>
              <option value="${choose_players[0]}">${choose_players[0]}</option>
              <option value="${choose_players[1]}">${choose_players[1]}</option>
              <option value="${choose_players[2]}">${choose_players[2]}</option>
`


    //guess button to check if user answer is correct
    let score = 0
    btn.addEventListener("click", () => {
        let selectedValue = choose.value;

        let correct_answer = current_player_name.toLowerCase()
        let user_guess = selectedValue.toLowerCase()

        if (user_guess == correct_answer) {
            result.innerHTML = `<p>Correct! ((${current_player_name}))</p>`
            result.style.color = "green"
            img.src = current_player_img
            score++
        }
        else {
            result.innerHTML = `<p>Wrong! ((${current_player_name}))</p>`
            result.style.color = "red"

            img.src = current_player_img
        }
        my_score.innerText = `Your score ${score}/10`
        if (currentIndex == playersCount) {
            console.log("finish");
            next_btn.style.display = "none";
            btn.textContent = "Play again!"
            btn.addEventListener("click", () => {
                my_score.innerText = `Your score 0/10`
                window.location.reload()
            })
        }
    })

    // next button to generate more players
    let currentIndex = 1;
    next_btn.addEventListener("click", () => {
        img.src = "../img/guess.png"
        result.innerHTML = ``
        current_player_name = ten_players[currentIndex].name
        current_player_age = ten_players[currentIndex].age
        current_player_num = ten_players[currentIndex].number
        current_player_club = ten_players[currentIndex].club
        current_player_natio = ten_players[currentIndex].nationality
        current_player_position = ten_players[currentIndex].position
        // current_player_career = ten_players[currentIndex].career
        current_player_img = ten_players[currentIndex].img

        infoContainer.innerHTML =
            `
                <li class="list-group-item">Age: ${current_player_age}</li>
                <li class="list-group-item">Club: ${current_player_club}</li>
                <li class="list-group-item">Number in club: ${current_player_num}</li>
                <li class="list-group-item">Nationality: ${current_player_natio}</li>
                <li class="list-group-item">Position: ${current_player_position}</li>
    `;
        choose_players = [current_player_name, players.Players[currentIndex + 1].name, players.Players[currentIndex - 1].name]
        shuffle(choose_players);
        choose.innerHTML = ` 
                  <option value="">Choose player</option>
                  <option value="${choose_players[0]}">${choose_players[0]}</option>
                  <option value="${choose_players[1]}">${choose_players[1]}</option>
                  <option value="${choose_players[2]}">${choose_players[2]}</option>
    `;
        currentIndex++
    })


}
if (page == "player2.0") {

    let infoContainer = document.querySelector(".info_card");
    let img = document.getElementById("player_img")
    let btn = document.getElementById("submit")
    let next_btn = document.getElementById("next")
    let result = document.getElementById("result")
    let my_score = document.getElementById("score")

    let choose = document.getElementById("choose_player")
    let choose_players;

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    const ten_players = []

    let playersCount = 10;

    while (ten_players.length < playersCount) {
        let random = Math.floor(Math.random() * 37);
        let player = players.Players[random];
        if (!ten_players.includes(player)) {
            ten_players.push(player);
        }
    }
    console.log(ten_players);



    // first player
    let current_player_name = ten_players[0].name
    // let current_player_age = ten_players[0].age
    // let current_player_num = ten_players[0].number
    // let current_player_club = ten_players[0].club
    // let current_player_natio = ten_players[0].nationality
    // let current_player_position = ten_players[0].position
    let current_player_career = ten_players[0].career
    let current_player_img = ten_players[0].img

    infoContainer.innerHTML =
        `
        <li class="list-group-item">Career: ${current_player_career}</li>
`

    // options to first player

    choose_players = [current_player_name, ten_players[1].name, ten_players[2].name]
    shuffle(choose_players);
    choose.innerHTML = ` 
              <option value="">Choose player</option>
              <option value="${choose_players[0]}">${choose_players[0]}</option>
              <option value="${choose_players[1]}">${choose_players[1]}</option>
              <option value="${choose_players[2]}">${choose_players[2]}</option>
`


    //guess button to check if user answer is correct
    let score = 0
    btn.addEventListener("click", () => {
        let selectedValue = choose.value;

        let correct_answer = current_player_name.toLowerCase()
        let user_guess = selectedValue.toLowerCase()

        if (user_guess == correct_answer) {
            result.innerHTML = `<p>Correct! ((${current_player_name}))</p>`
            img.src = current_player_img
            score++
        }
        else {
            result.innerHTML = `<p>Wrong! ((${current_player_name}))</p>`
            img.src = current_player_img
        }
        my_score.innerText = `Your score ${score}/10`
        if (currentIndex == playersCount) {
            console.log("finish");
            next_btn.style.display = "none";
            btn.textContent = "Play again!"
            btn.addEventListener("click", () => {
                my_score.innerText = `Your score 0/10`
                window.location.reload()
            })
        }
    })

    // next button to generate more players
    let currentIndex = 1;
    next_btn.addEventListener("click", () => {
        img.src = "../img/guess.png"
        result.innerHTML = ``
        current_player_name = ten_players[currentIndex].name
        current_player_career = ten_players[currentIndex].career
        current_player_img = ten_players[currentIndex].img

        infoContainer.innerHTML =
            `
                <li class="list-group-item">Career: ${current_player_career}</li>
    `;
        choose_players = [current_player_name, players.Players[currentIndex + 1].name, players.Players[currentIndex - 1].name]
        shuffle(choose_players);
        choose.innerHTML = ` 
                  <option value="">Choose player</option>
                  <option value="${choose_players[0]}">${choose_players[0]}</option>
                  <option value="${choose_players[1]}">${choose_players[1]}</option>
                  <option value="${choose_players[2]}">${choose_players[2]}</option>
    `;
        currentIndex++
    })


}