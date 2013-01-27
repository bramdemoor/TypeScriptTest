interface Updatable {   
   update(): void;     
}

class WorldObject implements Updatable {
	public update() {
		console.log('update!');
	}
}

var thing = new WorldObject();
thing.update();
thing.update();
thing.update();