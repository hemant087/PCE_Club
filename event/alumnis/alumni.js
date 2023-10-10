const alumni=[
    {
        id:"1",
        src:"https://ershubhambhagat.github.io/assets/img/profile-img.jpg",
        name:"shubham kumar",
        passing_year:"2021",
        Worked_in:"accenture",
        branch1:"ece",
        phone_no:'8877327819',
        branch:"Electronics and communication",
        current_pos:"sowftware engineer",
        Reasearch_field:"null",
        Work_Experience:"2 Years",
        project_during_college:"Web app make for e-commerce",
        linkdein:"https://www.linkedin.com/in/ershubhambhagat/?originalSubdomain=in",
        github:"https://github.com/Ershubhambhagat?tab=repositories",
        instagram:"https://www.instagram.com/ershubhambhagat/",
       
    },

    {
        id:"2",
        src:"https://pktherock.github.io/assets/img/dp.jpg",
        name:"prashant kumar",
        passing_year:"2021",
        Worked_in:"ginims",
        branch1:"ece",
        phone_no:'7765811317',
        branch:"Electronics and communication",
        current_pos:"penetration tester",
        Reasearch_field:"Machine learning",
        Work_Experience:"2 Years",
        project_during_college:"meal app",
        linkdein:"https://www.linkedin.com/in/pktherock",
        github:"https://github.com/pktherock",
        instagram:"",
        
    },
    {
        id:"3",
        src:"./images/unknown.png",
        name:"Vinod singh",
        passing_year:"2022",
        Worked_in:"google",
        branch1:"civil",
        phone_no:'xxxxxxxxxx',
        branch:"Electronics and communication",
        current_pos:"Front end Engineer",
        Reasearch_field:"Machine learning",
        Work_Experience:"3 Years",
        project_during_college:"Web app make for e-commerce",
        linkdein:"",
        github:"",
        instagram:"",
    },
    {
        id:"4",
        src:"./images/unknown.png",
        name:"Vinod singh",
        passing_year:"2022",
        Worked_in:"Amazon",
        branch1:"mech",
        phone_no:'xxxxxxxxxx',
        branch:"Electronics and communication",
        current_pos:"Front end Engineer",
        Reasearch_field:"Machine learning",
        Work_Experience:"3 Years",
        project_during_college:"Web app make for e-commerce",
        linkdein:"",
        github:"",
        instagram:"",
    },
];






function render(x){
    var item= document.getElementById('alumni-box');
    item.innerHTML="";
    x.map(alumniFunc);
    function alumniFunc(data){
    
    item.innerHTML+=
    `
    <div class="col-sm-3 left-alumni mb-3 borderSet">
    <div class="row alumni-profile text-center">
    <img src="${data.src}" alt="">
    </div>
    <div class="row alumni-name text-center mt-1">
        <h4>Name</h4>
        <h3>${data.name}</h3>
    </div>
    <div class="row alumni-passingYear mt-1 text-center">
        <h4>Passing year</h4>
        <h3>${data.passing_year}</h3>
    </div>
    <div class="row alumni-passingYear mt-1 text-center">
        <h4>Phone no</h4>
        <h3>${data.phone_no}</h3>
    </div>
    <div class="row contactus mt-1 text-center">
        <h4>Social Link</h4>
        <!-- <h3>XX8755XXX5</h3> -->
        <div class="row icon_of_Alumni_social justify-content-center">
           <div class="col">
            <a href=${data.linkdein}><i class="fa-brands fa-linkedin"></i></a>
           </div>
           <div class="col">
           <a href=${data.github}><i class="fa-brands fa-github"></i></a>
           </div>
           <div class="col">
           <a href=${data.instagram}><i class="fa-brands fa-instagram"></i></a>
           </div>
        </div>
    </div>
         </div>
         <div class="col-sm-9 about_details_ofAlumni mb-3 borderSet2">
            <div class="row text_color_alumni mt-5">
             <h4>Branch:</h4>
             <h3>${data.branch}</h3>
            </div>
            <div class="row text_color_alumni">
                <h4>Current position:</h4>
                <h3>${data.current_pos}</h3>
            </div>
            <div class="row text_color_alumni">
                <h4>Reasearch field:</h4>
                <h3>${data.Reasearch_field}</h3>
            </div>
            <div class="row text_color_alumni">
                <h4>Work Experience:</h4>
                <h3>${data.Work_Experience}</h3>
            </div>
            <div class="row text_color_alumni">
                <h4>Project during college:</h4>
                <h3>${data.project_during_college} </h3>
            </div>
            <div class="row text_color_alumni">
                <h4>Worked in:</h4>
                <h3>${data.Worked_in}</h3>
            </div>
         </div>
    
    `
    
    }
}

render(alumni);


document.getElementById('exampleInputSearch').addEventListener('keyup',function(e){
if(e.key=='Enter'){
   let value=e.target.value;
  const filterAlumni= alumni.filter((x)=>{
    return x.name==value.toLowerCase() || x.branch1==value.toLowerCase() || x.passing_year==value.toLowerCase() || x.Worked_in==value.toLowerCase()
   })

   if(value==""){
    render(alumni);
   }else if(filterAlumni==""){
    render(alumni);
    alert('please try other')
   }else{
    render(filterAlumni);
   }

   
}
})
