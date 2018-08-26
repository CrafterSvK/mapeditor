// TODO: optimize code add more recursion. Abstract class for objects and extensions


let canvas, menu, items = new Array(), objects = new Array();
let pointer = null;
let lastKey = null, lastItem = null;
let editMode;

function setup() {
    canvas = createCanvas(1280, 720);
    background('#D3D3D3');

    menu = new Menu(canvas, 'RIGHT');
    rightClickMenu = new Menu(canvas, 'CONTEXT')

    items[0] = new MenuItem(menu, 'Pridať budovu', budova);
    items[1] = new MenuItem(menu, '<- Undo', undo);
    items[1].position = 1;
    items[2] = new MenuItem(menu, 'Redo ->', redo);
    items[2].position = 2;
    items[3] = new MenuItem(menu, 'Resetovať plochu', reset);
    items[3].position = 3;

    items[4] = new MenuItem(rightClickMenu, 'Editovať budovu', edit_building);
    items[4].textSize = 16;

    document.querySelector('#defaultCanvas0')
        .addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
}

function draw() {
    background('#D3D3D3');
    document.body.style.cursor = 'default';

    for (let object of objects) {
        object.update();
    }

    if (pointer != null) {
        pointer.update();
    }

    menu.update();
    rightClickMenu.update();
    for (let item of items) {
        if (item.menu === rightClickMenu && rightClickMenu.showed === false) {
            item.hide = true;
        } else {
            item.hide = false;
        }

        item.update();
    }
}

function mousePressed() {
    if (mouseButton === LEFT) {
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

        if (rightClickMenu.showed === true &&
            rightClickMenu.inFocus() !== true) {

            rightClickMenu.showed = false;
        }
    } else if (mouseButton === RIGHT) {
        for (let object of objects) {
            if (object.inFocus() === true) {
                rightClickMenu.show();
            }
        }
    }
}

// TODO: implement mouseResizing algorithm
function mouseClicked() {
    if (editMode === true) {
        for (let objects of objects) {
            if (object.inFocus === true) {
                let x = object.x - object.width / 2;
                let y = object.y - object.height / 2;
            }
        }

        rect(x, y, 10, 10);
        fill('red');
     }
}

function mouseReleased() {

}

function keyPressed() {
    if (lastKey === 17 && keyCode === 90) {
        undo();
    } else if (lastKey === 17 && keyCode === 89) {
        redo();
    }

    lastKey = keyCode;
}

function budova() {
    pointer = new Budova();
}

function reset() {
    objects = new Array();
}

function undo() {
    if (objects !== null) {
        lastItem = objects[objects.length - 1];
        objects.pop();
    }
}

function redo() {
    if (lastItem != null && objects.length >= 0) {
        objects.push(lastItem);
        lastItem = null;
    }
}

function edit_building() {
    editMode = true;
    rightClickMenu.showed = false;
}
