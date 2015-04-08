"use strict";

var Tone = cc.Sprite.extend({
    ctor: function(filename, rect) {
	this._super(filename, rect);
	this.setAnchorPoint(cc.p(0.5, 0.5));

	var act1 = cc.ScaleTo.create(1, 1.25);
	var act2 = cc.ScaleTo.create(0.2, 1);

	this.runAction(cc.Repeat.create(cc.Sequence.create(act1, act2), Math.pow(2, 30)));

	return true;
    }
});

var _ctone_counter = 0;
var Ctone = cc.Sprite.extend({
    i: 0,
    ctor: function(filename, rect) {
	this._super(filename, rect);
	this.setAnchorPoint(cc.p(0.5, 0.5));

	var act1 = cc.ScaleTo.create(1.5, 2 - _ctone_counter * 0.3);
	var act2 = cc.FadeOut.create(1.5);
	var act3 = cc.ScaleTo.create(0, 0.7 - _ctone_counter * 0.3);

	var act4 = cc.FadeTo.create(0, 255);
	var f    = cc.Spawn.create(act1, act2);
	var reset = cc.Spawn.create(act3, act4);
	this.runAction(cc.Repeat.create(cc.Sequence.create(reset, f), Math.pow(2, 30)));

	_ctone_counter++;
    }
});

var MascotIcon = cc.Sprite.extend({
    ctor: function(filename, rect) {
	this._super(filename, rect);
	this.setAnchorPoint(cc.p(0.5, 0.5));
    }
});

var Ctime = cc.Sprite.extend({
    hitted: false,

    ctor: function(filename, rect) {
	this._super(filename, rect);
	this.setAnchorPoint(cc.p(0.5, 0.5));
	this.setScale(0.2);
    },

    moveToMascot: function(icon, tone) {
	var tpos = tone.getPosition();
	var pos = icon.getPosition();
	var scale_to = 0;
	var speed = 1;

	scale_to = 1.2;
	speed = 1.5;

	var act1 = cc.MoveTo.create(speed, pos);
	var act2 = cc.ScaleTo.create(speed, scale_to);
	var aa   = cc.Spawn.create(act1, act2);
	var act3 = cc.FadeOut.create(0.2);

	this.runAction(cc.Sequence.create(aa, act3, cc.callFunc(this.complete, this)));
    },

    complete: function(t) {
	var parent = t.parent;
	parent.removeChild(t);

	for(var i = 0; i < parent.ctimes.length; i++) {
	    if(parent.ctimes[i].__instanceId == t.__instanceId) {
		parent.ctimes.splice(i, 1);
		break;
	    }
	}
    }
});

var CtimeCollection = {
    items: [],

    push: function(ctime) {
	this.items.push(ctime);
    },

    length: function() {
	return this.items.length;
    },

    remove: function(tag) {

    }

};


var Star1 = cc.Sprite.extend({
    ctor: function(filename, rect) {
	this._super(filename, rect);
	this.setAnchorPoint(cc.p(0.5, 0.5));
	this.setOpacity(180);

	var act1 = cc.ScaleTo.create(0.8, 2.5);
	var act2 = cc.FadeOut.create(0.4);
	this.runAction(cc.Spawn.create(act1, act2));
    }
});


var Hit = cc.Sprite.extend({
    ctor: function(filename, rect) {
	this._super(filename, rect);
	this.setAnchorPoint(cc.p(0.5, 0.5));
	//this.setOpacity(180);

	var act1 = cc.ScaleTo.create(0.4, 1.2);
	var act2 = cc.FadeOut.create(0.3);
	this.runAction(cc.Spawn.create(act1, act2));
    }
});

var Tlogo = cc.Sprite.extend({
    ctor: function(filename, rect) {
	this._super(filename, rect);

	this.setAnchorPoint(cc.p(0.5, 0.5));
	this.setOpacity(0);
	this.setScale(0.6, 0.6);

	var act1 = cc.ScaleTo.create(0.3, 1, 1);
	var act2 = cc.FadeIn.create(0.3);

	var act3 = cc.ScaleTo.create(0.1, 1.1);

	var act4 = cc.ScaleTo.create(0.15, 2.5, 0.2);
	var act5 = cc.FadeOut.create(0.15);

	var ac1 = cc.Spawn.create(act1, act2);
	var ac2 = cc.Spawn.create(act4, act5);

	this.runAction(cc.Sequence.create(ac1, act3, ac2));
    }
});

