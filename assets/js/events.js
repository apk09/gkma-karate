var events_data = [ 
    {
        id: "headingOne",
        event_name: "30th GKMA Annual Karate Training Camp 2026",
        event_identifier: "firstEvent",
        event_date: "24th - 25th JAN 2026",
        event_image: "gkma-championship-poster.png",
    },
    {
        id: "headingTwo",
        event_name: "5th GKMA Maharashtra State Level Open Karate Championship 2026",
        event_identifier: "SecondEvent",
        event_date: "8th MAR 2026",
    },
    {
        id: "headingThree",
        event_name: "13th GKMA National Karate Championship 2026",
        event_identifier: "ThirdEvent",
        event_date: "OCT 2026",
    }
];

var template = $("#gkma_eventsTemplate").html();
var html = Mustache.to_html(template, events_data);
$("#gkma_eventsDisplay").html(html);
