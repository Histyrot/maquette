function initImageFade() {
    const reveal = (img) => {
        img.classList.add("img-fade--ready");
    };

    document.querySelectorAll("img").forEach((img) => {
        if (img.hasAttribute("data-no-fade")) return;

        if (img.complete && img.naturalWidth > 0) {
            img.classList.add("img-fade", "img-fade--ready");
            return;
        }

        img.classList.add("img-fade");
        img.addEventListener("load", () => reveal(img), { once: true });
        img.addEventListener("error", () => reveal(img), { once: true });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initImageFade();

    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }

    const header = document.getElementById("main-header");
    const headerContainer = document.getElementById("header-container");
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const lottieContainer = document.getElementById("lottie-menu");

    if (!header || !headerContainer || !btn || !menu || !lottieContainer || !window.lottie) {
        return;
    }

    let isOpen = false;
    let lastScrollY = window.scrollY;

    const lottieMenu = window.lottie.loadAnimation({
        container: lottieContainer,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "assets/json/gousse-de-vanille.json",
    });

    btn.addEventListener("click", () => {
        isOpen = !isOpen;

        if (isOpen) {
            menu.classList.remove("max-h-0", "opacity-0");
            menu.classList.add("max-h-[400px]", "opacity-100");
            lottieMenu.setDirection(1);
            lottieMenu.play();
            return;
        }

        menu.classList.remove("max-h-[400px]", "opacity-100");
        menu.classList.add("max-h-0", "opacity-0");
        lottieMenu.setDirection(-1);
        lottieMenu.play();
    });

    window.addEventListener(
        "scroll",
        () => {
            const currentScrollY = window.scrollY;
            if (isOpen) return;

            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                header.classList.add("header-hidden");
            } else {
                header.classList.remove("header-hidden");
            }

            if (currentScrollY > 50) {
                header.classList.add("shadow-md");
                headerContainer.classList.add("py-3");
                headerContainer.classList.remove("py-5");
            } else {
                header.classList.remove("shadow-md");
                headerContainer.classList.add("py-5");
                headerContainer.classList.remove("py-3");
            }

            lastScrollY = currentScrollY;
        },
        { passive: true }
    );
});
