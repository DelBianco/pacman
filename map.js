class Map {

    constructor(largura,altura) {
        this.h = altura; this.w = largura;
        this.inc = 20; this.wp = this.w/this.inc; this.hp =  this.h/this.inc;
        this.walls  = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,41,69,97,125,153,181,209,237,265,293,321,320,319,318,317,316,315,314,313,312,311,310,309,308,280,252,224,196,168,140,112,84,56,28];
        this.points = [29,30,31,32,33,34,35,36,37,38,39,40,57,85,113,141,169,197,225,253,281,282,283,284,285,286,287,288,289,290,291,292,264,236,208,180,152,124,96,68]
    }

    draw(){
        createCanvas(this.w,this.h);
        background(33);

        this.grid({'numbers':false});
        // MAP
        noStroke();
        for(let i = 0; i<this.points.length; i++){
            this.point(this.points[i]);
        }
        for(let i = 0; i<this.walls.length; i++){
            this.block(this.walls[i]);
        }

    }

    point(i){
        let v = this.vecFromPos(i);
        ellipse(this.inc*(v.x+1/2), this.inc*(v.y+1/2), this.inc/3);
    }

    grid(options){
        let i=0;
        stroke(100);
        while( i < this.h ){
            i = i+this.inc;
            line(0,i,this.w,i);
            if(i < this.w){
                line(i,0,i,this.h)
            }
        }
        if(options.numbers){
            let v;
            // numerando o grid
            textSize(7);
            fill(255, 255, 255);
            textAlign(CENTER,CENTER);
            for(let i=0; i < this.wp * this.hp ; i++){
                v = this.vecFromPos(i);
                text(i, (1/2 + v.x)*this.inc , (1/2 + v.y)*this.inc);
            }
        }
    }

    vecFromPos(i){
        return createVector(parseInt(i%this.wp),parseInt(i/this.wp))
    }

    block(i){
        let v = this.vecFromPos(i);
        strokeWeight(this.inc*3/4);
        fill(20, 120, 200);
        rect(this.inc*v.x,this.inc*v.y,this.inc,this.inc);
    }
}