let map;
let pacman;

function setup() {
    map = new Map(560, 640);
    pacman = new Pacman(map,58);
}

function draw() {
    map.draw();
    pacman.draw();

}

