"use strict";

var NoticeLayer = cc.Layer.extend({
    init: function() {
        var size = cc.winSize;

	var label = cc.LabelTTF.create("このゲームは音声が再生されます。音量に注意してください。", "Arial", "32");
        label.setPosition(size.width / 2, (size.height / 2) + 100);
        this.addChild(label);

	var btn1 = cc.MenuItemImage.create(
	    res.Notice,
	    res.Notice,
	    this.menuSelect,
	    this);
	btn1.setTag("btn1");

	this.menu = cc.Menu.create(btn1);
	this.menu.setPosition(size.width / 2, (size.height / 2) - 100);
	this.addChild(this.menu);

	return true;
    },

    menuSelect: function(sender) {
	if(sender.getTag() == "btn1") {
	    cc.audioEngine.playEffect(res.StartSound);

            var transition = cc.TransitionFade.create(1.0, new TitleScene());
            cc.director.runScene(transition);
	}
    }
});

var NoticeScene = cc.Scene.extend({
    onEnter: function() {

	this._super();
	var layer = new NoticeLayer();
	layer.init();

	this.addChild(layer);
    }
});
