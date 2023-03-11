//document.querySelector("button").

for(var i= 0;i<(document.querySelectorAll(".drum").length);i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", music);
}

document.addEventListener("keypress", music);


  function music()
  {

    var letter= this.innerHTML;

    switch (event.key || letter) {
      case "a":
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
        break;
      case "s":
      var s = new Audio("sounds/tom-1.mp3");
      s.play();
        break;
      case "d":
      var d = new Audio("sounds/tom-2.mp3");
      d.play();
        break;
      case "h":
      var h = new Audio("sounds/tom-3.mp3");
      h.play();
        break;
      case "j":
      var j = new Audio("sounds/tom-4.mp3");
      j.play();
        break;
      case "k":
      var k = new Audio("sounds/snare.mp3");
      k.play();
        break;
      case "l":
      var l = new Audio("sounds/crash.mp3");
      l.play();
        break;
      default:
    }

    animation(event.key || letter);

  }

  function animation(ele)
  {
    var element= document.querySelector("."+ele);

    element.classList.add("pressed");
    setTimeout(function()
    {
      element.classList.remove("pressed");
  },100);

  }
