// The function that will take care of everything
function updateProgressBar() {
    // Retrieve nodes & Scroll value
    var progressBar = document.querySelector(".progress-bar");
    var content = document.querySelector(".content");
    var scroll = window.pageYOffset;
    
    // Compute bottom part of the long content
    var endPosition = content.offsetTop + content.offsetHeight - window.innerHeight;
    
    // Compute percent on a 0-100 scale
    var progress = Math.min(Math.ceil( (scroll / endPosition) * 100), 100);
  
    // Update progress bar
    progressBar.style.width = `${progress}%`;
  }
  
  window.onload = function() {
    // If user has scrolled before the page has fully loaded, update the progress bar to  ensure consistence
    updateProgressBar();
    
    // On scroll, update the progress bar
    document.addEventListener('scroll', updateProgressBar);
  }