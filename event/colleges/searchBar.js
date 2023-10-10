const searchBar=[
    {
        id:"1",
        tutorial:"aku previous year",
        tutorial2:"previous year",
        tutorial3:"pyq",
        src:'first_year_pyq.html'
    },{
        id:"2",
        opps:"c++",
    },{
        id:"3",
        c:"c"
    },{
        id:"4",
        chemistry:"chemistry"
    },
    {
        id:"5",
        english:"english"
    },{
        id:"6",
        cse:"computer science",
        branch1:"cse",
    }
    ,{
        id:"7",
        ece:"electronics and communication",
        ece1:"ece",
    },
    {
        id:"8",
       civil:"civil engineering",
        civil1:"civil",
    },{
        id:"9",
        mech:"mechanical engineering",
        mech1:"mechanical",
    },
    {
        id:"10",
        eee:"electrical and electronics engineering",
        eee1:"eee",
    }
    
];

document.getElementById('exampleInputSearchCollege').addEventListener('keyup',function(e){
if(e.key=='Enter'){
let Value=e.target.value;
const filterTutorial=searchBar.find((x)=>{
if(x.tutorial==Value.toLowerCase() || x.tutorial2 ==Value.toLowerCase() || x.tutorial3== Value.toLowerCase()){
    window.open("first_year_pyq.html");
    return;
}else if(x.ece==Value.toLowerCase() || x.ece1==Value.toLowerCase() ){
   window.open('third_year_ece.html');
}else{
   document.getElementById('exampleInputSearchCollege').style.border='1px solid red'
}
})
}
});
