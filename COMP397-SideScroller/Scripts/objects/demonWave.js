var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // DemonWave Class + + + + +
    var DemonWave = (function (_super) {
        __extends(DemonWave, _super);
        // Constructor + + + + +
        function DemonWave(imageString) {
            _super.call(this, imageString);
            this.name = "demonWave";
            this.sound = "damage";
            this.reset();
            this.moveCntr = 0;
            this.moveDir = false;
        }
        // Public Methods + + + + +
        DemonWave.prototype.moveUp = function () {
            if (this.dy < 0) {
                this.dy = this.dy * 1;
                this.y -= this.dy; // moves the enemy up
                this.moveCntr++;
            }
            if (this.dy > 0) {
                this.y -= this.dy; // moves the enemy up
                this.moveCntr++;
            }
        };
        DemonWave.prototype.moveDown = function () {
            if (this.dy > 0) {
                this.dy = this.dy * 1;
                this.y += this.dy; // moves the enemy down
                this.moveCntr--;
            }
            if (this.dy < 0) {
                this.y += this.dy; // moves the enemy down
                this.moveCntr--;
            }
        };
        DemonWave.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 510) + 20; // starts enemy at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts enemy off stage
            // reruns if 0 value
            do {
                this.dx = Math.floor(Math.random() * 2) + 8;
            } while (this.dx == 0);
            // reruns if 0 value
            do {
                this.dy = Math.floor(Math.random() * 4) - 2;
            } while (this.dy == 0);
        };
        DemonWave.prototype.update = function () {
            this.x -= this.dx; // moves the enemy left through the stage
            // resets directional move counter
            if (this.moveCntr < -50) {
                this.moveCntr = 0;
                this.moveDir = true;
            }
            else if (this.moveCntr > 50) {
                this.moveCntr = 0;
                this.moveDir = false;
            }
            if (this.moveDir) {
                this.moveUp();
            }
            else if (!this.moveDir) {
                this.moveDown();
            }
            // check and reset if enemy has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        return DemonWave;
    })(objects.GameObject);
    objects.DemonWave = DemonWave;
})(objects || (objects = {}));
//# sourceMappingURL=demonWave.js.map