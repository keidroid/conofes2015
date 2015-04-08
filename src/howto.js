"use strict";

var HowtoLayer = cc.Layer.extend({
    init: function() {
        var size = cc.winSize;

	this.back = new cc.Sprite(res.HowTo);
	this.back.attr({
	    x: size.width / 2,
	    y: size.height / 2
	});
	this.addChild(this.back, 0);

	var label = cc.LabelTTF.create("画面をタップすると進みます", "Arial", "32");
        label.setPosition(1000, 50);
        this.addChild(label);

        var self = this;
        this.scheduleOnce(function() {
            var touch = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                onTouchesBegan: function() {
		    cc.audioEngine.playEffect(res.StartSound);

		    var transition = cc.TransitionCrossFade.create(1.0, new LiveScene());
		    cc.director.runScene(transition);
                }
            });
            cc.eventManager.addListener(touch, self);
        }, 1.0);
    }
});

var HowtoScene = cc.Scene.extend({
    onEnter: function() {

	this._super();
	var layer = new HowtoLayer();
	layer.init();

	this.addChild(layer);
    }
});
