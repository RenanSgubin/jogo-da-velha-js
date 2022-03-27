

//X ou O
let userChoice = "X";

//Controlar os campos
let avaliableFields = [1,2,3,4,5,6,7,8,9];

//Placar de cada um
pointsX = 0;
pointsCircle = 0;



function gameLogic( classNumber ){

    if(userChoice === "X"){

         document.getElementById(`${classNumber}`).disabled = true;
         document.getElementById(`${classNumber}`).innerHTML = "X";


            document.getElementById("x-choice-id").disabled = true;
            document.getElementById("x-choice-id").style.backgroundColor = "rgb(77, 207, 164)";

            document.getElementsByClassName("circle-choice")[0].style.backgroundColor = "aquamarine";
            
            //Muda uma determinada posição do array para X com base no campo clicado
            avaliableFields[classNumber-1] = "X";

            if(
                avaliableFields[0] === "X" && avaliableFields[1] === "X" && avaliableFields[2] === "X" ||
                avaliableFields[3] === "X" && avaliableFields[4] === "X" && avaliableFields[5] === "X" ||
                avaliableFields[6] === "X" && avaliableFields[7] === "X" && avaliableFields[8] === "X" ||
                avaliableFields[0] === "X" && avaliableFields[3] === "X" && avaliableFields[6] === "X" ||
                avaliableFields[1] === "X" && avaliableFields[4] === "X" && avaliableFields[7] === "X" ||
                avaliableFields[2] === "X" && avaliableFields[5] === "X" && avaliableFields[8] === "X" ||
                avaliableFields[0] === "X" && avaliableFields[4] === "X" && avaliableFields[8] === "X" ||
                avaliableFields[2] === "X" && avaliableFields[4] === "X" && avaliableFields[6] === "X" )
                {
                    //Criar a div com o vencedor
                    const father = document.getElementsByClassName("winners-historic-content")[0];

                    const content = document.createElement('span');
                    const text = document.createTextNode("Vencedor: X");

                    content.appendChild(text);
                    father.appendChild(content);
                    
                    //Aumentar 1 ponto no placar
                    document.getElementsByClassName("points")[0].innerHTML = pointsX+=1; 

                    //Limpar Campos
                    clearFields();
                }

                userChoice = "O";
            }



        else if(userChoice === "O"){

            document.getElementById(`${classNumber}`).disabled = true;
            document.getElementById(`${classNumber}`).innerHTML = "O";

            document.getElementById("circle-choice-id").disabled = true;
            document.getElementById("circle-choice-id").style.backgroundColor = "rgb(77, 207, 164)";

            document.getElementsByClassName("x-choice")[0].style.backgroundColor = "aquamarine";    


            //Muda uma determinada posição do array para O com base no campo clicado
            avaliableFields[classNumber-1] = "O";

            if(
                avaliableFields[0] === "O" && avaliableFields[1] === "O" && avaliableFields[2] === "O" ||
                avaliableFields[3] === "O" && avaliableFields[4] === "O" && avaliableFields[5] === "O" ||
                avaliableFields[6] === "O" && avaliableFields[7] === "O" && avaliableFields[8] === "O" ||
                avaliableFields[0] === "O" && avaliableFields[3] === "O" && avaliableFields[6] === "O" ||
                avaliableFields[1] === "O" && avaliableFields[4] === "O" && avaliableFields[7] === "O" ||
                avaliableFields[2] === "O" && avaliableFields[5] === "O" && avaliableFields[8] === "O" ||
                avaliableFields[0] === "O" && avaliableFields[4] === "O" && avaliableFields[8] === "O" ||
                avaliableFields[2] === "O" && avaliableFields[4] === "O" && avaliableFields[6] === "O"
              )
              {

                //Criar a div com o vencedor
                const father = document.getElementsByClassName("winners-historic-content")[0];

                const content = document.createElement('span');
                const text = document.createTextNode("Vencedor: O");

                content.appendChild(text);
                father.appendChild(content);

                //Aumentar 1 ponto no placar
                document.getElementsByClassName("points")[1].innerHTML = pointsCircle+=1;

                //Limpar Campos
                clearFields();
              }

              userChoice = "X";
         }
}


//Limpa os campos
function clearFields(){

    auxFields = 0;

    //Volta os campos normais ao Array
    avaliableFields = [1,2,3,4,5,6,7,8,9];


    //Deixa todos campos vazios
    for(i = 0; i < 9; i++){
        auxFields = auxFields+=1;
        document.getElementById(`${auxFields}`).innerHTML = "";
        document.getElementById(`${auxFields}`).disabled = false;
     }

     //Zera a escolha do usuário
     userChoice = "X";

}

//Zerar jogo
function clearGame(){

    auxFields = 0;

    //Volta os campos normais ao Array
    avaliableFields = [1,2,3,4,5,6,7,8,9];


    //Deixa todos campos vazios
    for(i = 0; i < 9; i++){
        auxFields = auxFields+=1;
        document.getElementById(`${auxFields}`).innerHTML = "";
        document.getElementById(`${auxFields}`).disabled = false;
     }

     //Zera a escolha do usuário
     userChoice = "X";

     //Muda o background do jogador 1
     document.getElementById("x-choice-id").disabled = false;
     document.getElementById("x-choice-id").style.backgroundColor = "aquamarine";

     //Muda o background do jogador 2
     document.getElementById("circle-choice-id").disabled = true;
     document.getElementById("circle-choice-id").style.backgroundColor = "rgb(77, 207, 164)";


     pointsCircle = 0;
     pointsX = 0;

     document.getElementsByClassName("points")[0].innerHTML = 0;
     document.getElementsByClassName("points")[1].innerHTML = 0;

     document.getElementsByClassName("winners-historic-content")[0].innerHTML = "";

}



window.onload = () => {
    document.getElementById("x-choice-id").disabled = false;
    document.getElementById("x-choice-id").style.backgroundColor = "aquamarine";
}