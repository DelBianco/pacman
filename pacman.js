class Pacman {
    constructor(map,pos) {
        this.pos = map.vecFromPos(pos);
    }

    draw(){
        noStroke();
        fill(255,255,0);
        ellipse(map.inc*(this.pos.x+1/2), map.inc*(this.pos.y+1/2), map.inc*4/5);
    }
    update(){

    }
}