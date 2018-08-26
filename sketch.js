let canvas, menu, items = new Array(), objects = new Array();
let pointer = null;

function setup() {
    canvas = createCanvas(1280, 720);

    background('#D3D3D3');

    menu = new Menu(canvas, 'RIGHT');
    rightClickMenu = new Menu(canvas, 'CONTEXT')

    items[0] = new MenuItem(menu, 'Pridať budovu', budova);

    items[1] = new MenuItem(rightClickMenu, 'Editovať budovu', edit_building);
    items[1].textSize = 16;

    document.querySelector('#defaultCanvas0')
        .addEventListener('contextmenu', (event) => {
            event.preventDefault();
            rightClickMenu.show();
        });
}

function draw() {
    background('#D3D3D3');
    document.body.style.cursor = 'default';

    rightClickMenu.update();

    menu.update();
    for (let item of items) {
        if (item.menu === rightClickMenu && rightClickMenu.showed === false) {
            item.hide = true;
        } else {
            item.hide = false;
        }

        item.update();
    }

    for (let object of objects) {
        object.update();
    }

    if (pointer != null) {
        pointer.update();
    }


    //console.log(mouseX + ", " + mouseY);
}

function mouseClicked() {
    if (pointer != null) {
        pointer.status = 'placed';
        objects.push(pointer);
        pointer = null;
    }

    for (let item of items) {
        if (item.inFocus()) {
            item.callback();
        }
    }
}

function budova() {
    pointer = new Budova();
}

function edit_building() {

}
/*let canvas, menu, menuitem = new Array();
let width = 800, height = 600;

function setup() {
    canvas = createCanvas(width + 1, height + 1);
    background(255);

    stroke(0);
    strokeWeight(1);
    rect(0, 0, width, height);
    fill(255);
    strokeWeight(0);

    menu = new Menu();
    window.addEventListener("scroll", menu.scroll);
    document.querySelector('#defaultCanvas0')
        .addEventListener('contextmenu', (event) => {
            event-.preventDefault();
        });
    menuitem[0] = new MenuItem(menu, 0, 'Item 1');
    menuitem[1] = new MenuItem(menu, 1, 'Item 2');
}

function draw() {
    menuitem[0].display();
    menuitem[1].display();
}

function mouseWheel() {
    menu.scroll();
}

function mouseClicked() {
    for (let item of menuitem) {
        item.focus = item.inScope() ? true : false;
    }
}

class Menu {
    constructor() {
        this.width = 200;
        this.height = 0;

        fill(51);

        strokeWeight(1);
        rect(width - this.width, 0, this.width, height);
        strokeWeight(0);
    }

    inScope() {
        if ((mouseX >= width - this.width && mouseX <= width) &&
            (mouseY >= this.height && mouseY <= height)) {

            return true;
        } else {
            return false;
        }
    }

    scroll() {
        if (this.inScope()) {
            console.log(mouseX + " " + mouseY);
        }
    }
}

class MenuItem {
    constructor(menu, offset, text) {
        this.menu = menu;
        this.offset = offset + 1;
        this.text = text;
        this.focus = false;

        this.width = width - menu.width;
        this.height = menu.height + 1 + (offset * 25);

        this.display();
    }

    display() {
        let color = 0;

        if (this.inScope() === true) {
            color = 255;
        } else if (this.focus === true) {
            color = 'green'
        } else {
            color = 0;
        }

        fill(color);
        rect(this.width, this.height, menu.width, 25);

        textSize(22);

        fill(this.inScope() ? 0 : 255);
        text(this.text, this.width + 70, this.height + 20);
    }

    inScope() {
        if ((mouseX >= this.width && mouseX <= this.width + menu.width) &&
            (mouseY >= this.height &&
             mouseY <= this.height + (this.offset * 25))) {

            return true;
        } else {
            return false;
        }
    }
}*/
