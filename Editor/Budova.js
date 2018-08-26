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

}
