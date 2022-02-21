let logotype = document.querySelector('.logo');
logotype.onmouseover = logotype.onmouseout = handler;

function handler(event){
    if (event.type == 'mouseover') {
        document.querySelector('.modal').style.display = "flex";
    }
}

document.querySelector('#modalFormCloseButton').onclick = closeModalForm;
function closeModalForm() {
    document.querySelector('.modal').style.display = "none";
}