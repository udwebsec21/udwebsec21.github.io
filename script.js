let strokeColor = "#8391A7";
var dimmerLines = document.getElementById("dimmer-lines");
var cxt = dimmerLines.getContext("2d");
for (var i = 0; i < 60; i++) {
  cxt.save();
  cxt.translate(230, 230);
  cxt.rotate((i * 6 * Math.PI) / 180);
  cxt.beginPath();
  cxt.moveTo(0, -176);
  cxt.lineTo(0, -188);
  cxt.closePath();
  cxt.lineWidth = 2;
  cxt.strokeStyle = strokeColor;
  cxt.shadowBlur = 0;
  cxt.shadowOffsetX = 0;
  cxt.shadowOffsetY = 0;
  cxt.stroke();
  cxt.restore();
}
