var index = 0;
//createToDoList(`Video ${index}`,0,0);

function createToDoList(leftPos, topPos, listHTML) {
   
    
    // Video Element
    var video_element = document.createElement('div');
    video_element.id = 'video element ' + index;
    video_element.className = 'videoelement';
    video_element.style.left = (leftPos).toString() + "px";
    video_element.style.top = (topPos).toString() + "px";

    document.getElementById("contentHolder").appendChild(video_element);
    //
    
    // A button to add line
    var addButton = document.createElement("button");
    addButton.className = "addButton";
    addButton.textContent = "+";
    addButton.title = "Madde Ekle";
    video_element.appendChild(addButton);
    addButton.addEventListener('click', function() {
        
        var line = document.createElement("li");

        line.style.color = "white";
        line.style.backgroundColor = "RGB(255,0,0,0.2)";
        line.style.borderBottom = "1px solid RGB(255,255,255,0.5)";
        line.contentEditable = true;

        line.innerHTML = "<label><input type='checkbox'>Yeni Madde</label>";
        list.appendChild(line);
    });

    var listHolder = document.createElement("div");
    listHolder.className = "listHolder";
    
    video_element.appendChild(listHolder);
   

    listHolder.innerHTML += "<br>";

    var list = document.createElement("ul");
    listHolder.appendChild(list);

    if (listHTML == '') {

        for (let i = 0; i < 3; i++) {
            var line = document.createElement("li");
    
            line.style.color = "white";
            line.style.backgroundColor = "RGB(255,0,0,0.2)";
            line.style.borderBottom = "1px solid RGB(255,255,255,0.5)";
            line.contentEditable = true;
    
            line.innerHTML = `<label><input type='checkbox'>Madde ${i+1}</label>`;
            list.appendChild(line);
        }
    

    }else {
        listHolder.innerHTML = listHTML;
    }
    
    index += 1;
    addEventListener2AllElements();

} 
   



   
function createVideo(headerText, leftPos, topPos) {
    console.log('a');

   // Video Element
   var video_element = document.createElement('div');
   video_element.id = 'video element ' + index;
   video_element.className = 'videoelement';
   video_element.style.left = (leftPos).toString() + "px";
   video_element.style.top = (topPos).toString() + "px";

   document.getElementById("contentHolder").appendChild(video_element);
      
    // Header
    var header = document.createElement('h1');
    header.id = 'header ' + index;
    header.className = 'header';
    header.textContent = headerText;
    header.style.textAlign = 'center';
    header.style.color = 'white';
    header.contentEditable = true;

    //video_element.appendChild(header);    
    //

    video_element.innerHTML += `<video class='video' id='source ${index}' controls><source src='' type='video/mp4'></video>`;
    video_element.innerHTML += `<input class='input' onchange='loadvideo(this.id)' id='video input ${index}' type='file'accept='video/mp4,video/x-m4v,video/*'>`;
    

    index += 1;    
    
    addEventListener2AllElements();
}

function createImage(source, leftPos, topPos) {
    
    console.log(source);

    // Video Element
    var video_element = document.createElement('div');
    video_element.id = 'video element ' + index;
    video_element.className = 'videoelement';
    video_element.style.left = (leftPos).toString() + "px";
    video_element.style.top = (topPos).toString() + "px";

    document.getElementById("contentHolder").appendChild(video_element);

    // Image
    var img = document.createElement("img");
    img.className = "image";
    const file = document.getElementById('imageInput').files[0];
    img.src = URL.createObjectURL(file);
    video_element.appendChild(img);
    
    index += 1;
   
    addEventListener2AllElements();

}


function createText(headerText, leftPos, topPos, textHTML) {

    
    // Video Element
    var video_element = document.createElement('div');
    video_element.id = 'video element ' + index;
    video_element.className = 'videoelement';
    video_element.style.left = (leftPos).toString() + "px";
    video_element.style.top = (topPos).toString() + "px";

    document.getElementById("contentHolder").appendChild(video_element);
    
    //video_element.innerHTML += `<h1 class='header' id='header ${index}' contentEditable= 'true'  style='color: aliceblue;text-align: center;' contentEditable='true'>Metin Alanı ${index}</h1>`;
    
    // Header
    var header = document.createElement('h1');
    header.id = 'header ' + index;
    header.className = 'header';
    header.textContent = headerText;
    header.style.textAlign = 'center';
    header.style.color = 'white';
    header.contentEditable = true;
    header.style.display = "none";


    video_element.appendChild(header);


    //video_element.innerHTML += `<p id='note ${index}' class='note' ondblclick='EnableTextEditing(this.id)' contentEditable='false'> Yazmak için çift tıkla </p>`
    
    // Create Text
    var text = document.createElement('p');
    text.id = 'note ' + index;
    text.className = 'note';
    

    if (textHTML != "") {
        text.innerHTML = textHTML;
        text.style.color = 'white';
    }else {

        text.textContent = " Yazmak için çift tıkla ";
    }

    video_element.appendChild(text);

    text.addEventListener("dblclick", function(event){
        console.log('ajsbd');
        EnableTextEditing(text.id);
    });

    // Buttons For Text Editing

    // Italic
    var txtEditButtonItalic = document.createElement('button');
    txtEditButtonItalic.className = 'textEditButton';
    txtEditButtonItalic.onclick = function() {

        formatText(txtEditButtonItalic,'italic');
    };
    txtEditButtonItalic.innerHTML = "<i>I</i>";
    txtEditButtonItalic.style.display = "none";
    video_element.appendChild(txtEditButtonItalic);


    // Bold
    var txtEditButtonBold = document.createElement('button');
    txtEditButtonBold.className = 'textEditButton';
    txtEditButtonBold.onclick = function() {
        formatText(txtEditButtonBold,'bold');
    };

    txtEditButtonBold.innerHTML = "<b>B</b>";
    txtEditButtonBold.style.display = "none";
    video_element.appendChild(txtEditButtonBold);

    // Strike
    var txtEditButtonStrk = document.createElement('button');
    txtEditButtonStrk.className = 'textEditButton';
    txtEditButtonStrk.onclick = function() {
        formatText(txtEditButtonStrk,'strikeThrough');
    };

    txtEditButtonStrk.innerHTML = "<s>S</s>";
    txtEditButtonStrk.style.display = "none";
    video_element.appendChild(txtEditButtonStrk);

    // Underline
    var txtEditButtonUnderline = document.createElement('button');
    txtEditButtonUnderline.className = 'textEditButton';
    txtEditButtonUnderline.onclick = function() {
        formatText(txtEditButtonUnderline,'underline');
    };

    txtEditButtonUnderline.innerHTML = "<u>U</u>";
    txtEditButtonUnderline.style.display = "none";
    video_element.appendChild(txtEditButtonUnderline);

    index += 1;
    addEventListener2AllElements();


}








// Video


function initiatevideo() {
    //console.log("aaa");
    var video = document.getElementById("source");
    var selectedvideo = document.getElementById("selection");
    video.src = selectedvideo.value;
    video.play();

}

function loadvideo(id) {
    
    const i = id.slice(12,Infinity);
    const file = document.getElementById(id).files[0];
    document.getElementById("source " + i).src = URL.createObjectURL(file);

    //console.log("VideoPlayer: source " + i + " Value: "+ .name);
    
     
    //document.getElementById("source " + i).play();
}

function loadImage(id) {
    
    const i = id.slice(12,Infinity);
   
    //console.log("VideoPlayer: source " + i + " Value: "+ .name);
   
   
}
