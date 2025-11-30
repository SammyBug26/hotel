const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

// grab the hotel location data
import { hotels } from "./hotels_data.js";

const hotelCards = document.querySelector('#cards');

hotels.forEach(hotel => {
    const mySection = document.createElement('section');

    const theImage = document.createElement('img');
    theImage.src = `images/${hotel.photo}`;
    theImage.alt = hotel.name;
    theImage.className = 'img';

    const theName = document.createElement('h2');
    theName.textContent = hotel.name;

    const thePhone = document.createElement('a');
    thePhone.textContent = hotel.phone;
    thePhone.href = `tel:${hotel.phone}`;

    const theAddress = document.createElement('address');
    theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

    mySection.appendChild(theImage);
    mySection.appendChild(theName);
    mySection.appendChild(thePhone);
    mySection.appendChild(theAddress);

    hotelCards.appendChild(mySection);
});
