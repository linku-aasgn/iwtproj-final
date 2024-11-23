// JavaScript for File Upload Functionality
document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        
        // Add the uploaded file to the list
        const listItem = document.createElement('li');
        listItem.textContent = fileName;
        fileList.appendChild(listItem);
        
        // Clear the input after upload
        fileInput.value = '';
    }
});
