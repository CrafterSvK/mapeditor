class Menu {
    constructor(canvas, type, x = 0, y = 0) {
        this.canvas = canvas;
        this.type = type;
        this.x = x;
        this.y = y;

        this.width = 0;
        this.height = 0;

        this.sizeX = 0;
        this.sizeY = 0;
    }

    update() {
        if (this.type === 'RIGHT') {
            this.x = 3 * canvas.width / 4;
            this.y = 0;

            this.width = canvas.width / 4;
            this.height = canvas.height;

            translate(this.x, this.y);

            fill(51);
            rect(0, 0, this.width, this.height);

            translate(-this.x, -this.y);
        } else if (this.type === 'CONTEXT' && this.showed === true) {
            this.width = canvas.width / 8;
            this.height = canvas.height / 3;

            fill(51);
            rect(this.x, this.y, this.width, this.height);
        }
    }

    show() {
        if (this.showed === true) {
            this.showed = false;
            return;
        }

        if (this.type === 'CONTEXT') {
            this.x = mouseX;
            this.y = mouseY;

            this.showed = true;
        }
    }

    inFocus() {
        let value = false;

        let relMouseX = mouseX - this.x;
        let relMouseY = mouseY - this.y;

        if (
            (relMouseX <= this.width && relMouseX >= 0) &&
            (relMouseY <= this.height &&
            relMouseY >= 0)
        ) {
            value = true;
        } else {
            value = false;
        }

        return value;
    }
}
