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
        c.fillStyle("#ff0000").fillRect(this._x, this._y, 32, 32).blur();
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
        c.fillStyle("#00ff00").fillRect(this._x, this._y, 8, 4).blur();
    };
    Bullet.prototype.update = function () {
        this._x += 1;
    };
    return Bullet;
})(WorldObject);
var box = new Box(10, 20);
var bullet = new Bullet(40, 50);
cq(640, 480).onStep(function (delta, time) {
    box.update();
    bullet.update();
}).onRender(function (delta, time) {
    this.clearRect(0, 0, 640, 480).fillStyle("#cccccc").fillRect(0, 0, 640, 480);
    box.draw(this);
    bullet.draw(this);
}).appendTo("body");
