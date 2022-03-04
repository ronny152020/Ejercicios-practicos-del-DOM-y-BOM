/* **********     Curso JavaScript: 81. DOM: Ejercicios Prácticos | Menú de Hamburguesa - #jonmircha     ********** */
export default function hamburgerMenu(panelBtn, panel, menuLink){
    const d = document;

    d.addEventListener("click",(e) => {
        if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn}*`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remover("is-active");
            d.querySelector(panelBtn).classList.remover("is-active");
        }
    });
}