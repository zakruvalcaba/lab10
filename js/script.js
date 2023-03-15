// ADD EVENT HANDLER TO EACH H2 ELEMENT
const toggle = (e) => {
    // GET THE CURRENTLY SELECT H2
    let h2 = e.currentTarget
    // GET THE CURREBTLY SELECTED DIV FOR THE H2
    let div = h2.nextElementSibling

    // HANDLE REMOVAL OF ALL CLASSES FROM H2 AND DIV ELEMENTS
    // LOOP THROUGH ARRAY OF H2 ELEMENTS
    for (h2Element of h2Elements) {
        // IF THE H2 ELEMENT IN THE COLLECTION DOESN'T EQUAL THE CURRENTLY
        // CLICKED H2, HIDE ALL CLASS ATTRIBUTES FOR H2 AND SIBLING DIV
        if (h2Element !== e.currentTarget) {
            // REMOVE CLASS FROM H2
            h2Element.removeAttribute('class')
            // REMOVE CLASS FROM SIBLING DIV
            h2Element.nextElementSibling.removeAttribute('class')
        }
    }
    
    // TOGGLE PLUS / MINUS ICON FOR SELECTED H2
    if (h2.hasAttribute('class')) {
        h2.removeAttribute('class')
    } else {
        h2.setAttribute('class', 'minus')
    }

    // TOGGLE OPEN / CLOSE FOR SELECTED H2'S DIV
    if (div.hasAttribute('class')) {
        div.removeAttribute('class')
    } else {
        div.setAttribute('class', 'open')
    }
}

// GET THE ACCORDION
let faqs = document.querySelector('#faqs')
// GET ALL OF THE H2 ELEMENTS FROM THE ACCORDION
let h2Elements = faqs.getElementsByTagName('h2')
// LOOP THROUGH THE COLLECTION OF H2 ELEMENTS AND ATTACH AN EVENT LISTENER TO EACH
// USING ES5
// for (let i = 0; i < h2Elements.length; i++) {
//     h2Elements[i].addEventListener('click', toggle)
// }
// USING ES6
for (h2Element of h2Elements) {
    h2Element.addEventListener('click', toggle)
}