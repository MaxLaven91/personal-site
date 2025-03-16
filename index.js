document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = [
        {
            name: "Instagram",
            url: "./",
            icon: `<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd"/>`,
        },
        {
            name: "Discord",
            url: "./",
            icon: `<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd"/>`,
        },
        {
            name: "Collab",
            url: "./",
            icon: `<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd"/>`,
        },
    ];

    const headerLinks = [
        {
            name: "Home",
            url: "./index.html",
        },
        {
            name: "About",
            url: "./",
        },
        {
            name: "Blog",
            url: "./blog.html",
        },
    ];

    function createAnchor(link, className, icon = '') {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.className = className;
        anchor.innerHTML = `${link.name} ${icon}`;
        return anchor;
    }

    const socialContainer = document.getElementById("social-links");
    socialLinks.forEach(link => {
        const icon = `
        <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            ${link.icon}
        </svg>
            `;
        const anchor = createAnchor(link, "flex items-center bg-gray-100 rounded-full px-3 py-1.5 text-sm transition-colors hover:text-gray-900 hover:bg-gray-200", icon);
        socialContainer.appendChild(anchor);    
    });

    const headerContainer = document.getElementById("header-links");
    headerLinks.forEach(link => {
        const anchor = createAnchor(link, "text-gray-700 rounded-lg px-3 py-1.5 text-sm transition-colors hover:text-gray-900 hover:bg-gray-100");
        headerContainer.appendChild(anchor);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "myJet2",
            description: "This is a description of my project.",
            url: "./myjet2.html"
        },
        {
            image: "https://example.com/home-icon.png",
            title: "Jet2 Design System",
            description: "This is a description of my project.",
        }
    ];

    function createProject(project, anchorClass, divClass, titleClass, descriptionClass) {
        const anchor = document.createElement("a");
        anchor.href = project.url || "#";
        anchor.className = anchorClass;

        const img = document.createElement("img");
        img.src = project.image || "https://example.com/home-icon.png";
        img.className = "aspect-video overflow-hidden rounded-md bg-secondary";

        const div = document.createElement("div");
        div.className = divClass;

        const h3 = document.createElement("h3");
        h3.textContent = project.title;
        h3.className = titleClass;

        const p = document.createElement("p");
        p.textContent = project.description
        p.className = descriptionClass;

        img.src = project.image;

        div.appendChild(h3);
        div.appendChild(p);

        anchor.appendChild(img);
        anchor.appendChild(div);

        return anchor;
    }

    const projectsContainer = document.getElementById("projects");
    projects.forEach(project => {
        const anchor = createProject(project, "underline-offset-4 space-y-4", "flex flex-col items-center", "text-gray-900 w-full text-left", "text-gray-500 w-full text-left");
        projectsContainer.appendChild(anchor);
    });
});

function checkPassword () {
    const correctHash = "81dc9bdb52d04dc20036dbd8313ed055"; // Hash of "1234"
    const userInput = document.getElementById("password").value;
    const userHash = md5(userInput); // Hash the user input

    if (userHash === correctHash) {
        document.getElementById("protected").style.display = "block";
        document.getElementById("password").style.display = "none";
        document.getElementById("password-button").style.display = "none";
        document.getElementById("password-text").style.display = "none";

    } else {
        alert("Incorrect password. Please try again.");
    }
}

// Simple MD5 Hash Function (Use a proper library in production)
function md5(string) {
    return CryptoJS.MD5(string).toString();
}

document.getElementById("password-button").addEventListener("click", checkPassword);