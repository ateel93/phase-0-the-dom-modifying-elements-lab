var mainElement = document.getElementById('main');
mainElement.remove();
var newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Alex is the champion"

document.body.appendChild(newHeader);
