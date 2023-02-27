function menu() { // MENU HAMBURGUER
    if (items.style.display == `flex`) {
        items.style.display = `none`;
        items.style.animation = `display .3s`;
    } else {
        items.style.display = `flex`;
        items.style.transition = `display .3s`;
    }
}