export function addClassFoundByClass(classname, targetClass) {
    const elCollection = Array.from(document.getElementsByClassName(classname));
    elCollection.forEach(element => {
        element.classList.add(targetClass)
    });
}