var start = 0;
var end = 0;

    addEventListener('click',function(e)
    {
           
           if (e.target.nodeName == 'P') {

                var selection = window.getSelection();
                if (selection.focusOffset - selection.anchorOffset != 0) {

                    start = selection.anchorOffset;
                    end = selection.focusOffset;
                    //console.log("start: " + start);
                    //console.log("end: " + end);
                    //document.getElementById('italicBtn').disabled = false;
                    //document.getElementById('boldBtn').disabled = false;
                }
                
                
                if (start >= 0 && end >= 0){
                    
                    //console.log("start: " + start);
                    //console.log("end: " + end);

                    if (start > end) {
                        const a = start;
                        const b = end;
                        start = b;
                        end = a;

                    }
                }

           }
    });

   

    function formatText(id, format) {
        console.log('eee');
        document.execCommand(format,false,null);
    }
    


    function MergeChilds2One(element) {

        //const num = textElement.childNodes.length;

        //console.log(element.childNodes.length);
        var new_paragraph = document.createElement('p');
        
        
        for (i = 0; i < element.childNodes.length; i += 0) {
            //console.log(element.childNodes[0].outerHTML + " goes to new paragraph...");
            new_paragraph.appendChild(element.childNodes[0]);


        }

        console.log(new_paragraph);
        //console.log(element.parentElement);
        element.parentElement.appendChild(new_paragraph);
        new_paragraph.className = "note";
        new_paragraph.style.color = "white";
        new_paragraph.id = element.id;
        new_paragraph.contentEditable = true;
        element.remove();
     }