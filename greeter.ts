class WorldObject {
	_x: number = 0;
	_y: number = 0;	
	constructor(public x: number, public y: number) {
		this._x = x;
		this._y = y;
	}
}

class Box extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
	draw(c) {
		c.fillStyle("#ff0000").fillRect(this._x,this. _y, 32, 32).blur();
	}
	update() {
		this._y += 1;
	}
}

class Bullet extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
	draw(c) {
		c.fillStyle("#00ff00").fillRect(this._x,this. _y, 8, 4).blur();
	}
	update() {
		this._x += 1;
	}
}

// Create our scene
var box = new Box(10, 20);
var bullet = new Bullet(40, 50);

declare var cq: any;

// Simple game loop
cq(640,480)
	.onStep(function(delta, time) { 
		box.update();
		bullet.update();
	})
	.onRender(function(delta, time) { 
		this
			.clearRect(0,0,640,480)
			.fillStyle("#cccccc")
			.fillRect(0,0,640,480);
		box.draw(this);
		bullet.draw(this);
	})
	.appendTo("body");


