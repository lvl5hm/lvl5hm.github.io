var oPlayer = new GameObject("oPlayer");
var o = oPlayer;

var rend = o.addModule(ModuleType.renderer);
var spr = Loader.loadSprite("js/game/resources/sprites/player.png", 32, 32);
rend.setSprite(spr, 16, 16);
var coll = o.addModule(ModuleType.boxCollider);
coll.offX = 16;
coll.offY = 16;

var emit = o.addModule(ModuleType.particleEmitter);

//behaviour
o.onInit = function() {
    let o = this;
    oUnit.onInit.call(this);

    o.acc = 0.25;

    o.emit = o.getModule(ModuleType.particleEmitter);
}

o.onUpdate = function() {
    let o = this;
    oUnit.onUpdate.call(this);
    o.emit.burst(10);
}