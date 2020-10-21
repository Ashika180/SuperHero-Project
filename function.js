canvas = new fabric.Canvas("MyCanvas");
superhero_x = 10;
superhero_y = 10;
part_image_width = 30;
part_image_height = 30;

var superhero_object = "";
var part_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        superhero_object = Img;
        superhero_object.scaleToWidth(150);
        superhero_object.scaleToHeight(140);
        superhero_object.set({
            top:superhero_y,
            left:superhero_x
        });
       canvas.add(superhero_object); 
    });
}

function new_img(get_Image){
fabric.Image.fromURL(get_Image, function(Img){
    part_image_object = Img;
    part_image_object.scaleToWidth(part_image_width);
    part_image_object.scaleToHeight(part_image_height);
    part_image_object.set({
        top:superhero_y,
        left:superhero_x
    });
    canvas.add(part_image_object);
});
}