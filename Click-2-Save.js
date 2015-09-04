//TODO Document; See if JavaDoc applies
//TODO Check style guide for boolean capitalization

var prepend = "javascript:console.log(\"";
var append =  "\")";

function changeLinks() {
  links = document.links;
  
  for (var i = 0; i < links.length; i++) {
    link = links[i];
    link.href = prepend + link.href + append;
  }

}

function changeLinksBack() {
  links = document.links;
  
  for (var i = 0; i < links.length; i++) {
    link = links[i];
    //link.href = prepend + link.href + append;

    //TODO Ensure that only the begining and end change
    link.href = link.href.replace(prepend, "").replace(append, "");
  }

}

function toggleLinks() {
  if ("Click2Save" in this && Click2Save === true) {
    console.log("Normal browsing behavior restored");

    Click2Save = false;
  } else {
    console.log("Clicked links save");

    Click2Save = true;
  }
  //changeLinks();
  //changeLinksBack();

}

toggleLinks();
