document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
            });
        });
    }

    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        revealElements.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 70) {
                item.classList.add("visible");
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        const toggleBackToTop = () => {
            if (window.scrollY > 260) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        };

        toggleBackToTop();
        window.addEventListener("scroll", toggleBackToTop);

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const factButton = document.getElementById("factButton");
    const factText = document.getElementById("factText");

    if (factButton && factText) {
        const facts = [
            "Mario has appeared in platformers, kart racing, sports games, party games, RPGs, and puzzle titles.",
            "Yoshi became one of the most loved Mario allies after being introduced in Super Mario World.",
            "Super Mario 64 is often remembered as one of the most important 3D platform games ever made.",
            "Super Mario Galaxy gave the series a memorable space theme and gravity-based gameplay ideas.",
            "Super Mario Odyssey focused heavily on movement freedom and large areas to explore.",
            "The Mario series has stayed popular by changing its ideas while keeping its core style recognizable."
        ];

        let currentIndex = 0;

        factButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % facts.length;
            factText.textContent = facts[currentIndex];
        });
    }

    const filterButtons = document.querySelectorAll(".filter-btn");
    const seriesCards = document.querySelectorAll(".series-card");

    if (filterButtons.length && seriesCards.length) {
        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                filterButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");

                const selected = button.dataset.filter;

                seriesCards.forEach((card) => {
                    const category = card.dataset.category;

                    if (selected === "all" || category === selected) {
                        card.classList.remove("hidden");
                    } else {
                        card.classList.add("hidden");
                    }
                });
            });
        });
    }

    const characterSearch = document.getElementById("characterSearch");
    const roleButtons = document.querySelectorAll(".role-btn");
    const characterCards = document.querySelectorAll(".character-card");

    if (characterCards.length) {
        let currentRole = "all";

        const updateCharacterCards = () => {
            const searchValue = characterSearch ? characterSearch.value.trim().toLowerCase() : "";

            characterCards.forEach((card) => {
                const cardName = (card.dataset.name || "").toLowerCase();
                const cardRole = card.dataset.role || "";

                const nameMatch = cardName.includes(searchValue);
                const roleMatch = currentRole === "all" || cardRole === currentRole;

                if (nameMatch && roleMatch) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        };

        if (characterSearch) {
            characterSearch.addEventListener("input", updateCharacterCards);
        }

        if (roleButtons.length) {
            roleButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    roleButtons.forEach((btn) => btn.classList.remove("active"));
                    button.classList.add("active");
                    currentRole = button.dataset.roleFilter;
                    updateCharacterCards();
                });
            });
        }
    }

    const toggleButtons = document.querySelectorAll(".resource-toggle");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.dataset.target;
            const target = document.getElementById(targetId);

            if (target) {
                target.classList.toggle("show");
            }
        });
    });

    if (window.M) {
        const collapsibles = document.querySelectorAll(".collapsible");
        const modals = document.querySelectorAll(".modal");
        const materialboxed = document.querySelectorAll(".materialboxed");

        M.Collapsible.init(collapsibles);
        M.Modal.init(modals);
        M.Materialbox.init(materialboxed);
    }
});