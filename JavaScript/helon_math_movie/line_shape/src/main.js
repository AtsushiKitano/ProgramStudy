class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        let tmp = this;
        return Vec2(tmp.x + v.x, tmp.y + v.y);
    }

    sub(v) {
        let tmp = this;
        return Vec(tmp.x - v.x, tmp.y - v.y);
    }

    copy() {
        return new Vec2(this.x, this.y);
    }

    mult(c) {
        return new Vec(c*this.x, c*this.y);
    }

    mag() {
        return sqrt(this.x**2 + this.y**2);
    }
}

class Ray2{
    constructor(pos,ang) {
        this.pos = pos
        this.ang = ang
    }

    get begin(){
        return this.pos;
    }

    get end() {
        return new Vec2(this.pos.x + this.ang.x, this.pos.y + this.ang.y);
    }

    intersection(line) {
        let line_org = this;
        let x1,x2,y1,y2,t1,t2,sx,sy;
        x1 = this.pos.x;
        y1 = this.pos.y;
        t1 = this.ang.y / this.ang.x;
        x2 = line.pos.x;
        y2 = line.pos.y;
        t2 = line.ang.y / line.ang.x;
        sx = (t1 * x1 - t2 * x2 - y1 + y2) / (t1 - t2);
        sy = t1 * ( sx - x1) + y1

        if(
            sx > min(line_org.begin.x, line_org.end.x)
                && sx < max(line_org.begin.x, line_org.end.x)
                && sx > min(line.begin.x, line.end.x)
                && sx < max(line.begin.x, line.end.x)
        ){
            return new Vec2(sx,sy);
        } else {
            return null
        }
    }
}

function setup() {
    createCanvas(300, 500);
    background('gray');
}

let start_point = new Vec2(0,0)

function mouseClicked(event) {
    setup()
    start_point.x = event.clientX
    start_point.y = event.clientY
}

let start_ang = new Vec2(0,0)

function draw() {
    stroke('yello');
    strokeWeight(10);
    point(start_point.x,start_point.y)

    l1 = new Ray2(start_point, start_ang)

    stroke('green');
    strokeWeight(1);
    line(l1.begin.x,l1.begin.y, l1.end.x,l1.end.y)
}

function mouseMoved() {
    start_ang.x = mouseX - start_point.x
    start_ang.y = mouseY - start_point.y
}
