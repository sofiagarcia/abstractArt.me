var nameInput, myCanvas, button, greeting;


function setup() {
	myCanvas = createCanvas(windowWidth, 500);
	myCanvas.parent(canvasContainer);
  background(50);

  greeting = createElement('h2', 'what is your name?');

  nameInput = createInput();

  button = createButton("Submit");
  button.mousePressed(generateArt);


}

var name, letters;
function generateArt(name) {
  name = nameInput.value();
  greeting.html('hello '+ name +'!');
  // nameInput.value('');

  for(var i = 0; i <= name.length; i++){
    letters = name.charCodeAt(i);
    console.log(letters);
    fill(random(255), 100, 200);
    rect(50+letters, random(letters), letters, 20);
  }



}


function draw() {
	// background(50);

}
