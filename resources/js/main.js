function openTooltip (link) {
  let title = this.title;
  this.title = ''; // Removes the default tooltip
  this.setAttribute("tooltip", title); //The setAttribute() method sets a new value to an attribute.

  let tooltipDiv = document.createElement("div"); //creates div
  tooltipDiv.className = 'tooltip'; //adds class
  tooltipDiv.appendChild(document.createTextNode(title)); //add the text node to the newly created div.

  let firstChild = document.body.firstChild; //gets the first elem after body
  firstChild.parentNode.insertBefore(tooltipDiv, firstChild); //adds tooltip before elem

  let padding = 15;
  let linkProps = this.getBoundingClientRect(); //Return the size of an element and its position relative to the viewport
  let tooltipProps = tooltipDiv.getBoundingClientRect();

  let bottomPos = linkProps.bottom + (tooltipProps.height - padding); //Tooltip bottom position
  let leftPos = linkProps.left; //Tooltip left position

  tooltipDiv.setAttribute(
    'style',
    `top:${bottomPos}px; 
    left:${leftPos}px;`
                          );
} 

function closeTooltip(link){
  let title = this.getAttribute("tooltip"); // returns the value of an element's attribute
  this.title = title;
  this.removeAttribute("tooltip"); // removes the value of an element's attribute
  let tooltipClass = document.querySelector(".tooltip");
  tooltipClass.remove();
}

const toolTrigger = document.querySelectorAll('.tool-trigger');
for (let i=0; i < toolTrigger.length; i++) {
    let a = toolTrigger[i];
    if (a.title !== ''){
      a.addEventListener('mouseover', openTooltip);
      a.addEventListener('mouseout', closeTooltip);
    }
}
