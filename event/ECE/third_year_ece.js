const courses=[
    {
        id:"1",
        src:"./images/ECE/first_year/linear_control (2).png",
        subject:"Linear control system",
        semester:"5"
    },
    {
        id:"2",
        src:"./images/ECE/first_year/digital_signal_processing.png",
        subject:"Digital signal processing",
        semester:"5"
    },
    {
        id:"3",
        src:"./images/ECE/first_year/linear_integrated_circuit.png",
        subject:"Linear integrated circuit",
        semester:"5"
    },
    {
        id:"4",
        src:"./images/ECE/first_year/microprocessor.png",
        subject:"Microprocessor and microcontrollers",
        semester:"5"
    },
    {
        id:"5",
        src:"./images/ECE/first_year/probablity.png",
        subject:"Probablity Theory and Stochastics",
        semester:"5"
    },
  
    {
        id:"6",
        src:"./images/ECE/first_year/computer_network_security.png",
        subject:"Computer network and security",
        semester:"5"
    },
    
];
courses.map(coursesFunc);
function coursesFunc(data){
var courses_ece=document.getElementById('courses_ece');

    courses_ece.innerHTML+=
    `
    <div class="col-md-4 courses_ece">
    <a href="">
       <div class="row">
           <div class="row  g-0">
             <div class="img_set">
              <img class="sub" src="${data.src}" alt="">
            <img id="sub_logo" src="images/threed-logo.png" alt="">
           </div>
              <div class="row content_courses g-0">
               <h3>${data.subject}</h3>
               <p class="mt-3"><i class="bi bi-bar-chart-fill"></i> Begineer to Advance</p>
           </div>

           </div>
       </div>
    </a>
   </div>
    `
}