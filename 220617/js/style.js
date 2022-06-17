var elements = document.getElementsByClassName("number");
for (i = 0; i < elements.length; i++) {
  elements[i].insertAdjacentHTML(
    "afterbegin",
    '<div class="bubble"></div><div class="txt"><span>P</span><span>O</span><span>I</span><span>N</span><span>T</span></div>'
  );
}
