
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

let mainPhoto = document.getElementById("main-image");

let names = [
    {pName: 'Ahmed', pAge : 25, pImg: '1'},
    {pName: 'moahmed', pAge : 23, pImg: '2'},
    {pName: 'abdelrahman', pAge : 24, pImg: '3'},
    {pName: 'mostafa', pAge : 26, pImg: '4'},
    {pName: 'yousef', pAge : 22, pImg: '5'},
    ]

function element(titleName, ageText, imgName)
{
    let card = document.createElement('div', "card");
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    let head = document.createTextNode(titleName);
    let ageContent = document.createTextNode(ageText);
    img.src = 'img/'+imgName+'.jpg';

    title.appendChild(head);
    age.appendChild(ageContent);

    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    
    img.style.width = '100%';
    img.style.border = '50px';

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);


    container.appendChild(card);

    let currImg = null;
    
    // Add event listener to each image for click handling

      img.addEventListener('click', function() {
        // Remove green border from previously clicked image (if any)
        if (currImg !== null) {
          currImg.style.borderColor = '#444';
        }
    
        // Apply green border to clicked image
        this.style.borderColor = '#eee';
    
        // Handle image click logic here (e.g., display larger version, show details)
        mainPhoto.src = this.src;
    
        // Update reference to the newly clicked image
        currImg = this;
      });
    

}
names.forEach(n => {
    
    element(n.pName,n.pAge, n.pImg);


});


let btnStatus = false;
let btn = document.getElementById('btn');



// btn.onclick = function(){  // Use addEventListener for better practice
btn.addEventListener('click', () => {
  if (btnStatus === false) {
    btn.style.background = 'green';
    btn.style.color = 'white';
    document.body.style.background = '#235';
    btnStatus = true;
  } else {
    btn.style = null;
    document.body.style = null;
    btnStatus = false;
  }
});