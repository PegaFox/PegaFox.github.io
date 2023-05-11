function main() {
  const canvas = document.getElementById("SCREEN");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    //ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(100, 100, 100, 100);
  } else {
    console.log("out of context");
  }
};

window.onload(main);