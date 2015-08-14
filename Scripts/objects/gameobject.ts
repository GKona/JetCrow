﻿module objects {
    // GameObject Class + + + + +
    export class GameObject extends createjs.Sprite {
        // Public Properties + + + + +
        public width: number;
        public height: number;
        public isColliding: boolean = false;
        public sound: string = "";
        public sound2: string = "";
        public name: string = "";
        public moveCntr: number = 0;
        public moveDir: boolean = false;
        // Protected Properties + + + + +
        protected dy: number;
        protected dx: number;
        
        // Constructor + + + + +
        constructor(imageString: string) {
            super(assets.atlas, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
    }
} 