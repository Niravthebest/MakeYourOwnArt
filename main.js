var canvas = new fabric.Canvas("theCanvas")

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set ({top:block_y,left:block_x});
		canvas.add(block_image_object);

	});

	}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	
	if(keyPressed == '70') 
	{
		block_x = 10;
		new_image("https://i.pinimg.com/originals/02/e2/d6/02e2d60188a9ad362afa91ce6fd7eb71.png");
		console.log("Let's Play! You Have Made A Flower.");

	}

    if(keyPressed == '67') 
	{
		block_x = 10;
		new_image("https://www.pngkit.com/png/full/571-5715510_blue-clouds-png.png");
		console.log("Let's Play! You Have Made A Cloud.");

	}


    if(keyPressed == '83') 
	{
		block_x = 10;
		new_image("https://pngimg.com/uploads/sun/sun_PNG13410.png");
		console.log("Let's Play! You Have Made The Sun.");

	}

if(keyPressed == '71') 
	{
		block_x = 10;
		new_image("https://www.kindpng.com/picc/m/12-127575_green-grass-line-art-hd-png-download.png");
		console.log("Let's Play! You Have Made The Grass/Ground.");

	}

    if(keyPressed == '80') 
	{
		block_x = 10;
		new_image("https://www.mienegroup.com/assets/images/speaker/speakes1.png");
		console.log("Let's Play! You Have Made A Person.");

	}
	
    if(keyPressed == '65') 
	{
		block_x = 10;
		new_image("https://cdn.pixabay.com/photo/2018/08/08/09/31/fuchs-3591659_960_720.png");
		console.log("Let's Play! You Have Made The Fox.");

	}


    if(keyPressed == '72') 
	{
		block_x = 10;
		new_image("https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34224/house-home-clipart-md.png");
		console.log("Let's Play! You Have Made A House.");

	}


}



   
