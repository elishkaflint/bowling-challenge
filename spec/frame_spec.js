describe ('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  it ('records the outcome of the first roll', function() {
    frame.recordRoll(2);
    expect(frame.rolls).toEqual ([2]);
  });

  it ('records the outcome of the second roll', function() {
    frame.recordRoll(2);
    frame.recordRoll('/');
    expect(frame.rolls).toEqual ([2,'/']);
  });

  it ('stores in-frame and bonus scores', function() {
    frame.addScore(3);
    frame.addScore(5);
    expect(frame.scores).toEqual ([3, 5]);
  });

  it ('returns the total score for the frame', function() {
    frame.addScore(3);
    frame.addScore(5);
    expect(frame.totalScore()).toEqual (8);
  });

});
