"use strict";

var ResultLayer = cc.Layer.extend({
    init: function(score) {
	this._super();

        var size = cc.winSize;

	this.back = new cc.Sprite(res.ResultSchool);
	this.back.attr({
	    x: size.width / 2,
	    y: size.height / 2
	});
	this.addChild(this.back, 0);

	this.conoha = new cc.Sprite(res.ResultConoha);
	this.conoha.attr({
	    x: 1400,
	    y: size.height / 2
	});

	var act1 = cc.MoveTo.create(0.2, cc.p(1050, size.height / 2));
	var act2 = cc.MoveTo.create(0.2, cc.p(1100, size.height / 2));
	var act3 = cc.MoveTo.create(0.2, cc.p(1050, size.height / 2));

	this.conoha.runAction(cc.Sequence.create(act1, act2, act3), 1);
	this.addChild(this.conoha, 0);

	// score
	var resultLabel;
        resultLabel = cc.LabelTTF.create(score.total, "Arial", "64");
	//resultLabel.color = cc.color(255, 89, 245);
        resultLabel.setPosition(cc.p(820, 490));
        this.addChild(resultLabel);

        // hiscore
        var hiscore = parseInt(localStorage.getItem("cocos/hiscore"));
        if(score > hiscore) {
            hiscore = score;
            localStorage.setItem("cocos/hiscore", hiscore);
        }
        hiscore = score.total; /////////////////////////
        var hiscoreLabel = cc.LabelTTF.create(hiscore, "Arial", "32");
        hiscoreLabel.setPosition(cc.p(820, 415));
        this.addChild(hiscoreLabel);


        resultLabel = cc.LabelTTF.create(score.perfect, "Arial", "48");
        resultLabel.setPosition(cc.p(380, 230));
        this.addChild(resultLabel);

        resultLabel = cc.LabelTTF.create(score.good, "Arial", "48");
        resultLabel.setPosition(cc.p(630, 230));
        this.addChild(resultLabel);

        resultLabel = cc.LabelTTF.create(score.miss, "Arial", "48");
        resultLabel.setPosition(cc.p(850, 230));
        this.addChild(resultLabel);

        resultLabel = cc.LabelTTF.create("画面をタップ(クリック)するとタイトルに戻ります", "Arial", "20");
	resultLabel.color = cc.color(192, 188, 128);
        resultLabel.setPosition(cc.p(size.width / 2, 80));
        this.addChild(resultLabel);

        var self = this;
        this.scheduleOnce(function() {
            var touch = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                onTouchesBegan: function() {
		    cc.audioEngine.playEffect(res.StartSound);

		    var transition = cc.TransitionCrossFade.create(1.0, new TitleScene());
		    cc.director.runScene(transition);
                }
            });
            cc.eventManager.addListener(touch, self);
        }, 1.0);

	return true;
    }
});

var ResultScene = cc.Scene.extend({

    score: {
	"total": 0,
	"perfect": 0,
	"good": 0,
	"miss": 0
    },

    onEnter: function() {
	this._super();
	var layer = new ResultLayer();
	layer.init(this.score);

	this.addChild(layer);
    }
});
