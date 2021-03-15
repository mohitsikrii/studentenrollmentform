document.onLoad= console.log('Loaded')
console.log('Branch Switch')
console.log('Branch Switch2')
console.log('Branch Switch3')
console.log('Branch Switch4')
console.log('Branch Switch5')
var emails=[]
function addRow(){
    
    var name= document.getElementById('name').value
    var email= document.getElementById('email').value
    var image=document.getElementById('image').value
    var website=document.getElementById('website').value
    var gender = document.querySelector('input[type=radio][name=gender]:checked').value;
    if(image===""){
        image="https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png"
    }
    
    
    var arr=[]
    var checkboxes= document.querySelectorAll('input[type=checkbox]:checked')
    var i;
    for( i=0;i<checkboxes.length;i++){
        var val=checkboxes[i].value
        var res= val.toUpperCase();
        arr.push( res)
    }
    if(validate(arr,email,name)===true){
        
        addItem(name,email,image,arr,website,gender)
    }
    else{
        return
    }
   
}
function clear(){
    document.getElementById('myform').reset();
}

function validate(arr,email,name){
    var name= document.getElementById('name').value
    var email= document.getElementById('email').value
    // var image=document.getElementById('image').value
    
    var website=document.getElementById('website').value
  var urlRGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var emailRGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  for(var i=0;i<emails.length;i++){
      if(emails[i]===email){
        alert('Email Already Exists')
        return false
      }
  }
emails.push(email)


  var urlResult = urlRGEX.test(website);
  var emailResult = emailRGEX.test(email);
    if(arr.length==0){
        alert('Please select skills');
        return false;
    }
    if(name===""){
        alert('Name feild can not be empty')
        return false;
    }
  if(urlResult == false)
  {
    alert('Please enter a valid Website name');
    return false;
  }
  
  if(emailResult == false)
  {
    alert('Please enter a valid email adress');
    return false;
  }

  return true;
}
var count=0
function addItem(name,email,image,arr,website,gender){
    count++
    var card=document.createElement('div')
    var toAppend=document.getElementById('base')
    if(count%2==0){
     var className='jsdiv2'
    }
    else{
        className='jsdiv'
    }
    var htmlitems=`
    <div id="changes" class="panel panel-default panel-horizontal ${className}">
    <div id="description"class="panel-body">
    <p><b>${name}</b></p>
    <p>${gender}</p>
    <p>${email}</p>
    <p><a href= "${website}">${website}\n\n</a></p>
    <p>${arr}</p>
    </div>
    <div class="foot panel-footer">
        <img src="${image}" class="img-fluid img-thumbnail" alt="ProfilePic">
    </div>
    </div>
    `
    card.innerHTML=htmlitems
    toAppend.appendChild(card)
    
}
console.log(localStorage)

