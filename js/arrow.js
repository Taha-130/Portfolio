document.addEventListener("DOMContentLoaded", function () {
    const competencyArrows = document.querySelectorAll(".arrow-segment");
  
    competencyArrows.forEach((arrow) => {
      arrow.addEventListener("click", function () {
        const competency = arrow.textContent.toLowerCase(); // Get the competency name
        const skillSection = arrow.closest('.skills');
        const projects = skillSection.querySelectorAll(".project");
  
        // Hide all projects
        projects.forEach((project) => {
          project.style.display = "none";
        });
  
        // Show projects associated with the clicked competency
        projects.forEach((project) => {
          if (project.classList.contains(competency)) {
            project.style.display = "block";
          }
        });
      });
    });
  });
  