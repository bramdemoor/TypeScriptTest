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
    WorldObject.prototype.update = function () {
        console.log('update!');
    };
    return WorldObject;
})();
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb(x, y) {
        _super.call(this, x, y);
        this.x = x;
        this.y = y;
    }
    Bomb.prototype.draw = function (c) {
        c.fillStyle("#ff0000").fillRect(this._x, this._y, 32, 32).blur();
    };
    return Bomb;
})(WorldObject);
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(x, y) {
        _super.call(this, x, y);
        this.x = x;
        this.y = y;
    }
    return Bullet;
})(WorldObject);
var bomb = new Bomb(10, 20);
cq(640, 480).onStep(function (delta, time) {
    bomb.update();
}).onRender(function (delta, time) {
    this.clearRect(0, 0, 640, 480).fillStyle("#cccccc").fillRect(0, 0, 640, 480);
    bomb.draw(this);
}).appendTo("body");
