class WorldObject {
	_x: number = 0;
	_y: number = 0;	
	constructor(public x: number, public y: number) {
		this._x = x;
		this._y = y;
	}
	public update() {
		console.log('update!');
	}
}

class Bomb extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
	draw(c) {
		c.fillStyle("#ff0000").fillRect(this._x,this. _y, 32, 32).blur()
	}
}

class Bullet extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
}

// Create our scene
var bomb = new Bomb(10, 20);

declare var cq: any;

// Simple game loop
cq(640,480)
	.onStep(function(delta, time) { 
		bomb.update();
	})
	.onRender(function(delta, time) { 
		this
			.clearRect(0,0,640,480)
			.fillStyle("#cccccc")
			.fillRect(0,0,640,480);
		bomb.draw(this);
	})
	.appendTo("body");


