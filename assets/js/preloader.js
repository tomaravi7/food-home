document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.overflowY="hidden";
    document.querySelector("#preload").style.visibility = "visible";
    window.scrollTo(0, 0);
  } else {
    const myTimeout = setTimeout(loadpage, 4200);
  }
};
function loadpage() {
  document.querySelector("#preload").style.display = "none";
  document.querySelector("body").style.visibility = "visible";
  document.querySelector("body").style.overflowY="scroll";
}
