// Get elements
const dragBox = document.getElementById("dragBox");
const fileInput = document.getElementById("fileInput");
const browseFilesTrigger = document.getElementById("browseFilesTrigger");
const fileMessage = document.getElementById("fileMessage");  // Message element

// Function to handle file drops
function handleFileDrop(event) {
  event.preventDefault();  // Prevent default behavior (Prevent file from being opened)
  
  // Handle the dropped files
  const files = event.dataTransfer.files;
  
  if (files.length > 0) {
    fileMessage.textContent = `${files.length} file(s) dropped successfully.`;
  } else {
    fileMessage.textContent = "No files were dropped.";
  }
}

// Highlight the drag box when dragging files over it
function highlightDragBox(event) {
  event.preventDefault();
  dragBox.classList.add("drag-over");
}

// Remove highlight when the drag leaves the box
function unhighlightDragBox() {
  dragBox.classList.remove("drag-over");
}

// Add event listeners for drag-and-drop functionality
dragBox.addEventListener("dragover", highlightDragBox);
dragBox.addEventListener("dragleave", unhighlightDragBox);
dragBox.addEventListener("drop", function(event) {
  unhighlightDragBox(); // Remove highlight
  handleFileDrop(event);  // Handle dropped files
});

// Trigger the file input when clicking on "Browse Files"
browseFilesTrigger.addEventListener("click", function() {
  fileInput.click();
});

// Handle file input change
fileInput.addEventListener("change", function(event) {
  const files = event.target.files;
  
  if (files.length > 0) {
    fileMessage.textContent = `${files.length} file(s) selected successfully.`;
  } else {
    fileMessage.textContent = "No files were selected.";
  }
});

// Faq
document.querySelectorAll('.ask-faq').forEach(faq => {
  faq.addEventListener('click', function() {
    // Toggle the "active" class
    this.classList.toggle('active');

    // Toggle the icon between plus and minus
    const icon = this.querySelector('.toggle-icon');
    if (this.classList.contains('active')) {
      icon.src = './logo_icon/minus.png'; // Change to minus icon
    } else {
      icon.src = './logo_icon/plus.png';  // Change back to plus icon
    }
  });
});