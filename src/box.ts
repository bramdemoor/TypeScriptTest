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