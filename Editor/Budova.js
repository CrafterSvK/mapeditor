class Budova {
    constructor() {
        this.x = 0;
        this.y = 0;

        this.width = 100;
        this.height = 100;
        this.status = '';
    }

    update() {
        if (this.status !== 'placed') {
            this.x = mouseX;
            this.y = mouseY;

            rectMode(CENTER);
            fill(255);
            strokeWeight(1);

            rect(this.x, this.y, this.width, this.height);
            rectMode(CORNER);
        } else {
            rectMode(CENTER);
            fill(255);
            strokeWeight(1);

            rect(this.x, this.y, this.width, this.height);
            rectMode(CORNER);
        }
    }

    place() {
        objects.push(this);
    }

    inFocus() {
        let value = false;

        let relMouseX = mouseX - (this.x - this.width / 2);
        let relMouseY = mouseY - (this.y - this.height / 2);

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
