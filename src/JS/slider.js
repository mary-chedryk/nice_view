gsap.registerPlugin(Draggable, InertiaPlugin);

gsap.defaults({ease: "none"});

var picker = document.querySelector(".picker");
var cells = document.querySelectorAll(".cell");
var proxy = document.createElement("div");

var cellWidth = 450;
//var rotationX = 90;

var numCells = cells.length;
var cellStep = 1 / numCells;
var wrapWidth = cellWidth * numCells;

var baseTl = gsap.timeline({ paused: true });
var wrapProgress = gsap.utils.wrap(0, 1);

gsap.set(picker, {
  //perspective: 1100,
  width: wrapWidth - cellWidth
});

for (var i = 0; i < cells.length; i++) {  
  initCell(cells[i], i);
}

var animation = gsap.timeline({ repeat: -1, paused: true })
  .add(baseTl.tweenFromTo(1, 2, {immediateRender: true}))

var draggable = new Draggable(proxy, {  
  // allowContextMenu: true,  
  type: "x",
  trigger: picker,
  inertia: true,
  onDrag: updateProgress,
  onThrowUpdate: updateProgress,
  snap: { 
    x: snapX
  },
  onThrowComplete: function(){
    console.log("onThrowComplete");
    //TODO: animation that inject selected card title
  }
});

function snapX(x) {
  return Math.round(x / cellWidth) * cellWidth;
}

function updateProgress() {
  animation.progress(wrapProgress(this.x / wrapWidth));
}

function initCell(element, index) {
  
  gsap.set(element, {
    width: cellWidth,
    scale: 0.6,
    //rotationX: rotationX,
    x: -cellWidth
  });
  
  var tl = gsap.timeline({ repeat: 1 })
    .to(element, 1, { x: "+=" + wrapWidth/*, rotationX: -rotationX*/ }, 0)
    .to(element, cellStep, { color: "#009688", scale: 1, repeat: 1, yoyo: true }, 0.5 - cellStep);
  baseTl.add(tl, i * -cellStep);
}
