var gallery_data = [
    {
        image: "gallery_image_1.JPG",
        alternate_name: "Gallery Image 1"
    },
    {
        image: "gallery_image_2.JPG",
        alternate_name: "Gallery Image 2"
    },
    {
        image: "gallery_image_3.jpg",
        alternate_name: "Gallery Image 3"
    },
    {
        image: "gallery_image_4.jpg",
        alternate_name: "Gallery Image 4"
    },
    {
        image: "gallery_image_5.jpg",
        alternate_name: "Gallery Image 5"
    },
    {
        image: "gallery_image_6.jpg",
        alternate_name: "Gallery Image 6"
    }
];

var template = $("#gkma_galleryTemplate").html();
var html = Mustache.to_html(template, gallery_data);
$("#gkma_galleryDisplay").html(html);