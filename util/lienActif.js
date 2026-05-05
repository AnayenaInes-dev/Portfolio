let liens = document.querySelectorAll(".lien");

let indice = 0; //désigne l'indice du 1er lien actif

// l'argument 'index' correspond à l'indice de chaque elements de notre tableau 'liens'
liens.forEach((lien, index) => {
    lien.addEventListener("click",() =>{
        // on verifie si le lien qui est actif contient la classe 'actif'
        // if (liens[indice].classList.contains("actif")) {
        
            // si condition vrai on supprime la classe 'actif' de ce lien 
            liens[indice].classList.remove("actif");

            // indice reçoit index 
            indice = index;

            // le nouveau lien actif reçoit alors la classe 'actif'
            liens[indice].classList.add("actif");
        // }
    })
});