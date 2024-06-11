jQuery(document).ready(function ($) {
  // Function to initialize dropzone
  function initDropzone($fileInputContainer) {
    const $fileInput = $fileInputContainer.find('input[type="file"]');

    // Create dropzone element
    const $dropzone = $(
      '<div class="dropzone"><p>Drag & drop files here or click to select files</p></div>'
    );
    $fileInputContainer.prepend($dropzone);

    // Create file list container
    const $fileList = $('<div id="fileList"></div>');
    $fileInputContainer.append($fileList);

    // Hide original file input
    $fileInput.addClass("rakesh-hidden");

    // Event listeners for dropzone
    $dropzone.on("click", function () {
      $fileInput.click();
    });

    $dropzone.on("dragover", function (event) {
      event.preventDefault();
      $dropzone.css("background-color", "#b7c3cf");
    });

    $dropzone.on("dragleave", function (event) {
      event.preventDefault();
      $dropzone.css("background-color", "white");
    });

    $dropzone.on("drop", function (event) {
      event.preventDefault();
      $dropzone.css("background-color", "white");
      const files = event.originalEvent.dataTransfer.files;
      handleFiles(files);
    });

    $fileInput.on("change", function () {
      const files = this.files;
      handleFiles(files);
    });

    // Handle files
    function handleFiles(files) {
      $fileList.empty();
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const $fileItem = $('<div class="file-item">' + file.name + "</div>");
        const $removeButton = $('<button class="remove-file">Remove</button>');

        $removeButton.on("click", function () {
          $fileItem.remove();
        });

        $fileItem.append($removeButton);
        $fileList.append($fileItem);
      }
    }
  }

  // Initialize dropzone for each Elementor file input container
  $(".elementor-field-group-attach_files").each(function () {
    initDropzone($(this));
  });
});
