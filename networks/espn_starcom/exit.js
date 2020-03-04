this.exit = function(clickTag) {
  var clickUrl = this.appendMacro("%c_esc", clickTag);
  console.log("Network -> ESPN EXIT (Starcom)");
  window.open(clickUrl, "_blank");
};