var  ScoreBar = cc.Sprite.extend({
    max: 1235,
    min: 490,
    vpos: 762,
    step: 0,
    current: 0,
    ctor: function(filename, rect) {
	this._super(filename, rect);

	this.step = (this.max - this.min) / 100;
	this.current = this.min;

	this.add(0);
    },

    add: function(value) {
	this.current += value * this.step;
	this.setPosition(this.current, this.vpos);
    }
});

var UpToYou = cc.Sprite.extend({
    ctor: function(filename, rect) {
	this._super(filename, rect);
	this.setAnchorPoint(cc.p(0.5, 0.5));
	//this.setOpacity(180);

	var act1 = cc.FadeIn.create(0.1);
	var act2 = cc.ScaleTo.create(4, 1);
	var act3 = cc.FadeOut.create(0.5);
	this.runAction(cc.Sequence.create(act1, act2, act3));
    }
});


var LiveLayer = cc.Layer.extend({

    icons: [],
    touched: null,
    muted: false,

    score: {
	"total": 0,
	"perfect": 0,
	"good": 0,
	"miss": 0,

	"printf": function() {
	    return ("0000" + this.total).substr(-5);
	}
    },

    init: function() {
        var size = cc.winSize;

	// score
	this.score.total = 0;
	this.score.perfect = 0;
	this.score.good = 0;
	this.score.miss = 0;

	// background
	this.background = new cc.Sprite(res.School);
	this.background.setPosition(size.width / 2, size.height / 2);
	this.addChild(this.background, 1);

	// uptoyou
	var up = new UpToYou(res.UpToYouTitle);
	up.setPosition(size.width / 2, 350);
	this.addChild(up, 2);

	// mute
	this.mute = new cc.Sprite(res.MuteOff);
	this.mute.setPosition(40, 760);
	this.addChild(this.mute, 2);

	// scorebar
	this.scorebar = new ScoreBar(res.ScoreBar);
	this.addChild(this.scorebar, 0);

	// tone
	this.tone = new Tone(res.Tone, 0);
	this.tone.setPosition(size.width / 2, size.height / 1.3);
	this.addChild(this.tone, 5);

	// tone curcle
	_ctone_counter = 0;
	for(var i = 0; i < 3; i++) {
	    var ts = new Ctone(res.Cecho);
	    ts.setPosition(size.width / 2, size.height / 1.3);
	    this.addChild(ts, 5);
	}

	var icon;
	var center = size.width / 2;
	var interval = size.width / 10;

	icon = new MascotIcon(res.IconConoha3, 0);
	icon.setPosition(100, 400);
	icon.setTag(0);
	this.addChild(icon, 5);
	this.icons.push(icon);

	icon = new MascotIcon(res.IconAnzu1, 0);
	icon.setPosition(250, 200);
	icon.setTag(1);
	this.addChild(icon, 5);
	this.icons.push(icon);

	icon = new MascotIcon(res.IconConoha2, 0);
	icon.setPosition(480, 125);
	icon.setTag(2);
	this.addChild(icon, 5);
	this.icons.push(icon);

	icon = new MascotIcon(res.IconAnzu2, 0);
	icon.setPosition(780, 125);
	icon.setTag(3);
	this.addChild(icon, 5);
	this.icons.push(icon);

	icon = new MascotIcon(res.IconConoha1, 0);
	icon.setPosition(1010, 200);
	icon.setTag(4);
	this.addChild(icon, 5);
	this.icons.push(icon);

	icon = new MascotIcon(res.IconAnzu3, 0);
	icon.setPosition(1160, 400);
	icon.setTag(5);
	this.addChild(icon, 5);
	this.icons.push(icon);


	// ----- Events -----
	var self = this;
	var touch = cc.EventListener.create({
	    event: cc.EventListener.TOUCH_ONE_BY_ONE,
	    swallowTouches: true,
	    onTouchBegan: function(touch, event) {

		var locationInNode ;

		for(var i = 0; i < self.icons.length; i++) {
		    var icon = self.icons[i];
		    var Size = icon.getContentSize();
		    var rect = cc.rect(0, 0, Size.width, Size.height);

		    locationInNode = icon.convertToNodeSpace(touch.getLocation());


		    // Check the click area
		    if (cc.rectContainsPoint(rect, locationInNode)) {
			self.touched = icon;
			return true;
		    }
		}

		locationInNode = self.mute.convertToNodeSpace(touch.getLocation());
		if (cc.rectContainsPoint(rect, locationInNode)) {
		    self.muted = true;
		    return true;
		}

		return false;
	    },
	    onTouchMoved: function(touch, event) {
		return true;
	    },
	    onTouchEnded: function(touch, event) {
		return true;
	    },
	    onTouchCanceled: function(touch, event) {
		return true;
	    }
	});
        cc.eventManager.addListener(touch, this);

	// score
        this.scoreLabel = cc.LabelTTF.create(this.score.printf(), "Arial", "48");
	//scoreLabel.color = cc.color(255, 89, 245);
        this.scoreLabel.setPosition(cc.p(305, 752));
        this.addChild(this.scoreLabel, 2);

	// MusicalScore
	this.ms = MusicalScore;
	this.ms.init();

	// Audio
        this.audioEngine = cc.audioEngine;
	this.audioEngine.setMusicVolume(0.5);

	// Play music
	this.audioEngine.playMusic(res.UpToYou, false);

	this.scheduleOnce(function() {
	    this.scheduleUpdate();
	}, 2.0);

	// ua
	this.ua = window.navigator.userAgent.toLowerCase();
    },

    start: false,
    ctimes: [],
    update: function(dt) {
	var tag;
	if(this.muted) {
	    if(this.audioEngine.getMusicVolume() == 0) {
		this.audioEngine.setMusicVolume(0.5);
		this.mute.setTexture(res.MuteOff);
	    } else {
		this.audioEngine.setMusicVolume(0);
		this.mute.setTexture(res.MuteOn);
	    }
	    this.muted = false;
	}

	try {
	    if (this.ua.indexOf('msie') != -1 || this.ua.indexOf('trident/7') != -1) {
	    	// IE
	    	tag = this.ms.tick(this.audioEngine._currMusic._element.currentTime, this.audioEngine);
	    } else {
		// Others
		tag = this.ms.tick(this.audioEngine._currMusic._context.currentTime - this.audioEngine._currMusic._startTime, this.audioEngine);
	    }

	} catch(e){
	    return;
	}

	if(tag == -1) {
	    this.unscheduleAllCallbacks();

	    var scene = new ResultScene();
	    scene.score = this.score;
	    var transition = cc.TransitionRotoZoom.create(2.0, scene);
            cc.director.runScene(transition);

	} else if(tag != null) {

	    var ctime = new Ctime(res.ActCircle);
	    ctime.setPosition(this.tone.getPosition());
	    ctime.moveToMascot(this.icons[tag], this.tone);
	    this.addChild(ctime, 10);

	    this.ctimes.push(ctime);
	}

	if(this.touched != null) {

	    var icon = this.touched;
            var size = cc.winSize;
	    for(var i = 0; i < this.ctimes.length; i++) {
		var pos = this.ctimes[i].getPosition();
	    	var distance = cc.pDistance(icon.getPosition(), pos);
		if(distance < 150) {
		    this.hit(this.ctimes[i], icon, distance);
		}
	    }
	    this.touched  = null;
	}
    },

    hit: function(ctime, icon, distance) {

	if(ctime.hitted) {
	    return;
	}
	ctime.hitted = true;

	this.audioEngine.playEffect(res.Tamb);

        var size = cc.winSize;

	// キラキラ
	var s = new Star1(res.Star1);
	s.setPosition(icon.getPosition());
	this.addChild(s, 10);

	// hit
	var h = new Hit(res.Hit);
	h.setPosition(icon.getPosition());
	this.addChild(h, 10);

	// Perfect/Good/Miss
	var l;
	if(distance < 20 && ctime.getOpacity() > 150) {
	    l = new Tlogo(res.Perfect);

	    this.score.total += 100;
	    this.score.perfect++;
	    this.scoreLabel.string = this.score.printf();
	    this.scorebar.add(1);

	} else if(distance < 50 && ctime.getOpacity() > 50) {
	    l = new Tlogo(res.Good);

	    this.score.total += 50;
	    this.score.good++;
	    this.scoreLabel.string = this.score.printf();
	    this.scorebar.add(1);
	} else {
	    this.score.total += 10;
	    this.score.miss++;
	    this.scoreLabel.string = this.score.printf();
	    l = new Tlogo(res.Miss);
	}

	l.setPosition(size.width / 2, size.height / 2);
	this.addChild(l, 10);
    }
});


var LiveScene = cc.Scene.extend({
    onEnter: function() {
	this._super();
	var layer = new LiveLayer();
	layer.init();

	this.addChild(layer);
    }
});
