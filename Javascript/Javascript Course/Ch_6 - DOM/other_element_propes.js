// Finding the tagName
let tagname = document.querySelector("div");
tagname = tagname.tagName;
console.dir(tagname);

// Finding the innerText of element(s) and also innerHTML;
let div = document.querySelector("div");
divInnerText = div.innerText;
console.log(divInnerText);
divInnerHtml = div.innerHTML;
console.log(divInnerHtml);

/* We can change the inner text or inner html:

divInnerText = "abcd";
console.log(divInnerText);

divInnerHtml = "<div>Inner Div</div>";
console.log(divInnerHtml);

*/

let heading = document.querySelector("h1");
heading.innerHTML = "<i>new Heading</i> "  // These changes are on the runtime not to the whole document


// content of the hidden elements can be printed on the console using textContent
let phid = document.querySelector("#phidden")
console.log(phid.textContent)