declare var cq: any;

class WorldObject {
	_x: number = 0;
	_y: number = 0;	
	constructor(public x: number, public y: number) {
		this._x = x;
		this._y = y;
	}
	move(x: number, y: number) {
		this._x = x;
		this._y = y;	
	}
}

class Box extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
	draw(c, delta, time) {
		c.fillStyle("#ff0000").fillRect(this._x,this. _y, 32, 32);
	}
	update(delta, time) {
		console.log(delta);
		console.log(time);
		this._y += (delta / 5);
	}
}

class Bullet extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
	draw(c, delta, time) {
		c.fillStyle("#00ff00").fillRect(this._x,this. _y, 8, 4);
	}
	update(delta, time) {
		this._x += (delta / 5);
	}
}

class CrossHair extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
	draw(c, delta, time) {
		c.fillStyle("#0000ff").fillRect(this._x,this. _y, 16, 16);
	}
	update(delta, time) {}
}

class GameWorld {
	_width = 640;
	_height = 640;
	_objects: WorldObject[];
	_crosshair: CrossHair;
	
	constructor() {
		this.start();
	}
	
	start() {
		this._crosshair = new CrossHair(0, 0);
		this._objects = [ new Box(10, 20), new Bullet(40, 50), this._crosshair ];
	}
	update(delta, time) {
		for (var i in this._objects) {
			this._objects[i].update(delta, time);            
        }		
	}
	mouseMove(x,y) {
		this._crosshair.move(x,y);
	}
	draw(c, delta, time) {
		c.save().clear("#220033");
		for (var i in this._objects) {
			this._objects[i].draw(c, delta, time);            
        }
	}	
}

var myWorld = new GameWorld();

cq(myWorld._width, myWorld._height)
	.onStep(function(delta, time) { 
		myWorld.update(delta, time);		
	})
	.onMouseMove(function(x, y) {
		myWorld.mouseMove(x,y);		
	})	
	.onRender(function(delta, time) { 
		myWorld.draw(this, delta, time);			
	})
	.appendTo("body");