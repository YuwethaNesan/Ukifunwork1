SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/599362299', function(sound) {

    //play button
    $('#start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause1').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});


$(document).ready(function() {
  SC.stream('/tracks/317966368', function(sound) {

    //play button
    $('#start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause2').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/345495189', function(sound) {

    //play button
    $('#start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause3').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/235717376', function(sound) {

    //play button
    $('#start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause4').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/70966237', function(sound) {

    //play button
    $('#start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause5').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/18625859', function(sound) {

    //play button
    $('#start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause6').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/21258859', function(sound) {

    //play button
    $('#start7').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause7').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop7').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/8495815', function(sound) {

    //play button
    $('#start8').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause8').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop8').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/77553361', function(sound) {

    //play button
    $('#start9').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause9').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop9').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});


$(document).ready(function() {
  SC.stream('/tracks/190737647', function(sound) {

    //play button
    $('#start10').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause10').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop10').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/63344377', function(sound) {

    //play button
    $('#start11').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause11').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop11').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/31779590', function(sound) {

    //play button
    $('#start12').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause12').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop12').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});



$(document).ready(function() {
  $('#songsonglist').songlist({
    interval: 4000
  })

  $('.songlist .songlist-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });
});