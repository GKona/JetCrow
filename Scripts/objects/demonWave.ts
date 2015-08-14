module objects {
    // DemonWave Class + + + + +
    export class DemonWave extends objects.GameObject {
        // Constructor + + + + +
        constructor(imageString: string) {
            super(imageString);
            this.name = "demonWave";
            this.sound = "damage";
            this.reset();
            this.moveCntr = 0;
            this.moveDir= false;
        }
        // Public Methods + + + + +
        public moveUp() {
            if (this.dy < 0) {
                this.dy = this.dy * 1;
                this.y -= this.dy; // moves the enemy up
                this.moveCntr++;
            }
            if (this.dy > 0) {
                this.y -= this.dy; // moves the enemy up
                this.moveCntr++;
            }
        }
        public moveDown() {
            if (this.dy > 0) {
                this.dy = this.dy * 1;
                this.y += this.dy; // moves the enemy down
                this.moveCntr--;
            }
            if (this.dy < 0) {
                this.y += this.dy; // moves the enemy down
                this.moveCntr--;
            }
        }
        public reset(): void {
            this.y = Math.floor(Math.random() * 510) + 20; // starts enemy at random location
            this.x = Math.floor(Math.random() * 300) + 1050; // starts enemy off stage
            // reruns if 0 value
            do { this.dx = Math.floor(Math.random() * 2) + 8 }
            while (this.dx == 0);
            // reruns if 0 value
            do { this.dy = Math.floor(Math.random() * 4) - 2 }
            while (this.dy == 0);
        }
        public update(): void {          
            this.x -= this.dx; // moves the enemy left through the stage
            // resets directional move counter
            if (this.moveCntr < -50) {
                this.moveCntr = 0;
                this.moveDir = true;
            }
            // resets directional move counter
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
        }
    }
} 