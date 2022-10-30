const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 30; // 100px
function shadowEffect(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;

  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);
  //   console.log("Xwalk", xWalk, yWalk);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.6),
  ${xWalk}px ${yWalk * -1}px 0 rgba(0, 255, 255, 0.6),
  ${yWalk}px ${xWalk * -1}px 0 rgba(255, 255, 0, 0.6),
  ${yWalk * -1}px ${xWalk}px 0 rgba(255, 0, 0, 0.6)`;
  //   console.log(text);
}

hero.addEventListener("mousemove", shadowEffect);
