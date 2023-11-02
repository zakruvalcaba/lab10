// GET THE ACCORDION
let faqs = document.getElementById('faqs')
// GET ALL THE H2 ELEMENTS FROM THE ACCORDION
let h2Elements = faqs.getElementsByTagName('h2')
// ADD EVENT HANDLER TO EACH H2 ELEMENT
const toggle = (e) => {
    // GET THE CURRENTLY SELECTED H2
    let h2 = e.currentTarget
    // GET THE DIV FOR THE CURRENTLY SELECTED H2
    let div = h2.nextElementSibling

    // HANDLE REMOVAL OF ALL CLASSES FROM H2 AND DIV ELEMENTS
    // LOOP THROUGH ARRAY OF H2 ELEMENTS
    for (let h2Element of h2Elements) {
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
// LOOP THROUGH COLLECTION OF H2 ELEMENTS AND ATTACH TOGGLE EVENT HANDLER
for (h2Element of h2Elements) {
    h2Element.addEventListener('click', toggle)
}