// function editTemplateDetails(templateId, formDetailsJson) { 
//     document.getElementById("modelOpenBtn").click();  
//     var formDetailsArray = JSON.parse(formDetailsJson);
//     var formHtml = "";
//     if(formDetailsArray.length>0){
//         // for(){
//         //     if(formArray[i].elementType="editor"){
//         //         formHtml += '<div id="editor-container"></div>';
//         //         loadEditor();
//         //     }else if(formArray[i].elementType="editor"){
//         //         formHtml += '<div class="row"><div class="col-md-12"><input id="text1" class="form-control" type="text" placeholder="text"></input></div></div>';
//         //     }
//         // }  
//     }    
//     document.getElementById("formBody").innerHTML = formHtml;
//   } 

// const { Button } = require("bootstrap");

  

  //API call
  function editTemplateDetails(pageTemplateId) {
    const token = localStorage.getItem('token');
    var xhr = new XMLHttpRequest();

    // Configure the request (GET in this case)
    xhr.open('GET', 'http://192.168.1.38:5050/api/page_template/' + pageTemplateId + '/edit', true);

    // Set the Authorization header with the token
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
debugger
    // Set up a callback function to handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                if (data.success) {
                    if (data.response.formDetails.length > 0) {
                        var formDetails = data.response.formDetails;
                        var formhtml = "";
                        formhtml += `<div class="row"><div class="col-md-12"><input id="pageTemplateId" class="form-control d-none" type="text" placeholder="text" value="${pageTemplateId}"></input></div></div>`;
                       for (let i = 0; i < formDetails.length; i++) {
                            if (formDetails[i].elementType == "text") {
                                formhtml += `<div class="row"><div class="col-md-12"><input id="${formDetails[i].elementName}" class="form-control" type="text" placeholder="text" value="${formDetails[i].elementValue}"></input></div></div>`;
                            } else if (formDetails[i].elementType == "img") {
                                formhtml += `<img src="${formDetails[i].elementValue}" id="${formDetails[i].elementName}" alt="profileImage" class="border me-2 my-2" width="150px"><input type="file" id="${formDetails[i].elementName}" onchange="profileImageUpload(event, '${formDetails[i].elementName}')" class="btn" />`;
                            }else if (formDetails[i].elementType == "editor") {
                                formhtml += `<div id="editor-container-${formDetails[i].elementName}">${formDetails[i].elementValue}</div>`;
                                formhtml += `<div class="row"><div class="col-md-12"><input id="text-editor-container-${formDetails[i].elementName}" class="form-control d-none" type="text" placeholder="text"></input></div></div>`;
                            }
                        }
                        document.getElementById("formBody").innerHTML = formhtml;

                        for (let i = 0; i < formDetails.length; i++) {
                            if (formDetails[i].elementType == "editor") {
                                loadEditor('editor-container-'+formDetails[i].elementName);
                            }
                        }
                        
                    }
                    document.getElementById("modelOpenBtn").click();
                }
            } else {
                alert('Request failed with Template:', xhr.status);
            }
        }
    };

    // Send the request
    xhr.send();
}
  
// let profileImage = '';  // Variable to store the image data as a base64 string

// // Function to handle image upload
// function profileImageUpload(event,elementName) {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//         profileImage = reader.result;  
//         console.log(profileImage)
//         const imagePreview = document.getElementById(elementName);
//         imagePreview.src = profileImage;  // Set the preview image source
//     }

//     // If a file was selected, start reading it as a Data URL (Base64)
//     if (file) {
//         reader.readAsDataURL(file);  // This will trigger the reader.onloadend callback
//     }
// }

function profileImageUpload(event, elementName) {
    const fileInput = event.target;
    const file = fileInput.files ? fileInput.files[0] : null;
    
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = function () {
        const imagePreview = document.getElementById(elementName);
        if (imagePreview) {
          imagePreview.src = reader.result;  // Set the preview image source
        }
      };
  
      reader.readAsDataURL(file);  // Trigger the file reader
    }
  }
  

  function updateHtmlOutput(id)
  {
      let html = getQuillHtml(id);
      document.getElementById('text-' + id).value  = html;
     
  }

  function getQuillHtml(id) { return this["var-"+id].root.innerHTML; }
  
  function loadEditor(id) {
    // Initialize QUill editor
    this["var-"+id] = new Quill('#' + id, {
        modules: {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6,  false] }],
            ['bold', 'italic', 'underline','strike'],
            ['link'],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['clean']
        ]
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'  // or 'bubble'
    });   
    
    this["var-"+id].on('text-change', function(delta, source) {
        updateHtmlOutput(id)
    })
}

  //quill editor build in angular
//   function loadEditor() {
//     // Loop through all editor containers and initialize Quill for each
//     const editorContainers = document.querySelectorAll('[id^="editor-container-"]');
    
//     editorContainers.forEach(container => {
//         const quill = new Quill(container, {
//             theme: 'snow',
//             modules: {
//                 toolbar: [
//                     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//                     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//                     ['bold', 'italic', 'underline'],
//                     ['link'],
//                     [{ 'align': [] }],
//                     ['blockquote'],
//                     [{ 'color': [] }, { 'background': [] }],
//                 ]
//             },
//             placeholder: 'Compose an epic...',
//             readOnly: false,
//             scrollingContainer: container // Make it scrollable within its own container
//         });
//         // return quill.root.innerHTML;
//     });
    
// }

 
  // function cancelParticularDiv(index) {
  //   this.builderPage.splice(index, 1); 
  // }

