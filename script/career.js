// Get all the segments
const segments = document.querySelectorAll(".segment");
let texts = document.querySelectorAll(".career-text");

// Add click event listener to each segment
segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    // Check if active class is already present
    if (!segment.classList.contains("active")) {
      // Remove active class from all segments
      segments.forEach((segment) => {
        segment.classList.remove("active");
      });

      // Add active class to the clicked segment
      segment.classList.add("active");
    }
  });
});


function showProject(args){
  const projects = document.querySelectorAll(".project-layer")

  projects.forEach((project) => {
    if (project.classList.contains(args)) {
      project.classList.remove("hidden");
    }
    else{
      project.classList.add("hidden");
    }

  })
}