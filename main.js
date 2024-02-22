const imageNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];

const imageUrl = `images/${randomImageName}`;

const imgElement = document.getElementById('myImage'); // Замініть 'myImage' на ідентифікатор вашого тегу <img>
imgElement.src = imageUrl;
