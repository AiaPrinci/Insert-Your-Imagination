let bodyContainer = document.createElement('div');
bodyContainer.classList.add('body-container');

let divContainer = document.createElement('div');
divContainer.classList.add('div-container');

let newElementContainer = document.createElement('div');
newElementContainer.classList.add('new-element-container');

let input = document.createElement('input');
input.classList.add('input');
input.placeholder = 'Insert Your Imagination';

let button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Add';

let paragraph = document.createElement('p');
paragraph.textContent = 'რაიყო ბიჯო აზრი არ გაგაჩნია?';
paragraph.style.color = 'red';
paragraph.style.display = 'none';
paragraph.style.textShadow = '0px 0px 5px #fff'

divContainer.appendChild(input);
divContainer.appendChild(button);

document.body.appendChild(bodyContainer);
document.body.appendChild(divContainer);
document.body.appendChild(newElementContainer);

bodyContainer.appendChild(divContainer);
bodyContainer.appendChild(paragraph);
bodyContainer.appendChild(newElementContainer);

button.addEventListener('click', () => {
    if(input.value.length > 0) {
        var value = input.value;
        var box = document.createElement('div');
        box.classList.add('box');
        document.body.appendChild(box);
        var span = document.createElement('span');
        span.classList.add('span');
        span.textContent = `${value}`;
        var removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-button');
        removeBtn.textContent = 'Remove';
        box.appendChild(span);
        box.appendChild(removeBtn);
        newElementContainer.appendChild(box);
        input.value = '';
    }
    else {
        paragraph.style.display = 'block';
        setTimeout(() => {
                paragraph.style.display = 'none';
        }, 2000);
    }
    const removeingBtn = () => {
        removeBtn.addEventListener('click', () => {
            let parent = removeBtn.parentElement;
            parent.remove();
        })
    }
    
    removeingBtn();
});