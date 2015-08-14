var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // GameObject Class + + + + +
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // Constructor + + + + +
        function GameObject(imageString) {
            _super.call(this, assets.atlas, imageString);
            this.isColliding = false;
            this.sound = "";
            this.sound2 = "";
            this.name = "";
            this.moveCntr = 0;
            this.moveDir = false;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map