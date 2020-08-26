class Form{
    constructor(){
        this.input=createInput('Name');
        this.input2=createInput("vb");
        this.button=createButton("Let's Start");
        this.title=createElement("h1");
        this.greeting=createElement("h2");
        this.greeting2=createElement("h2");
        this.greeting3=createElement("h2");
        //this.image = loadImage("../gkimage.jpg");
    }
    
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
       
        this.title.hide();
    }
    
      display(){
        //background(formBg);
        this.title.html("Deal Or No Deal");
        this.title.position(displayWidth/2 - 90, 0);
       // this.title.style('color','lightgreen');
        this.input.position(displayWidth/2 - 60 , displayHeight/2 - 80);
        this.input2.position(displayWidth/2 - 80 , displayHeight/2 - 100);
        this.button.position(displayWidth/2 + 10, displayHeight/2);
        //image(this.image,displayWidth/4-50,displayHeight/4+50,200,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
           var playerName = this.input.value();
            this.greeting.html("Hello " + playerName )
            this.greeting.position(displayWidth/2 - 80, displayHeight/4);
            this.greeting2.html( "Your Game Starts in Few Seconds" )
            this.greeting2.position(displayWidth/2 - 170, displayHeight/4+65);
            this.greeting3.html( "Till Then Rack Your Brains to be Victorious" )
            this.greeting3.position(displayWidth/2 - 170, displayHeight/4+95);
        });
      }
}