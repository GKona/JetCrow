var managers;
(function (managers) {
    var Collision = (function () {
        function Collision(jetCrow, gold, pirate, demonDiags, demonStrts, demonWaves, scoreboard, game, bullets) {
            this.demonS = [];
            this.demonD = [];
            this.demonW = [];
            this.bullets = [];
            this.jetCrow = jetCrow;
            this.gold = gold;
            this.demonD = demonDiags;
            this.demonS = demonStrts;
            this.demonW = demonWaves;
            this.bullets = bullets;
            this.scoreboard = scoreboard;
            this.game = game;
        }
        // crow & demonStrt collision
        Collision.prototype.crowAndDemon1 = function (demon) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.35 + (demon.height * 0.35))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    scoreboard.lives--;
                    scoreboard.mult = 1;
                    scoreboard.multCnt = 0;
                    ;
                    demon.reset();
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        };
        // crow & demonDiag collision
        Collision.prototype.crowAndDemon2 = function (demon) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.35 + (demon.height * 0.35))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    scoreboard.lives--;
                    scoreboard.mult = 1;
                    scoreboard.multCnt = 0;
                    ;
                    demon.reset();
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        };
        // crow & demonWave collision
        Collision.prototype.crowAndDemon3 = function (demon) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.35 + (demon.height * 0.35))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    scoreboard.lives--;
                    scoreboard.mult = 1;
                    scoreboard.multCnt = 0;
                    ;
                    demon.reset();
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        };
        // bullet & demonStrt collision
        Collision.prototype.bulletAndDemon1 = function (bullet, demon) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((bullet.height) * 0.5 + (demon.height * 0.5))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    demon.reset();
                    scoreboard.score += 10 * scoreboard.mult;
                    scoreboard.multCnt++;
                    bulletM.destroyBullet(bullet);
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        };
        // bullet & demonDiag collision
        Collision.prototype.bulletAndDemon2 = function (bullet, demon) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((bullet.height) * 0.5 + (demon.height * 0.5))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    demon.reset();
                    scoreboard.score += 10 * scoreboard.mult;
                    scoreboard.multCnt++;
                    bulletM.destroyBullet(bullet);
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        };
        // bullet & demonWave collision
        Collision.prototype.bulletAndDemon3 = function (bullet, demon) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = demon.x;
            p2.y = demon.y;
            if (utility.distance(p1, p2) < ((bullet.height) * 0.5 + (demon.height * 0.5))) {
                if (!demon.isColliding) {
                    createjs.Sound.play(demon.sound);
                    var explosion = new objects.Explosion(game);
                    explosion.x = demon.x;
                    explosion.y = demon.y;
                    explosion.on("animationend", function (e) { explosion.remove(); });
                    demon.reset();
                    scoreboard.score += 10 * scoreboard.mult;
                    scoreboard.multCnt++;
                    bulletM.destroyBullet(bullet);
                }
                demon.isColliding = true;
            }
            else {
                demon.isColliding = false;
            }
        };
        // crow & gold collision
        Collision.prototype.crowAndGold = function (gameObject) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.4 + (gameObject.height * 0.4))) {
                if (!gameObject.isColliding) {
                    createjs.Sound.play(gameObject.sound);
                    scoreboard.score += 50;
                    gold.reset();
                    scoreboard.cnt++;
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        // crow & pirateCoin collision
        Collision.prototype.crowAndPirate = function (gameObject) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
            p1.x = jetCrow.x;
            p1.y = jetCrow.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((jetCrow.height) * 0.4 + (gameObject.height * 0.4))) {
                if (!gameObject.isColliding) {
                    createjs.Sound.play(gameObject.sound);
                    if (scoreboard.score > 99) {
                        scoreboard.score -= 100;
                    }
                    if (scoreboard.score < 100) {
                        scoreboard.score = 0;
                    }
                    pirate.reset();
                    scoreboard.cnt = 0;
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        Collision.prototype.update = function () {
            this.crowAndGold(gold);
            this.crowAndPirate(pirate);
            // play state 1 collisions
            var len = this.bullets.length;
            if (currentState == constants.PLAY1_STATE) {
                for (var count = 0; count < constants.CLOUD_NUM; count++) {
                    this.crowAndDemon1(this.demonS[count]);
                }
                for (var count = 0; count < len; count++) {
                    for (var countd = 0; countd < constants.CLOUD_NUM; countd++) {
                        this.bulletAndDemon1(this.bullets[count], this.demonS[countd]);
                    }
                }
            }
            else if (currentState == constants.PLAY2_STATE) {
                for (var count = 0; count < constants.CLOUD_NUM; count++) {
                    this.crowAndDemon2(this.demonD[count]);
                }
                for (var count = 0; count < len; count++) {
                    for (var countd = 0; countd < constants.CLOUD_NUM; countd++) {
                        this.bulletAndDemon2(this.bullets[count], this.demonD[countd]);
                    }
                }
            }
            else if (currentState == constants.PLAY3_STATE) {
                for (var count = 0; count < constants.CLOUD_NUM; count++) {
                    this.crowAndDemon3(this.demonW[count]);
                }
                for (var count = 0; count < len; count++) {
                    for (var countd = 0; countd < constants.CLOUD_NUM; countd++) {
                        this.bulletAndDemon3(this.bullets[count], this.demonW[countd]);
                    }
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map