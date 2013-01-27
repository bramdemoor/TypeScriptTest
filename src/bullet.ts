class Bullet extends WorldObject {
	constructor(public x: number, public y: number) { super(x,y); }
	draw(c, delta, time) {
		c.fillStyle("#00ff00").fillRect(this._x,this. _y, 8, 4);
	}
	update(delta, time) {
		this._x += (delta / 5);
	}
}