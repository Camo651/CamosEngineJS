var name;
var components = [];
var children = [];
var parent = null;
var transform = null;

function GameObject(name) {
    this.name = name;
    this.transform = new Transform();
}

