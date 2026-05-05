let carteActuelle = 0;
const conteneur = document.querySelector('.carrousel');
let cartes = document.querySelectorAll(".projet");
let btns = document.querySelectorAll('.btn');

// index correspond à la position de l'element 'btn' dans le tableau 'btns'
btns.forEach((btn, index) => {
    btn.addEventListener("click", ()=> {
        // On retire la classe 'active de la carte actuelle
        cartes[carteActuelle].classList.remove('active');

        // mise à jour la valeur 'carteActuelle'(designe l'index de la carte actuelle) 
        carteActuelle=index;

        // Ajout de la classe 'active' à la nouvelle carte
        cartes[carteActuelle].classList.add('active');
        
        // Mettre à jour l’état des boutons
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

    })
});


// function afficherCarte(n) {
//     if () {
        
//     }
// }
// cartes[carteActuelle].classList.remove('active');
// carteActuelle = (n + cartes.length) % cartes.length;
// cartes[carteActuelle].classList.add('active');