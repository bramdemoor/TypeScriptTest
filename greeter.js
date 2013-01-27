var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var WorldObject = (function () {
    function WorldObject(x, y) {
        this.x = x;
        this.y = y;
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    WorldObject.prototype.move = function (x, y) {
        this._x = x;
        this._y = y;
    };
    return WorldObject;
})();
var Box = (function (_super) {
    __extends(Box, _super);
    function Box(x, y) {
        _super.call(this, x, y);
        this.x = x;
        this.y = y;
    }
    Box.prototype.draw = function (c) {
        c.fillStyle("#ff0000").fillRect(this._x, this._y, 32, 32);
    };
    Box.prototype.update = function () {
        this._y += 1;
    };
    return Box;
})(WorldObject);
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(x, y) {
        _super.call(this, x, y);
        this.x = x;
        this.y = y;
    }
    Bullet.prototype.draw = function (c) {
        c.fillStyle("#00ff00").fillRect(this._x, this._y, 8, 4);
    };
    Bullet.prototype.update = function () {
        this._x += 1;
    };
    return Bullet;
})(WorldObject);
var CrossHair = (function (_super) {
    __extends(CrossHair, _super);
    function CrossHair(x, y) {
        _super.call(this, x, y);
        this.x = x;
        this.y = y;
    }
    CrossHair.prototype.draw = function (c) {
        c.fillStyle("#0000ff").fillRect(this._x, this._y, 16, 16);
    };
    CrossHair.prototype.update = function () {
    };
    return CrossHair;
})(WorldObject);
var GameWorld = (function () {
    function GameWorld() {
        this._width = 640;
        this._height = 640;
        this.start();
    }
    GameWorld.prototype.start = function () {
        this._crosshair = new CrossHair(0, 0);
        this._objects = [
            new Box(10, 20), 
            new Bullet(40, 50), 
            this._crosshair
        ];
    };
    GameWorld.prototype.update = function () {
        for(var i in this._objects) {
            this._objects[i].update();
        }
    };
    GameWorld.prototype.mouseMove = function (x, y) {
        this._crosshair.move(x, y);
    };
    GameWorld.prototype.draw = function (c) {
        c.save().clear("#220033");
        for(var i in this._objects) {
            this._objects[i].draw(c);
        }
    };
    return GameWorld;
})();
var myWorld = new GameWorld();
cq(myWorld._width, myWorld._height).onStep(function (delta, time) {
    myWorld.update();
}).onMouseMove(function (x, y) {
    myWorld.mouseMove(x, y);
}).onRender(function (delta, time) {
    myWorld.draw(this);
}).appendTo("body");
