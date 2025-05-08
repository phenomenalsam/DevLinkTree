// 1. Typewriter Effect for Name or Bio
function typeWriterEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = "";
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  window.addEventListener("load", () => {
    const nameEl = document.querySelector("h1");
    if (nameEl) typeWriterEffect(nameEl, "Your Name");
  });
  
  // 2. Fetch Latest GitHub Repos
  fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos?sort=updated")
    .then(res => res.json())
    .then(data => {
      const ul = document.createElement("ul");
      data.slice(0, 5).forEach(repo => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>: ${repo.description || ""}`;
        ul.appendChild(li);
      });
      document.body.appendChild(ul);
    })
    .catch(err => console.error("GitHub error", err));
  
  // 3. Tilt Effect on .tilt elements
  document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `rotateX(${ -y / 20 }deg) rotateY(${ x / 20 }deg)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
  
  // 4. Dark Mode Toggle (optional if you add a button for it)
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "d") toggleDarkMode(); // press 'd' to toggle
  });
  
  // 5. Particle Background Loader
  const particleScript = document.createElement("script");
  particleScript.src = "https://cdn.jsdelivr.net/npm/particles.js";
  particleScript.onload = () => {
    const div = document.createElement("div");
    div.id = "particles-js";
    div.style = "position:fixed;width:100%;height:100%;z-index:-1;top:0;left:0;";
    document.body.prepend(div);
    particlesJS("particles-js", {
      particles: {
        number: { value: 50 },
        size: { value: 3 },
        color: { value: "#00aced" },
        line_linked: { enable: true, distance: 150 }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
      }
    });
  };
  document.body.appendChild(particleScript);

