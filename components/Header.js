// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const div1 = document.createElement('div');
    const span1 = document.createElement('span');
    const h11 = document.createElement('h1');
    const span2 = document.createElement('span');
    
    span1.textContent = 'MARCH 28, 2020';
    h11.textContent = 'Lambda Times';
    span2.textContent = '98°';
    
    div1.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');
    
    div1.appendChild(span1);
    div1.appendChild(h11);
    div1.appendChild(span2);

    return div1;
}
    
const header1 = document.querySelector('div.header-container');

header1.appendChild(Header());
