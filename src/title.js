"use strict";

var TitleLayer = cc.Layer.extend({
    init: function() {
	this._super();

        var size = cc.winSize;

	this.title = new cc.Sprite(res.Title_png);
	this.title.attr({
	    x: size.width / 2,
	    y: size.height / 2
	});
	this.addChild(this.title, 0);

	var btn1 = cc.MenuItemImage.create(
	    res.StartBtn,
	    res.StartBtn,
	    this.menuSelect,
	    this);
	btn1.setTag("btn1");

	this.menu = cc.Menu.create(btn1);
	this.menu.setPosition(900, 200);
	this.addChild(this.menu);

	var self = this;
	this.scheduleOnce(function() {
	    cc.audioEngine.setMusicVolume(0.5);
	    cc.audioEngine.playMusic(res.Opening, true);
	}, 1.0);

	return true;
    },

    menuSelect: function(sender) {
	if(sender.getTag() == "btn1") {
	    cc.audioEngine.stopMusic();
	    cc.audioEngine.playEffect(res.StartSound);

            var transition = cc.TransitionFade.create(2.0, new HowtoScene());
            cc.director.runScene(transition);
	}
    }

});

var TitleScene = cc.Scene.extend({
    onEnter: function() {
	this._super();
	var layer = new TitleLayer();
	layer.init();

	this.addChild(layer);
    }
});
