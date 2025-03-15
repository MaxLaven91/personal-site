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
            url: "./",
        },
        {
            name: "About",
            url: "./",
        },
        {
            name: "Blog",
            url: "./",
        },
    ];

    const projects = [
        {
            image: "https://example.com/home-icon.png",
            title: "myJet2",
            description: "This is a description of my project.",
        },
        {
            image: "https://example.com/home-icon.png",
            title: "Design System",
            description: "This is a description of my project.",
        },
    ];

    function createAnchor(link, className, icon = '') {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.className = className;
        anchor.innerHTML = `${link.name} ${icon}`;
        return anchor;
    }

    function createProject(project, listClass, anchorClass, divClass, titleClass, descriptionClass) {
        const list = document.createElement("li");
        list.className = listClass;
        
        const anchor = document.createElement("a");
        anchor.href = project.url || "#";
        anchor.className = anchorClass;

        const img = document.createElement("img");
        img.src = project.image || "https://example.com/home-icon.png";

        const div = document.createElement("div");
        div.className = divClass;

        const h3 = document.createElement("h3");
        h3.textContent = project.title;
        h3.className = titleClass;

        const p = document.createElement("p");
        p.textContent = project.description
        p.className = descriptionClass;

        img.src = project.image;

        list.appendChild(anchor);

        div.appendChild(h3);
        div.appendChild(p);

        anchor.appendChild(img);
        anchor.appendChild(div);

        return list;
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

    const projectsContainer = document.getElementById("projects");
    projects.forEach(project => {
        const list = createProject(project, "col-span-1 min-w-80 snap-start transition-opacity", "underline-offset-4 space-y-4", "space-y-1", "text-gray-900 leading-tight", "text-gray-500");
        projectsContainer.appendChild(list);
    });
});


