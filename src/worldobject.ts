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