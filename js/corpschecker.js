function checkIt() {
  // Initialize scores
  var rcr = 0;
  var crown = 0;
  var bd = 0;
  var cadets = 0;
  var academy = 0;
  var spirit = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'rcr') {
        rcr++;
      }
      else if (e.value == 'crown') {
        crown++;
      }
      else if (e.value == 'cadets') {
        cadets++;
      }
      else if (e.value == 'academy') {
        academy++;
      }
      else if (e.value == 'spirit') {
        spirit++;
      }
      else if (e.value == 'bd') {
        bd++;
      }
    }

  }

  // Determine result
  var counts = "River City Rhythm: " + rcr + ", " +
               "Carolina Crown: " + crown  + ", " +
               "The Cadets: " + cadets  + ", " +
               "The Academy: " + academy  + ", " +
               "Spirit of Atlanta: " + spirit  + ", " +
               "Blue Devils: " + bd;

  // What is the highest value?
  var max = Math.max(rcr, crown, cadets, academy, spirit, bd);

  // Form a message

  var title = "Which Drum Corps should you join?";

  var message;

  if (max == rcr) {
    heading = "You got: River City Rhythm"
    message = "River City Rhythm is an open class drum corps. They are from Minneapolis, Minnesota.";
    image = "<img src='img/rcr.jpg'>"
  }
  else if (max == crown) {
    heading = "You got: Carolina Crown"
    message = "Carolina Crown is a world class drum corps. They are from Fort Mill, South Carolina.";
    image = "<img src='img/carolinacrown.jpg'>"
  }
  else if (max == cadets) {
    heading = "You got: The Cadets"
    message = "The Cadets are a world class drum corps. They are from Allentown, Pennsylvania.";
    image = "<img src='img/thecadets.jpg'>"
  }
  else if (max == academy) {
    heading = "You got: The Academy"
    message = "The Academy is a world class drum corps. They are from Tempe, Arizona.";
    image = "<img src='img/theacademy.jpg'>"
  }
  else if (max == spirit) {
    heading = "You got: Spirit of Atlanta"
    message = "Spirit of Atlanta is a world class drum corps. They are from Atlanta, Georgia.";
    image = "<img src='img/spiritofatlanta.jpg'>"
  }
  else if (max == bd) {
    heading = "You got: Blue Devils"
    message = "The Blue Devils are a world class drum corps. They are form Concord, California.";
    image = "<img src='img/bluedevils.jpg'>"
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = heading;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('image').innerHTML = image;
}
