document.addEventListener("DOMContentLoaded", function () {
    const links = [
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

    const container = document.getElementById("social-links");

    links.forEach(link => {
        const anchor = document.createElement("a");
        anchor.href = link.url
        anchor.className = "flex w-fit items-center rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200";
        anchor.innerHTML = `
            ${link.name}
        <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            ${link.icon}
        </svg>
            `;
        container.appendChild(anchor);
    });
});