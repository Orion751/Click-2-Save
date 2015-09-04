//TODO Document; See if JavaDoc applies

var prepend = "javascript:console.log(\"";
var append =  "\")";
var links = document.links;

function changeLinks() {
  for (var i = 0; i < links.length; i++) {
    link = links[i];
    link.href = prepend + link.href + append;
  }

}

function changeLinksBack() {
  for (var i = 0; i < links.length; i++) {
    link = links[i];

    //TODO Ensure that only the begining and end change
    link.href = link.href.replace(prepend, "").replace(append, "");
  }

}

function toggleLinks() {
  if ("Click2Save" in this && Click2Save) {
    changeLinksBack();

    Click2Save = false;
  } else {
    changeLinks();

    Click2Save = true;
  }

}

toggleLinks();
