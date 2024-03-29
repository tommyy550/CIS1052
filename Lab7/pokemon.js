﻿function getPokemonInfo() {
    //get user input
    let search = document.querySelector("#search");
    let pokemon = search.value.toLowerCase().trim();

    //console.log(pokemon);

    //clear fields
    reset();

    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data);
            

            const name = data.name;
            document.querySelector("#name").innerHTML = name;

            // if(document.querySelector("#name").innerText == null){
            //     alert("error");
            //     document.querySelector("#name").innerHTML = "Pokemon does not exist."
            // }

            const image = data.sprites.front_default;
            document.querySelector("#image").innerHTML = "<img src='" + image + "'/>";

            const height = data.height;
            document.querySelector("#height").innerHTML = height;

            const weight = data.weight;
            document.querySelector("#weight").innerHTML = weight;

            //types
            document.querySelector("#types").innerHTML = "";
            const types = data.types.map(types => types.type);
            for (const type of types) {
                document.querySelector("#types").innerHTML += type.name + " ";
            }

            //stats
            document.querySelector("#hp").innerHTML = data.stats[0].base_stat;
            document.querySelector("#attack").innerHTML = data.stats[1].base_stat;
            document.querySelector("#defense").innerHTML = data.stats[2].base_stat;
            document.querySelector("#special-attack").innerHTML = data.stats[3].base_stat;
            document.querySelector("#special-defense").innerHTML = data.stats[4].base_stat;
            document.querySelector("#speed").innerHTML = data.stats[5].base_stat;

            //move list
            const myList = document.querySelector("#move-list");
            const moves = data.moves.map(moves => moves.move);
            for (const move of moves) {

                var listElement = document.createElement("LI");
                listElement.innerHTML += move.name;

                var button = document.createElement('button');
                button.innerHTML = 'Get More Info';
                button.className="btn btn-primary btnPadding";

                button.onclick = function () {
                    fetch(move.url, { headers: { "Accept": "application/json" } })
                        .then(resp => {
                            return resp.json()
                        })
                        .then(data => {
                            //console.log(data);

                            const attackName = data.name;
                            document.querySelector("#attackName").innerHTML = attackName;

                            const flavorText = data.flavor_text_entries[0].flavor_text;
                            document.querySelector("#theFlavorText").innerHTML = flavorText;

                            const accuracy = data.accuracy;
                            document.querySelector("#accuracy").innerHTML = accuracy;

                            const pp = data.pp;
                            document.querySelector("#pp").innerHTML = pp;

                            const power = data.power;
                            document.querySelector("#power").innerHTML = power;

                            const type = data.type.name;
                            document.querySelector("#attackType").innerHTML = type;
                        })

                };
                listElement.append(button);
                myList.append(listElement);
            }

        }
        ).catch(e => 
            document.querySelector("#error").innerHTML="Pokemon does not exist."
            )


}

function reset() {
    document.querySelector("#attackName").innerHTML = "";
    document.querySelector("#theFlavorText").innerHTML = "";
    document.querySelector("#accuracy").innerHTML = "";
    document.querySelector("#pp").innerHTML = "";
    document.querySelector("#power").innerHTML = "";
    document.querySelector("#attackType").innerHTML = "";

    document.querySelector("#name").innerHTML = "";
    document.querySelector("#image").innerHTML = "";
    document.querySelector("#height").innerHTML = "";
    document.querySelector("#weight").innerHTML = "";
    document.querySelector("#types").innerHTML = "";

    document.querySelector("#hp").innerHTML = "";
    document.querySelector("#attack").innerHTML = "";
    document.querySelector("#defense").innerHTML = "";
    document.querySelector("#special-attack").innerHTML = "";
    document.querySelector("#special-defense").innerHTML = "";
    document.querySelector("#speed").innerHTML = "";

    document.querySelector("#error").innerHTML = "";

    const myList = document.querySelector("#move-list");
    myList.innerHTML="";
}


