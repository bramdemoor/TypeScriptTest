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
	draw(c) {
		c.fillStyle("#ff0000").fillRect(this._x,this. _y, 32, 32);
	}
	update() {
		this._y += 1;
	}
}

class Bullet extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
	draw(c) {
		c.fillStyle("#00ff00").fillRect(this._x,this. _y, 8, 4);
	}
	update() {
		this._x += 1;
	}
}

class CrossHair extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
	draw(c) {
		c.fillStyle("#0000ff").fillRect(this._x,this. _y, 16, 16);
	}
}

// Create our scene
var box = new Box(10, 20);
var bullet = new Bullet(40, 50);
var crosshair = new CrossHair(0, 0);

// Simple game loop
cq(640, 480)
	.onStep(function(delta, time) { 
		box.update();
		bullet.update();
	})
	.onMouseMove(function(x, y) {
		crosshair.move(x,y);		
	})	
	.onRender(function(delta, time) { 
		
		this.save().clear("#220033")			
		box.draw(this);
		bullet.draw(this);
		crosshair.draw(this);
	})
	.appendTo("body");


