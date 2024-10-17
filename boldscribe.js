// Get elements
const dragBox = document.getElementById("dragBox");
const fileInput = document.getElementById("fileInput");
const browseFilesTrigger = document.getElementById("browseFilesTrigger");

// Function to handle file drops
function handleFileDrop(event) {
  event.preventDefault();  // Prevent default behavior (Prevent file from being opened)
  
  // Handle the dropped files
  const files = event.dataTransfer.files;
  console.log("Dropped files:", files);

  // You can process or upload the files here
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

// Handle file input change (optional)
fileInput.addEventListener("change", function(event) {
  const files = event.target.files;
  console.log("Selected files:", files);
  // You can process or upload the files here
});