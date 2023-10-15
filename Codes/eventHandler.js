
// Variables

var shiftPressed = false;
var ctrlPressed = false;
var canMove = true;
var moving = false;


var selectedElementName = "";
var selectedElement = null;

var mousePos = { x: undefined, y: undefined };

//


function EnableTextEditing(textid) {
    //console.log("textediting");

    canMove = false;
    const text = document.getElementById(textid);
    
    if (text.textContent == " Yazmak için çift tıkla ") 
        text.textContent = "";

    text.style.color = "white";
    text.contentEditable = true;
    text.focus();
    text.parentElement.style.cursor = "text";
      
}



document.addEventListener(
    "keydown",
    function(event) {
      //console.log(event.key);
      
      if(event.key == "Shift") {
          shiftPressed = true;
      
          
      }
  
    

      if (event.key == "Control") {
          ctrlPressed = true;
          
      }
     
    },
  );

  window.addEventListener('keyup',function(e){
    if(e.key == "Control")
        ctrlPressed = false;

        
    if(e.key == "Delete") {
        if (selectedElement != null) {

            selectedElement.remove();
            selectedElement = null;   
            index -= 1; 

        }
        
        const element = document.activeElement.tagName;
        if (element == 'LI')
        {
            document.activeElement.remove();
        }
        //console.log(element);
    }
   

});


document.addEventListener('mouseup',function(e) {

if (selectedElement != null && e.target.parentElement.className != "videoelement") {
    
    document.querySelectorAll('.videoelement').forEach(elements => {
        elements.style.border = "";

    });

    selectedElement = null;
}
    
});




function addEventListener2AllElements() {
    //console.log("adding events ");
    document.querySelectorAll('.videoelement').forEach(elements => {
        
       
        elements.addEventListener('mousedown', function(e) {
    
            // Elementi hareket ettirme
            if (e.target.parentElement.className == "videoelement" && canMove) {
                moving = true;
            }

           
        });
    
        elements.addEventListener('mouseup', function(e) {
            
            
            //console.log(e.target);
           
            this.style.border = "1px solid #008080"; 
            if (selectedElement != null)
                selectedElement.style.border = "";
            
            selectedElement = this;
            //console.log(selectedElement);
            
            
         
        
        });
        
        document.addEventListener('mouseup', function() {
            moving = false;
        });
    
        elements.addEventListener('mousemove', function(event) {
    
           
            if (moving == false) 
                selectedElementName = event.target.parentElement.id;
    
            if (canMove)
                event.target.parentElement.style.cursor = "move";
            
            
                 
                
        });
    
        elements.addEventListener('mouseleave', function() {
            this.style.cursor = "default";
            //this.style.border = "";
           
            //console.log(this.childNodes[2].className);
            if (this.childNodes[1].className == "note") {
                var textHTML = this.childNodes[1].innerHTML;
                this.childNodes[1].contentEditable = false;
                this.childNodes[1].style.userselect = "none";
                canMove = true;
            }
        });
    
    });

}


document.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    // document.getElementById('mousepostext').textContent = "Mouse Position: " + mousePos.x + " , " + mousePos.y;
   

    if (moving && selectedElementName != null && selectedElementName != "") {
        const element = document.getElementById(selectedElementName);
        //console.log(selectedElementName);

        element.style.left = (mousePos.x - 150).toString() + "px";
        element.style.top = (mousePos.y - 150).toString() + "px";

    }

    
});


    