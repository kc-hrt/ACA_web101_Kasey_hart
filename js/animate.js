let animationName = ""
let elementColor = ""

// Can you use these two variables to change the type and text of the next element that's created?
let elementType = ""
let inputtedText = ""

// function that handles the input "animation-name"
const setAnimationName = (name) => {
  animationName = name
  console.log(animationName)
}

// function that handles the input "element-color"
const setElementColor = (color) => {
  elementColor = color
}

// This function creates a new element and attaches to the parent element: element-collector
const createNewElement = () => {
  const elementContainer = document.getElementById("element-collector")
  
  // create a new element with default values
  const newElement = document.createElement("H3")
  const textNode = document.createTextNode("Hello")

  // Using dot.notation to access the new element's properties
  newElement.appendChild(textNode)
  newElement.classList.add("animated", "infinite", animationName)
  newElement.style.color = elementColor

  // attach the new element to the parent
  elementContainer.appendChild(newElement)
}


// marquee
function marquee(a, b) {
  var width = b.width();
  var start_pos = a.width();
  var end_pos = -width;

  function scroll() {
      if (b.position().left <= -width) {
          b.css('left', start_pos);
          scroll();
      }
      else {
          time = (parseInt(b.position().left, 10) - end_pos) *
              (10000 / (start_pos - end_pos)); // Increase or decrease speed by changing value 10000
          b.animate({
              'left': -width
          }, time, 'linear', function() {
              scroll();
          });
      }
  }

  b.css({
      'width': width,
      'left': start_pos
  });
  scroll(a, b);
  
  b.mouseenter(function() {     // Remove these lines
      b.stop();                 //
      b.clearQueue();           // if you don't want
  });                           //
  b.mouseleave(function() {     // marquee to pause
      scroll(a, b);             //
  });                           // on mouse over
  
}

$(document).ready(function() {
  marquee($('#marquee-box'), $('#marquee-text'));  //Enter name of container element & marquee element
});

nodeMarquee({
  selector: 'h2',
  speed: 2
});