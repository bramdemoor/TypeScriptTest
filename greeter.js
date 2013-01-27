var WorldObject = (function () {
    function WorldObject() { }
    WorldObject.prototype.update = function () {
        console.log('update!');
    };
    return WorldObject;
})();
var thing = new WorldObject();
thing.update();
thing.update();
thing.update();
