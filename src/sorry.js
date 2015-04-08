"use strict";

var SorryLayer = cc.Layer.extend({
    init: function() {
	this._super();

        var size = cc.winSize;

	this.title = new cc.Sprite(res.Sorry);
	this.title.attr({
	    x: size.width / 2,
	    y: size.height / 2
	});
	this.addChild(this.title);

	return true;
    }
});

var SorryScene = cc.Scene.extend({
    onEnter: function() {
	this._super();
	var layer = new SorryLayer();
	layer.init();

	this.addChild(layer);
    }
});
