const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const title = document.getElementById('title');
const textarea = document.getElementById('textarea');
const form = document.getElementById('form');
const error = document.getElementById('error');

  form.addEventListener('submit', (e) => {
    let messages = [];

    if( fullname.value == '' || fullname.value == null ){
      messages.push('name is required');
    }else if (fullname.value.length == 3){
      messages.push('name must be at least 4 characters');
    }else if (fullname.value.match(/^[0-9]+$/)){
      messages.push('Name must be alphabets');
    }
    
    if( email.value == '' || email.value == null ){
      messages.push('email is required');
    }else if (email.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)){
      return true;
    } else{
      messages.push('enter a valid email address');
    }

    if( title.value == '' || title.value == null ){
      messages.push('please enter a title');
    }

    if( textarea.value == '' || textarea.value == null ){
      messages.push('message cannot be empty');
    }else if (textarea.value.length <= 19){
      messages.push('message must be at least 20 characters');
    }

    if (messages.length > 0){
      e.preventDefault();
      error.innerText = messages.join(',');
    }  
  })
