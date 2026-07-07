// ============================================
// David Heavener TV — Shared Navigation & Footer
// Edit THIS file to update the nav or footer on every page at once.
// Each page just needs:
//   <div id="dhtv-nav-root"></div>       (where the nav should appear)
//   <div id="dhtv-footer-root"></div>    (where the footer should appear)
//   <script src="/navigation.js"></script>   (before </body>)
// ============================================

const DHTV_NAV_HTML = `
<nav>
    <div class="nav-left">
        <a href="https://davidheavener.tv" class="logo"><img src="https://davidheavener.tv/DHTV_Logo.png" alt="David Heavener TV"></a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-links" id="navLinks">
            <li><a href="https://player.lightcast.com/2YjM3gTN" target="_blank">SERIES</a></li>
            <li><a href="https://davidheavenertv.lightcast.com" target="_blank">CHANNELS</a></li>
            <li><a href="https://davidheavener.tv/about/">ABOUT US</a></li>
            <li><a href="https://davidheavener.tv/trailer/">TRAILERS</a></li>
            <li><a href="https://davidheavener.tv/academy/">ACADEMY</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle">GIVE ▾</a>
                <div class="dropdown-content">
                    <a href="https://fundraise.givesmart.com/form/DxWVSw?vid=1n6tp0" target="_blank">GIVE MONTHLY</a>
                    <a href="https://davidheavener-tv.careasy.org/" target="_blank">DONATE A VEHICLE</a>
                    <a href="https://davidheavener-tv.careasy.org/real-estate-donation" target="_blank">DONATE REAL ESTATE</a>
                </div>
            </li>
            <li><a href="https://davidheavener.tv/book/">BOOK DAVID</a></li>
            <li><a href="https://davidheavener.tv/contact/">CONTACT</a></li>
            <li><a href="https://davidheavenertv.lightcast.com/player/19886/19886" target="_blank">WATCH LIVE</a></li>
        </ul>
        <a href="https://davidheavenertv.lightcast.com/" target="_blank" class="login-button">SIGN UP / LOG IN</a>
    </div>
</nav>
`;

const DHTV_FOOTER_HTML = `
<footer class="footer">
    <div class="social-links">
        <a href="https://www.facebook.com/lastevangelist" target="_blank" aria-label="Facebook">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        </a>
        <a href="https://www.instagram.com/lastevangelist/" target="_blank" aria-label="Instagram">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        </a>
        <a href="https://www.youtube.com/@DavidHeavenerLastEvangelist" target="_blank" aria-label="YouTube">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
        </a>
        <a href="mailto:admin@DavidHeavener.tv" aria-label="Email">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
        </a>
    </div>
    <p style="color: #666; font-family: 'Share Tech Mono', monospace; letter-spacing: 2px;">
        © 2026 FULL POWER WISDOM INC. // US REGISTERED 501(c)(3) // ALL RIGHTS RESERVED
    </p>
</footer>
`;

function dhtvInjectNavAndFooter() {
    const navRoot = document.getElementById('dhtv-nav-root');
    const footerRoot = document.getElementById('dhtv-footer-root');

    if (navRoot) navRoot.innerHTML = DHTV_NAV_HTML;
    if (footerRoot) footerRoot.innerHTML = DHTV_FOOTER_HTML;

    // Highlight the current page's nav link
    const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
    document.querySelectorAll('#navLinks a').forEach(function (link) {
        try {
            const linkPath = new URL(link.href).pathname;
            if (linkPath === currentPath) {
                link.style.color = '#fff';
            }
        } catch (e) { /* ignore malformed hrefs */ }
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (!hamburger || !navLinks) return;

    hamburger.onclick = function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    };

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('nav')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        }
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Mobile dropdown toggle
    document.querySelectorAll('.dropdown-toggle').forEach(function (toggle) {
        toggle.onclick = function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.closest('.dropdown').classList.toggle('active');
            }
        };
    });
}

document.addEventListener('DOMContentLoaded', dhtvInjectNavAndFooter);
