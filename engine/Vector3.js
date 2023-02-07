var x, y, z;
var Vector3 = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}
var Vector3 = function() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
}
Vector3.prototype.add = function(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
}
Vector3.prototype.sub = function(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
}
Vector3.prototype.mul = function(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
}
Vector3.prototype.div = function(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
}
Vector3.prototype.normalize = function() {
    var length = this.length();
    this.x /= length;
    this.y /= length;
    this.z /= length;
}
Vector3.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
}
Vector3.prototype.dot = function(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
}
Vector3.prototype.cross = function(v) {
    return new Vector3(
        this.y * v.z - this.z * v.y,
        this.z * v.x - this.x * v.z,
        this.x * v.y - this.y * v.x
    );
}
Vector3.prototype.distance = function(v) {
    var dx = this.x - v.x;
    var dy = this.y - v.y;
    var dz = this.z - v.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
Vector3.prototype.clone = function() {
    return new Vector3(this.x, this.y, this.z);
}
Vector3.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
}
Vector3.prototype.set = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}