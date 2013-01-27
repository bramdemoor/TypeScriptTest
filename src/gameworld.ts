class GameWorld {
	_width = 640;
	_height = 640;
	_objects: WorldObject[];
	
	constructor() {
		this.start();
	}
	
	start() {
		this._objects = [ new Box(10, 20), new Bullet(40, 50) ];
	}
	update(delta, time) {
		for (var i in this._objects) {
			this._objects[i].update(delta, time);            
        }		
	}
	draw(c, delta, time) {
		c.save().clear("#220033");
		for (var i in this._objects) {
			this._objects[i].draw(c, delta, time);            
        }
	}	
}