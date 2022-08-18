document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#preload").style.visibility = "visible";
    window.scrollTo(0, 0);
  } 
  else 
  {
    const myTimeout = setTimeout(loadpage, 0);
  }
};
function loadpage() {
  document.querySelector("#preload").style.display = "none";
  document.querySelector("body").style.visibility = "visible";
}
