const subjects=[
    {
        id:"1",
        subject:"math",
        sem:"1",
        semester:"first",
        semesters:"one",
        semester2:"5 sem",
        semesterOtherWay:"1st sem",
        branch:"ece",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"2",
        subject:"english",
        sem:"2",
        branch:"ece",
        semester:"second",
        semesters:"two",
        semester2:"2 sem",
        semesterOtherWay:"2nd sem",
        year:"2018",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"3",
        subject:"c",
        sem:"2",
        branch:"ece",
        semester:"second",
        semesters:"two",
        semester2:"2 sem",
        semesterOtherWay:"2nd sem",
        year:"2018",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"4",
        subject:"engineering drawing",
        sem:"2",
        branch:"ece",
        semester:"second",
        semesters:"two",
        semester2:"2 sem",
        semesterOtherWay:"2nd sem",
        year:"2018",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"5",
        subject:"workshop",
        sem:"2",
        branch:"ece",
        semester:"second",
        semesters:"two",
        semester2:"2 sem",
        semesterOtherWay:"2nd sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"6",
        subject:"math",
        sem:"3",
        branch:"ece",
        semester:"third",
        semesters:"three",
        semester2:"3 sem",
        semesterOtherWay:"3rd sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },

    {
        id:"3",
        subject:"c",
        sem:"4",
        branch:"ece",
        semester:"fourth",
        semesters:"four",
        semester2:"4 sem",
        semesterOtherWay:"4th sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"4",
        subject:"engineering drawing",
        sem:"4",
        branch:"ece",
        semester:"fourth",
        semesters:"four",
        semester2:"4 sem",
        semesterOtherWay:"4th sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"5",
        subject:"workshop",
        sem:"4",
        branch:"ece",
        semester:"fourth",
        semesters:"four",
        semester2:"4 sem",
        semesterOtherWay:"4th sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"6",
        subject:"math",
        sem:"5",
        branch:"eee",
        semester:"fifth",
        semesters:"five",
        semester2:"5 sem",
        semesterOtherWay:"5th sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },

    {
        id:"3",
        subject:"c",
        sem:"5",
        branch:"ece",
        semester:"fifth",
        semesters:"five",
        semester2:"5 sem",
        semesterOtherWay:"5th sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"4",
        subject:"engineering drawing",
        sem:"5",
        branch:"ece",
        semester:"fifth",
        semesters:"five",
        semester2:"5 sem",
        semesterOtherWay:"5th sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"5",
        subject:"workshop",
        sem:"6",
        branch:"ece",
        semester:"sixth",
        semesters:"six",
        semester2:"7 sem",
        semesterOtherWay:"6th sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
    {
        id:"6",
        subject:"math",
        sem:"7",
        branch:"ece",
        semester:"seventh",
        semesters:"seven",
        semester2:"7 sem",
        semesterOtherWay:"7th sem",
        year:"3",
        pdf:"./pdf_pyq/file_08Jan23.pdf"
    },
];

// ***********************************************************************
// filter array
let filterSubject=[];  

// ******************************************************************************
var pyq_subjects=document.getElementById('pyq_subjects');
function globalSubject(subjects){
    pyq_subjects.innerHTML="";
    subjects.map(subjectFunc);
    function subjectFunc(data){
      
    pyq_subjects.innerHTML+=
    ` <div class="row bg-black set_height py-1">
    <div class="col-3">${data.sem}</div>
    <div class="col-3">${data.branch}</div>
    <div class="col-3 at425shiftleft_icon"> <a href="pdf_pyq/file_08Jan23.pdf" download>${data.subject}</a></div>
    <div class="col-3 at425shiftright_icon"><a href="pdf_pyq/file_08Jan23.pdf">${data.year}<i class="bi bi-file-earmark-arrow-down-fill"></i></a></div>
    </div>
    `
    }
}
globalSubject(subjects); 

var button_addon2=document.getElementById('button-addon2');
button_addon2.addEventListener('click',function(){
var subject_search =document.getElementById('subject_search').value;

filterSubject=subjects.filter(function(e){
if(e.sem==subject_search.toLowerCase()){
return e.sem;
}else if(e.subject==subject_search.toLowerCase()){
return e.subject;
}
else if(e.year==subject_search.toLowerCase()){
    return e.year;
    }
    else if(e.branch==subject_search.toLowerCase()){
        return e.branch;
        }
        else if(e.semester==subject_search.toLowerCase()){
            return e.semester;
            }
            else if(e.semesters==subject_search.toLowerCase()){
                return e.semesters;
                }
                else if(e.semester2==subject_search.toLowerCase()){
                    return e.semester2;
                    }
            else if(e.semesterOtherWay==subject_search.toLowerCase()){
                return e.semesterOtherWay;
                }
});


if(subject_search==""){
    globalSubject(subjects);
    // alert("input_blanks");
 }else{
    if(filterSubject==""){
        globalSubject(subjects);
        // alert("filter_blanks");
        }else{
            globalSubject(filterSubject);
        // alert("some_data");
        }
 }

})