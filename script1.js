function animateProject(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s ease";
}

function resetProject(element) {
    element.style.transform = "scale(1)";
}

function showProjectDetails(title, description) {
    alert(`${title}\n\n${description}`);
}

document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("click", function() {
            const title = this.querySelector("h2").innerText;
            const description = this.querySelector("p").innerText;
            showProjectDetails(title, description);
        });
    });
});
