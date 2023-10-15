var code = ""; 
var enableBox = false;

// fetch("loadOnStart.json")
//   .then(response => response.json()).then(y => {
    
//     console.log(y); // Dosyanın Görünümü

//     document.getElementById('projectname').textContent = y.ProjectName; // Proje İsmini Verme
//     document.getElementById("contentHolder").innerHTML = ""; // Önceki Içerikleri Silme

//     // İçerikleri Yükleme
//     for (let i = 0; i < y.Contents.length;i++) {

//         //document.getElementById("contentHolder").innerHTML += y.Contents[i].innerHTML; 
                    
//         if (y.Contents[i].ContentType == "textArea") {
            
//             createText(y.Contents[i].ContentName, y.Contents[i].left.slice(0,-2), y.Contents[i].top.slice(0,-2), y.Contents[i].TextHTML);

//         }else {
            

//         }
//     }

    // İçerikleri yüklemenin sonu

    
//     index = y.Contents.length; // İndex'i ayarlama
    
//     console.log(document.getElementById("contentHolder")); // Sonuç

//     addEventListener2AllElements(); 


//   });




function toggleToolbox() {
    
    enableBox = !enableBox;

    if(enableBox) {
        document.getElementById('box').style.display = 'block';
    }else {

        document.getElementById('box').style.display = 'none';

    }
    
    
}

function Save() {

    var template = {

        "ProjectName" : "",
        "Contents" : []
    
    };

    var contentData = {
    
        "ContentName" : "",
        "ContentType" : "",
        "left":"",
        "top": "",
        "size": "",
        "innerHtml" : ""


    };


    var project = {...template};

    project.ProjectName = document.getElementById('projectname').textContent;
    const contentAmount = document.querySelectorAll('.videoelement').length;

    for (let i = 0; i < contentAmount;i++) {
        console.log("i: "+ i);
        // add content to json
        project.Contents.push({...contentData});

        // Content object to be saved
        const element = document.querySelectorAll('.videoelement')[i];
        console.log(element);
        

        //Set Atributes for json

            // Content Name
            //console.log(element.childNodes[1]);
            template.Contents[i].ContentName = element.childNodes[0].textContent;
        
            //Positions

                // Left
                project.Contents[i].left = element.style.left;

                // Top
                project.Contents[i].top = element.style.top;
            
            //

            //innerHTML
            project.Contents[i].innerHTML = element.outerHTML;

            //Content Type
            if (element.childNodes[1].className == "note") {

                project.Contents[i].ContentType = "textArea";
                project.Contents[i].TextHTML = element.childNodes[1].innerHTML;

            }else if (element.childNodes[1].className == "listHolder") {

                project.Contents[i].ContentType = "list";
                project.Contents[i].listHTML = element.childNodes[1].innerHTML;
            }
            // else {

            //     project.Contents[i].ContentType = "Video/image/gif";
            //     console.log(element.childNodes[4]);
            //     const file = element.childNodes[4].files[0];
            //     localStorage.setItem('file', new File([file], file.name));
            //     project.Contents[i].SourceFile = new File([file], file.name).text();
            //     console.log(project.Contents[i].SourceFile);
            // }
   
   
        }

    
    // End of modification

    console.log(project);
    var link = document.createElement("a");
    const a =  "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project));
    link.setAttribute("href", a);
    link.setAttribute("download", project.ProjectName + ".json");
    link.click(); // Triggers download
    link.remove(); // Deletes download link
   
}


 function loadSave(file) {
    console.log(file.name);
    if (file == null || file == undefined || file == "")
        return null;

    console.log("Loading...");
    
    
    

    const urlObject = URL.createObjectURL(file);
  
    // Dosyaya erişme
    fetch(urlObject).then((response) => response.json()).then((y) => {

        console.log(y); // Dosyanın Görünümü

        document.getElementById('projectname').textContent = y.ProjectName; // Proje İsmini Verme
        document.getElementById("contentHolder").innerHTML = ""; // Önceki Içerikleri Silme

        // İçerikleri Yükleme
        for (let i = 0; i < y.Contents.length;i++) {

            //document.getElementById("contentHolder").innerHTML += y.Contents[i].innerHTML; 
                       
            if (y.Contents[i].ContentType == "textArea") {
                
                createText(y.Contents[i].ContentName, y.Contents[i].left.slice(0,-2), y.Contents[i].top.slice(0,-2), y.Contents[i].TextHTML);

            }else if (y.Contents[i].ContentType == "list") {

                createToDoList(y.Contents[i].left.slice(0,-2), y.Contents[i].top.slice(0,-2), y.Contents[i].listHTML)
                

            }
        }

        // İçerikleri yüklemenin sonu

        
        index = y.Contents.length; // İndex'i ayarlama
        
        console.log(document.getElementById("contentHolder")); // Sonuç

        addEventListener2AllElements(); 
    });


   
    
    

}