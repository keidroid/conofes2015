"use strict";

var tf = 0.4218;
var MusicalScore = {

    master: [
	{
	    tick:  4.890,
	    tag: 3
	},
	{
	    tick:  4.890 + (tf * 8),
	    tag: 2
	},
	{
	    tick:  4.890 + (tf * 16),
	    tag: 5
	},
	{
	    tick:  4.890 + (tf * 24),
	    tag: 4
	},

	// ----------------------------

	{
	    tick:  18.380 + (tf * 1),
	    tag: 0
	},
	{
	    tick:  18.380 + (tf * 3),
	    tag: 0
	},
	{
	    tick:  18.380 + (tf * 5),
	    tag: 1
	},
	{
	    tick:  18.380 + (tf * 7),
	    tag: 1
	},
	{
	    tick:  18.380 + (tf * 9),
	    tag: 2
	},
	{
	    tick:  18.380 + (tf * 11),
	    tag: 2
	},
	{
	    tick:  18.380 + (tf * 13),
	    tag: 3
	},
	{
	    tick:  18.380 + (tf * 15),
	    tag: 3
	},

	// --- Aメロ
	{
	    tick:  25.151247165532877,
	    tag: 4
	},
	{
	    tick:  25.151247165532877 + (tf * 4),
	    tag: 2
	},
	{
	    tick:  25.151247165532877 + (tf * 8),
	    tag: 0
	},
	{
	    tick:  25.151247165532877 + (tf * 12),
	    tag: 1
	},
	{
	    tick:  25.151247165532877 + (tf * 14),
	    tag: 3
	},

	{
	    tick:  25.151247165532877 + (tf * 16),
	    tag: 4
	},
	{
	    tick:  25.151247165532877 + (tf * 20),
	    tag: 2
	},
	{
	    tick:  25.151247165532877 + (tf * 24),
	    tag: 0
	},
	{
	    tick:  25.151247165532877 + (tf * 28),
	    tag: 3
	},
	{
	    tick:  25.151247165532877 + (tf * 30),
	    tag: 3
	},

	// Aメロ2
	{
	    tick:  38.65 + (tf * 1),
	    tag: 4
	},

	{
	    tick:  38.65 + (tf * 5),
	    tag: 5
	},

	{
	    tick:  38.65 + (tf * 9),
	    tag: 3
	},

	{
	    tick:  38.65 + (tf * 13),
	    tag: 2
	},

	{
	    tick:  38.65 + (tf * 17),
	    tag: 0
	},

	{
	    tick:  38.65 + (tf * 21),
	    tag: 1
	},

	{
	    tick:  38.65 + (tf * 25),
	    tag: 2
	},

	{
	    tick:  38.65 + (tf * 29),
	    tag: 2
	},

	// Bメロ1
	{
	    tick:  52.18,
	    tag: 3
	},
	{
	    tick:  52.18 + (tf * 4),
	    tag: 5
	},
	{
	    tick:  52.18 + (tf * 8),
	    tag: 4
	},
	{
	    tick:  52.18 + (tf * 12),
	    tag: 2
	},

	// Bメロ2
	{
	    tick:  58.95 + (tf * 1),
	    tag: 0
	},
	{
	    tick:  58.95 + (tf * 3),
	    tag: 1
	},
	{
	    tick:  58.95 + (tf * 5),
	    tag: 2
	},
	{
	    tick:  58.95 + (tf * 7),
	    tag: 4
	},

	{
	    tick:  58.95 + (tf * 10),
	    tag: 3
	},
	{
	    tick:  58.95 + (tf * 11.5),
	    tag: 3
	},
	{
	    tick:  58.95 + (tf * 13),
	    tag: 3
	},

	// サビ
	{
	    tick:  65.730 + (tf * 1),
	    tag: 0
	},
	{
	    tick:  65.730 + (tf * 3),
	    tag: 1
	},

	{
	    tick:  65.730 + (tf * 5),
	    tag: 2
	},
	{
	    tick:  65.730 + (tf * 7),
	    tag: 3
	},

	{
	    tick:  65.730 + (tf * 9),
	    tag: 4
	},
	{
	    tick:  65.730 + (tf * 11),
	    tag: 5
	},

	{
	    tick:  65.730 + (tf * 13),
	    tag: 4
	},
	{
	    tick:  65.730 + (tf * 15),
	    tag: 3
	},

	{
	    tick:  65.730 + (tf * 17),
	    tag: 2
	},
	{
	    tick:  65.730 + (tf * 19),
	    tag: 1
	},

	{
	    tick:  65.730 + (tf * 21),
	    tag: 0
	},
	{
	    tick:  65.730 + (tf * 23),
	    tag: 1
	},

	{
	    tick:  65.730 + (tf * 25),
	    tag: 2
	},
	{
	    tick:  65.730 + (tf * 27),
	    tag: 4
	},

	{
	    tick:  65.730 + (tf * 29),
	    tag: 5
	},
	{
	    tick:  65.730 + (tf * 31),
	    tag: 4
	},


	// サビ2
	{
	    tick:  79.25 + (tf * 1),
	    tag: 5
	},
	{
	    tick:  79.25 + (tf * 3),
	    tag: 4
	},

	{
	    tick:  79.25 + (tf * 5),
	    tag: 3
	},
	{
	    tick:  79.25 + (tf * 7),
	    tag: 2
	},

	{
	    tick:  79.25 + (tf * 9),
	    tag: 1
	},
	{
	    tick:  79.25 + (tf * 11),
	    tag: 0
	},

	{
	    tick:  79.25 + (tf * 13),
	    tag: 1
	},
	{
	    tick:  79.25 + (tf * 15),
	    tag: 2
	},


	{
	    tick:  79.25 + (tf * 17),
	    tag: 4
	},
	{
	    tick:  79.25 + (tf * 18),
	    tag: 5
	},

	{
	    tick:  79.25 + (tf * 21),
	    tag: 2
	},
	{
	    tick:  79.25 + (tf * 22),
	    tag: 3
	},

	{
	    tick:  79.25 + (tf * 24),
	    tag: 3
	},
	{
	    tick:  79.25 + (tf * 26),
	    tag: 4
	},

	{
	    tick:  79.25 + (tf * 28),
	    tag: 5
	},
	{
	    tick:  79.25 + (tf * 29),
	    tag: 4
	},

	{
	    tick:  92.80,
	    tag: 3
	},

	{
	    // end music
	    tick:  102.8,
	    tag: -1
	},

    ],
    scores: [],

    next: null,

    ae: null,
    init: function() {
	this.next = null;

	this.scores = [].concat(this.master);
    },

    tick: function(time, ae) {
	if(this.next == null) {
	    this.next = this.scores.shift();
	}

	if(this.next == null) {
	    return null;
	}

	var tag = null;
	if(this.next != null && this.next.tick - time  < 0.005) {
	    tag = this.next.tag;
	    this.next = null;
	}

	return tag;
    }
};
