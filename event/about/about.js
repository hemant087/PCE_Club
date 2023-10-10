const team_data=[
    {
        id:"1",
position:"Web development",       
name:"vishal kumar",
year:"3rd year",
src:"./images/vishal_tech2.jpeg",

    },
    {
        id:"2",
        position:"AL/ML Developer",       
        name:"vishal kumar",
        year:"3rd year",
        src:"./images/hemant_tech.jpeg",
       
    },
    {
        id:"3",
        position:"Graphics Designer",       
        name:"Alok Kumar",
        year:"2nd year",
        src:"./images/alok_tech.png",
    },
    {
        id:"4",
        position:"Placement cell",       
        name:"Yash Raj",
        year:"3rd year",
        src:"./images/yash_tech.png",
    },
    {
        id:"5",
        position:"App Developer",       
        name:"Rajeev Kumar",
        year:"3rdd year",
        src:"./images/rajeev_tech.jpeg",
    },
    {
        id:"6",
        position:"Management",       
        name:"Sagar Jha",
        year:"3rd year",
        src:"./images/sagar_management.jpeg",
    }
];

team_data.map(card);


function card(e,index){
var team_member_card=document.getElementById('team_member_card');
team_member_card.innerHTML +=
`
<div class="col-lg-4 marginAt_991">
<div class="pic">
    <img src="${e.src}" alt="profileOf_team" class="img-fluid">
    <div class="pic_content text-center">
     <h1>${e.position}</h1>
     <h5><span><b>Name:</b></span>${e.name}</h5>
     <h5><span><b>Year:</b></span>${e.year}</h5>
     <div class="row connect_withUs">
        <a href=""><i class="bi bi-linkedin"></i></a>
        <a href=""><i class="bi bi-github"></i></a>
       <a href=""> <i class="bi bi-instagram"></i></a>

     </div>
    </div>
</div>
</div>
`
}