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
  //changeLinks();
  changeLinksBack();

}

toggleLinks();
