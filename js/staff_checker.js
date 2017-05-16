function checkIt() {
  // Initialize scores
  var campbell = 0;
  var dunn = 0;
  var keller = 0;
  var henson = 0;
  var sherman = 0;
  var maddie = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'campbell') {
        campbell++;
      }
      else if (e.value == 'dunn') {
        dunn++;
      }
      else if (e.value == 'keller') {
        keller++;
      }
      else if (e.value == 'henson') {
        henson++;
      }
      else if (e.value == 'sherman') {
        sherman++;
      }
      else if (e.value == 'maddie') {
        maddie++;
      }
    }

  }

  // Determine result
  var counts = "Campbell: " + campbell + ", " +
               "Dunn: " + dunn  + ", " +
               "Keller: " + keller  + ", " +
               "Henson: " + henson  + ", " +
               "Sherman: " + sherman  + ", " +
               "Maddie: " + maddie;

  // What is the highest value?
  var max = Math.max(campbell, dunn, keller, henson, sherman, maddie);

  // Form a message

  var title = "Which JL Mann Band Staff Member Are You?";

  var message;

  if (max == campbell) {
    heading = "You got: Mr Campbell"
    message = "You are most like Mr Campbell! You work as an indoor guard and drumline instructor. You love your job, and the kids love you. You really do it all for them.";
    image = "<img src='img/campbell.jpg'>"
  }
  else if (max == dunn) {
    heading = "You got: Mr Dunn"
    message = "You are most like Mr Dunn! You are an AMAZING brass player. You marched with Carolina Crown AND The Cadets!";
    image = "<img src='img/dunn.jpg'>"
  }
  else if (max == keller) {
    heading = "You got: Mr Keller"
    message = "You are most like Mr Keller! You are a high school band director, you play the trumpet, and you drink TONS of coffee because they don't pay you enough to deal with these kids! But you do it anyways.";
    image = "<img src='img/keller.png'>"
  }
  else if (max == henson) {
    heading = "You got: Mr Henson"
    message = "You are most like Mr Henson! You work at Woodmont High School, you played bass drum in marching band at Blue Ridge High School with Mr Campbell. ";
    image = "<img src='img/henson.jpg'>"
  }
  else if (max == sherman) {
    heading = "You got: Mr Sherman"
    message = "You are most like Mr Sherman! You work with the guard programs at JL Mann! All of the guard girls love you, and you really enjoy your job.";
    image = "<img src='img/sherman.jpg'>"
  }
  else if (max == maddie) {
    heading = "You got: Mrs Maddie"
    message = "You are most like Mrs Maddie! You work with the guard programms at JL Mann. You have been with the indoor guard since the beginning, and they would not be the same without you.";
    image = "<img src='img/maddie.jpg'>"
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = heading;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('image').innerHTML = image;
}
