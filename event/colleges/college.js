let bg_smallScreen=document.querySelector('.class_menu-2 ul');
let collegeMenu=document.getElementById('collegeMenu');
let menu_iconSmallScreen=document.getElementById('menu_iconSmallScreen');
var check = true;
collegeMenu.addEventListener('click',function(){

if(check==true){
    // alert('true');
    menu_iconSmallScreen.classList.add("bi-caret-up-fill");
    bg_smallScreen.style.display="none";
    check = false;
    
}else{
    // alert('false');
    menu_iconSmallScreen.classList.remove("bi-caret-up-fill");
    bg_smallScreen.style.display="block";
    check = true;
}
})

// code for exercise and tutorials button
let menuTutorials=document.getElementsByClassName('menuTutorials');
let menu_iconTutorials=document.getElementById('menu_iconTutorials');
let menu_iconExercise=document.getElementById('menu_iconExercise');
let open_at_hover_exercise=document.getElementById('open_at_hover_exercise');
let open_at_hover_tutorials=document.getElementById('open_at_hover_tutorials');
var check_menu = true;
for(let i=0;i<menuTutorials.length;i++){
    menuTutorials[i].addEventListener('click',function(){
  
if(i%2==0){
    if(check_menu==true){
        // alert('true');
        menu_iconTutorials.classList.add("bi-caret-up-fill");
        open_at_hover_tutorials.style.display="block";
        check_menu = false;
        
    }else{
        // alert('false');
        menu_iconTutorials.classList.remove("bi-caret-up-fill");
        open_at_hover_tutorials.style.display="none";
     
        check_menu = true;
    }
    // alert("1st")
}else{
    if(check_menu==true){
        // alert('true');
        menu_iconExercise.classList.add("bi-caret-up-fill");
      open_at_hover_exercise.style.display="block";
        check_menu = false;
        
    }else{
        // alert('false');
        menu_iconExercise.classList.remove("bi-caret-up-fill");
        open_at_hover_exercise.style.display="none";
        check_menu = true;
    }
    // alert("2nd")
}

// alert(i);
    });     
}

function cross_ex(){
    open_at_hover_exercise.style.display="none";
    // alert("hey");
}
function cross_tu(){
    open_at_hover_tutorials.style.display="none";
    // alert("hey!!!");
}