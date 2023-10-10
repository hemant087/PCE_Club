const gallery=[
    {
        id:"1",
        src:"./images/gallery/g1.jpg",
        category:'tech'


    },
    {
        id:"1",
        src:"./images/gallery/g2.jpg",
        category:'tech'
    },
    {
        id:"1",
        src:"./images/gallery/g3.jpg",
        category:'tech'
    },
    {
        id:"1",
        src:"./images/gallery/g4.jpg",
        category:'tech'
    },
    {
        id:"1",
        src:"./images/gallery/g5.jpg",
        category:'tech'
    },
    {
        id:"1",
        src:"./images/gallery/g6.jpeg",
        category:'tech'
    },
    {
        id:"1",
        src:"./images/gallery/g7.jpg",
        category:'drama'
    },
    {
        id:"1",
        src:"./images/gallery/g8.jpg",
        category:'drama'
    },
    {
        id:"1",
        src:"./images/gallery/g9.jpeg",
        category:'drama'
    },
    {
        id:"1",
        src:"./images/gallery/g10.png",
        category:'drama'
    },
    {
        id:"1",
        src:"./images/gallery/g11.jpeg",
        category:'social'
    },
    {
        id:"1",
        src:"./images/gallery/g12.jpg",
        category:'social'
    },
    {
        id:"1",
        src:"./images/gallery/g13.webp",
        category:'social'
    },
    {
        id:"1",
        src:"./images/gallery/g14.jpeg",
        category:'social'
    },
    {
        id:"1",
        src:"./images/gallery/g15.jpeg",
        category:'social'
    },
    {
        id:"1",
        src:"./images/gallery/g16.jpg",
        category:'social'
    },
];
var filterArray=[];





var image_gallery_box=document.getElementById('image_gallery_box');
function showGallery(gallery_main){
 image_gallery_box.innerHTML="";
    
// map function

gallery_main.map(galleryFunc);
function galleryFunc(data){
    
image_gallery_box.innerHTML+=
`
<div class="col-12 col-md-6 col-lg-3">
<img src="${data.src}" alt="" onclick="openImage(this.src)">

</div>
`

}
}
showGallery(gallery);





function checks(){
   
    var btn_gallery=document.getElementById('basic-addon2');
    btn_gallery.addEventListener('click',function(e){
       
       
        // e.preventDefault();
       
var gallery_of_our_college=document.getElementById('gallery_value').value;     
 filterArray=gallery.filter(function(a){
if(a.category==gallery_of_our_college){
    return a.category;
}
 });
  console.log(filterArray);
  
 if(gallery_of_our_college==""){
    showGallery(gallery);
    // alert("input_blanks");
 }else{
    if(filterArray==""){
        showGallery(gallery);
        // alert("filter_blanks");
        }else{
        showGallery(filterArray);
        // alert("some_data");
        }
 }
});
    }
    checks();


var image_gallery=document.getElementById('image_gallery');
var full_image=document.getElementById('full_image');
var link=document.getElementById('link');


function openImage(e){
    full_image.style.display="flex";
    image_gallery.src=e;
    link.href=e;
  
  
  
}
function closedImage(){
    full_image.style.display="none";
}
