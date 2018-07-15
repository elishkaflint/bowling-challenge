function Scorecard() {
  this.frames = [
    frame1 =  new Frame(),
    frame2 =  new Frame(),
    frame3 =  new Frame(),
    frame4 =  new Frame(),
    frame5 =  new Frame(),
    frame6 =  new Frame(),
    frame7 =  new Frame(),
    frame8 =  new Frame(),
    frame9 =  new Frame(),
    frame10 = new Frame(),
  ];
}

Scorecard.prototype.addScore = function(frame, score) {
  this.frames[(frame - 1)].addScore(score);
}

Scorecard.prototype.totalScore = function() {
  var scores = this.frames.map( frame => frame.totalScore() )
  return scores.reduce(function(a,b) {
    return (a + b)
  });
};
