const events=[
    {
        id:"1",
        eventName:"Sarswati puja",
        date:"26/01/2023",
        time:"7am:9pm",
        place:"college campus",
        organised_by:"final year student",
        src:"./images/sasaswati_puja.jpg",
        content1:"Dear chess enthusiasts",
        content2:"We are excited to announce that our college campus will be hosting a chess competition on [10/jan-10 am to 5pm]. The competition is open to all students, faculty, and staff of our college, as well as members of the local community.",
        content3:"The competition will feature exciting matches and prizes for the top finishers. Whether you're a seasoned player or just starting out, we invite you to come and test your skills against some of the best chess players in the area.",
    },
    {
        id:"2",
        eventName:"The Royal Chess Championship",
        date:"10/01/2023",
        time:"10am:5pm",
        place:"college Hall ",
        organised_by:"final year student & third year student",
        src:"./images/chess-1.jpeg",
        content1:" We cordially invite you to be a part of our auspicious celebration of the festival of Saraswati Puja. The puja will be held on [date] at [time] at [location]. This is a special occasion to honor the goddess of knowledge, music, arts, wisdom and learning. We will be performing various rituals and offerings to invoke the blessings of goddess Saraswati.",
        content2:"You will have the opportunity to participate in the puja and seek her blessings for education, arts, and wisdom. The puja will be followed by a cultural program, including devotional songs and dances.",
        content3:"We would be honored by your presence and look forward to your blessings. Please RSVP by [date] to confirm your attendance.",
    }
];

events.map(eventFunc);
function eventFunc(data,index){
   
var outer_pastEvent=document.getElementById('pastEvents');

if(index%2==0){
    outer_pastEvent.innerHTML+=
    `
    <div class="col-md-4 event_pic">
    <img src="${data.src}" alt="" class="img-fluid">
</div>
<div class="col-md-6 mb-5" style="border-bottom: 1px solid aqua;">
    <div class="row text-center eventName mb-4">
        <p>${data.eventName}</p>
    </div>
    <div class="row time_event">
        <span>Date:<b>${data.date}</b></span>
        <span>Time:<b>${data.time}</b></span>
        <span>Place:<b>${data.place}</b></span>
        <span>Organised by:<b>${data.organised_by}</b></span>

    </div>
    <div class="row pastEvent_content mt-2">
<p class="mt-4">
 ${data.content1}

</p>
<p class="mt-2">
${data.content2}
</p>
<p class="mt-2"> 
${data.content3}
</p>
    </div>
</div>
    `
}else{
outer_pastEvent.innerHTML+=
`

<div class="col-md-6" style="border-bottom: 1px solid aqua;">
<div class="row text-center eventName mb-4">
    <p>${data.eventName}</p>
</div>
<div class="row time_event">
    <span>Date:<b>${data.date}</b></span>
    <span>Time:<b>${data.time}</b></span>
    <span>Place:<b>${data.place}</b></span>
    <span>Organised by:<b>${data.organised_by}</b></span>

</div>
<div class="row pastEvent_content mt-2">
<p class="mt-4">
${data.content1}
</p>
<p class="mt-2">
${data.content2}
</p>
<p class="mt-2">
${data.content3}
</p>
</div>
</div>
<div class="col-md-4 event_pic">
<img src="${data.src}" alt="" class="img-fluid">
</div>
`
}
}