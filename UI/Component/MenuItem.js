class MenuItem {
    constructor(menu, text, callback) {
        this.menu = menu;
        this.text = text;
        this.callback =
            typeof callback === 'undefined' ? this.default : callback;

        this.position = 0;
        this.textSize = 28;
        this.hide = false;
    }

    update() {
        if (this.hide !== true) {
            translate(this.menu.x, this.menu.y);
            let stroke = 1;

            this.width = this.menu.width - 3 * stroke;
            this.height = this.menu.height / 15;

            strokeWeight(stroke);
            fill(this.inFocus() ? 255 : 0);
            rect(
                stroke,
                (this.height * this.position) + stroke,
                this.width,
                this.height - stroke
            );

            fill(this.inFocus() ? 0 : 255);
            textAlign(CENTER);
            textSize(this.textSize);
            text(this.text,
                 this.menu.width / 2,
                 (this.height * (this.position + 1)) - this.height / 3
             );
            strokeWeight(0);

            if (this.inFocus()) {
                document.body.style.cursor = 'pointer';
            }

            translate(-this.menu.x, -this.menu.y);
        }
    }

    default() {
        console.log("Called: ");
        console.log(this);
    }

    inFocus() {
        let value = false;

        let relMouseX = mouseX - this.menu.x;
        let relMouseY = mouseY - this.menu.y;

        if (
            (relMouseX <= this.width && relMouseX >= 0) &&
            (relMouseY <= this.height * (this.position + 1) &&
            relMouseY >= this.height * this.position)
        ) {
            value = true;
        } else {
            value = false;
        }

        return value;
    }
}
