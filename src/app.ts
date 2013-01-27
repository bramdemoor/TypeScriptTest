///<reference path='gameworld.ts'/>
///<reference path='worldobject.ts'/>
///<reference path='bullet.ts'/>
///<reference path='box.ts'/>
declare var cq: any;

var myWorld = new GameWorld();

cq(myWorld._width, myWorld._height)
	.onStep(function(delta, time) { 
		myWorld.update(delta, time);		
	})
	.onRender(function(delta, time) { 
		myWorld.draw(this, delta, time);			
	})
	.appendTo("body");