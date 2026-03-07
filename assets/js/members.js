var members_data = [
    {
        image:"shihan_prem_khadka.JPG",
        alternate_name:"Members Image 1",
        name:"SHIHAN PREM N. KHADKA",
        post:"FOUNDER, PRESIDENT & CHIEF TECHNICAL DIRECTOR",        
        mobile:"+91-9324343589",
        email:"premkhadka1996@gmail.com"
    },
    {
        image:"ramprasad_sensei.JPG",
        alternate_name:"Members Image 2",
        name:"SENSEI RAMPRASAD KAROTIYA",
        post:"VICE-PRESIDENT",        
        mobile:"+91-9920350556",
        email:"gojuprasad@gmail.com"
    },
    {
        image:"bs_sensei.JPG",
        alternate_name:"Members Image 3",
        name:"SENSEI B.S. ODD",
        post:"GENERAL SECRETARY",        
        mobile:"+91-9819062017",
        email:"oddbsingh@gmail.com"
    },
    {
        image:"shankar_sensei.JPG",
        alternate_name:"Members Image 4",
        name:"SENSEI SHANKAR C. VISHWAKARMA",
        post:"HON.TREASURER",        
        mobile:"+91-9867232895",
        email:"shankarvishwakarma78@gmail.com"
    },
    {
        image:"vishal_sempai.jpg",
        alternate_name:"Members Image 5",
        name:"SEMPAI VISHAL HEGDE",
        post:"JOINT SECRETARY",        
        mobile:"+91-9769696995",
        email:"hegdevishal85@gmail.com"
    },
    {
        image:"manoj_sempai.JPG",
        alternate_name:"Members Image 6",
        name:"SEMPAI MANOJ VISHWAKARMA",
        post:"MEMBER",        
        mobile:"+91-9930366433",
        email:"manoj.singhktv@gmail.com"
    },
    {
        image:"no_image.jpg",
        alternate_name:"Members Image 7",
        name:"MR. NAVRAJ KHADKA",
        post:"MEMBER",
        mobile:"+977-9865121690",
        email:"navraj.k7@gmail.com"
    }
];

var template = $("#gkma_membersTemplate").html();
var html = Mustache.to_html(template, members_data);
$("#gkma_membersDisplay").html(html);