//Declaration des variables
let bouton_touche = document.querySelectorAll(".bt")
let Ecran = document.querySelector("#body_cal_entete")
let bouton_backspace = document.getAnimations("element_backspace")
let bouton_multiplication = document.getElementById("element_multiplication")
let bouton_addition = document.getElementById("element_addition")


//commencons le programme
// initialisons l'ecran
 Ecran.textContent = "0"

// mettons un ecoute sur les boutons de la calculatrice

for(bouton of bouton_touche){
// creation de la fonction d'abord
    function affichageNumber(){
        bouton = this.innerText
        if(parseFloat(bouton) >= 0){
            if(Ecran.innerText === "0"){
                bouton = bouton.toString()
                Ecran.innerHTML = bouton
            }
            else{
                bouton = Ecran.innerText + bouton.toString()
                Ecran.innerHTML = bouton
            }
        }
        else{
            switch(bouton){
                case "C":
                    bouton = "0"
                    Ecran.innerHTML = bouton
                break
                case "(":
                    if(Ecran.innerText === "0"){
                        bouton = "("
                        Ecran.innerHTML = bouton
                    }
                    else{
                        bouton = Ecran.innerText + bouton
                        Ecran.innerHTML = bouton
                    }
                break
                case ")":
                    if(Ecran.innerText === "0"){
                        bouton = ")"
                        Ecran.innerHTML = bouton
                    }
                    else{
                        bouton = Ecran.innerText + bouton
                        Ecran.innerHTML = bouton
                    }
                break
                case ".":
                    if(bouton === "."){
                        bouton = Ecran.innerText + bouton.toString()
                        Ecran.innerHTML = bouton
                    }
                break
                case "/":
                    if(Ecran.innerText === "0"){
                        bouton = "/"
                        Ecran.innerHTML = bouton
                    }
                    else{
                        bouton = Ecran.innerText + bouton
                        Ecran.innerHTML = bouton
                    }
                break
                case "-":
                    if(Ecran.innerText === "0"){
                        bouton = "-"
                        Ecran.innerHTML = bouton
                    }
                    else{
                        bouton = Ecran.innerText + bouton
                        Ecran.innerHTML = bouton
                    }
                break
                case "=":
                    const resultat = eval(Ecran.textContent)
                    Ecran.innerHTML = resultat
                break
            }
        }
    }
bouton.addEventListener('click', affichageNumber)
}

bouton_touche[11].addEventListener('click', () => {
    if(Ecran.innerText === "0"){
        bouton = "*"
        Ecran.innerHTML = bouton
    }
    else{
        bouton = Ecran.innerText + "*"
        Ecran.innerHTML = bouton
    }
})
bouton_touche[15].addEventListener('click', () => {
    if(Ecran.innerText === "0"){
        bouton = "+"
        Ecran.innerHTML = bouton
    }
    else{
        bouton = Ecran.innerText + "+"
        Ecran.innerHTML = bouton
    }
})
bouton_touche[3].addEventListener('click', () => {
    if(Ecran.innerText === "0"){
        bouton = "0"
        Ecran.innerHTML = bouton
    }
    else{
        bouton = Ecran.innerText.slice(0, -1)
        if(bouton === ""){
            bouton = "0"
            Ecran.innerHTML = bouton
        }
        else{
            Ecran.innerHTML = bouton
        }
        
    }
})




window.addEventListener('error', (event) => {
    alert("vous avez commise une erreur! veuillez bien vérifier ce que vous avez écrit")
})










