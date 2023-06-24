export function addBackground(id, img) {
    const elem = document.getElementById(id);
    elem.style.backgroundImage = `url(${img})`;
}