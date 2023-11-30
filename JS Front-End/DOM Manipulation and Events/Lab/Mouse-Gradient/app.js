function attachGradientEvents() {
  const gradientBox = document.getElementById("gradient");
  const output = document.getElementById("result");
  
  gradientBox.addEventListener("mousemove", gradientMove);
  gradientBox.addEventListener("mouseout", gradientOut);
 
  function gradientMove(e) {
    const target = e.currentTarget;
    let percentage = Math.trunc((e.offsetX / (target.clientWidth - 1)) * 100);
    output.textContent = `${percentage}%`;
  }
  
  function gradientOut() {
    output.textContent = "";
  }
}
