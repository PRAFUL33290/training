(function () {
    const body = document.body;
    if (!body.classList.contains("layout-dash")) return;

    const sidebar = document.getElementById("sidebar");
    const toggle = document.getElementById("sidebar-toggle");
    const closeBtn = document.getElementById("sidebar-close");
    const backdrop = document.getElementById("sidebar-backdrop");

    function setOpen(open) {
        body.classList.toggle("sidebar-open", open);
        if (toggle) toggle.setAttribute("aria-expanded", String(open));
        if (backdrop) backdrop.hidden = !open;
        if (open) {
            closeBtn?.focus();
        }
    }

    function close() {
        setOpen(false);
    }

    function open() {
        setOpen(true);
    }

    toggle?.addEventListener("click", () => {
        const isOpen = body.classList.contains("sidebar-open");
        setOpen(!isOpen);
    });

    closeBtn?.addEventListener("click", close);
    backdrop?.addEventListener("click", close);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && body.classList.contains("sidebar-open")) {
            close();
            toggle?.focus();
        }
    });

    // Close drawer after in-page navigation on mobile
    sidebar?.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 960px)").matches) {
                close();
            }
        });
    });

    // Highlight current lesson anchor while scrolling
    const subLinks = Array.from(
        sidebar?.querySelectorAll(".sidebar-link-sub[href^='#']") || []
    );
    const sections = subLinks
        .map((link) => {
            const id = link.getAttribute("href")?.slice(1);
            const el = id ? document.getElementById(id) : null;
            return el ? { link, el } : null;
        })
        .filter(Boolean);

    if (sections.length && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const match = sections.find((s) => s.el === entry.target);
                    if (!match) return;
                    subLinks.forEach((l) => l.classList.remove("is-current"));
                    match.link.classList.add("is-current");
                });
            },
            { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
        );
        sections.forEach((s) => observer.observe(s.el));
    }
})();
