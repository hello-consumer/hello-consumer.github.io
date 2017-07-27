
// reference to canvas
var can = document.getElementById("full");

function resizeCanvas() {
  can.style.width = window.innerWidth + "px";
  // artifical delay so innerHeight is correct
  setTimeout(function() {
    can.style.height = window.innerHeight + "px";
  }, 0);
};

// Webkit/Blink will fire this on load, but Gecko doesn't.
window.onresize = resizeCanvas;

// So we fire it manually...
resizeCanvas();


gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

// Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Enable depth testing
  gl.enable(gl.DEPTH_TEST);
  // Near things obscure far things
  gl.depthFunc(gl.LEQUAL);
  // Clear the color as well as the depth buffer.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);