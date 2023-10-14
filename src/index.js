document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.querySelector('form')
const inputs =document.querySelectorAll('input') 
const [inputField, button] =inputs;

//console.log();

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputField.value ==='') {
    alert('cannot add an empty task to list');
  }
  else{
    const li =document.createElement('li');
    li.classList.add('li');
    li.textContent=inputField.value
    form.append(li);
    inputField.value='';
    //create a div that contains the delete and edit
    const editAndDeleteDive = document.createElement('div');
    editAndDeleteDive.classList.add('spanDiv');
    li.append(editAndDeleteDive);
    //create edit span
    const editSpan =document.createElement('span');
    editSpan.classList.add('edit');
    editSpan.textContent ='edit';
    editAndDeleteDive.append(editSpan);
    //create delete
    const deleteSpan= document.createElement('span');
    deleteSpan.classList.add('delete');
    deleteSpan.textContent='x'
    editAndDeleteDive.append(deleteSpan);
  }
})
});
