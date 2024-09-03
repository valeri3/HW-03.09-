function Point(x, y) {
    this.x = x;
    this.y = y;
    this.print = function() {
        console.log(`X = ${this.x}, Y = ${this.y}`);
    };
}

function isLineParallel(point1, point2) {
    if (point1.x === point2.x) {
        return "Прямая параллельна оси Y";
    } else if (point1.y === point2.y) {
        return "Прямая параллельна оси X";
    } else {
        return "Прямая не параллельна осям координат";
    }
}

exports.Point = Point;
exports.isLineParallel = isLineParallel;
