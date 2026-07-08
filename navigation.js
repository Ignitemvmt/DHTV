// ============================================
// David Heavener TV — Shared Navigation & Footer
// Edit THIS file to update the nav, footer, OR their styling on every page at once.
// Each page just needs:
//   <div id="dhtv-nav-root"></div>       (where the nav should appear)
//   <div id="dhtv-footer-root"></div>    (where the footer should appear)
//   <script src="/navigation.js"></script>   (before </body>)
//
// IMPORTANT: the CSS below is the single source of truth for the nav/footer
// look. It's injected fresh on every page, so it no longer matters whether
// an individual page's own <style> block happens to define (or forgot to
// define) .dropdown, .footer, etc. This is what fixes pages drifting apart.
// ============================================

const DHTV_NAV_FOOTER_CSS = `
<style id="dhtv-shared-styles">
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        padding: 1rem 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(10px);
        border-bottom: 2px solid rgba(218, 165, 32, 0.5);
        box-shadow: 0 0 20px rgba(218, 165, 32, 0.3);
        box-sizing: border-box;
    }

    .nav-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 1.5rem;
    }

    .logo {
        flex-shrink: 0;
        text-decoration: none;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 10000;
    }

    .logo img {
        height: 45px;
        width: auto;
        position: relative;
        z-index: 10000;
    }

    .nav-links {
        display: flex;
        gap: 1.5rem;
        list-style: none;
        flex-grow: 1;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    .nav-links li {
        white-space: nowrap;
    }

    .nav-links a {
        color: #DAA520;
        text-decoration: none;
        font-family: 'Teko', sans-serif;
        font-weight: 500;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        position: relative;
        transition: color 0.3s;
        white-space: nowrap;
    }

    .nav-links a:hover {
        color: #FFD700;
    }

    .nav-links a.dhtv-current {
        color: #fff;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: rgba(0, 0, 0, 0.98);
        min-width: 220px;
        box-shadow: 0 8px 30px rgba(218, 165, 32, 0.5);
        border: 2px solid rgba(218, 165, 32, 0.5);
        z-index: 1000;
        padding-top: 0;
    }

    /* Invisible bridge to prevent gap */
    .dropdown::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 15px;
        background: transparent;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content a {
        color: #DAA520;
        padding: 1rem 1.5rem;
        text-decoration: none;
        display: block;
        font-family: 'Teko', sans-serif;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-bottom: 1px solid rgba(218, 165, 32, 0.2);
        transition: all 0.3s;
    }

    .dropdown-content a:last-child {
        border-bottom: none;
    }

    .dropdown-content a:hover {
        background: rgba(218, 165, 32, 0.15);
        color: #FFD700;
        padding-left: 2rem;
    }

    .login-button {
        background: linear-gradient(135deg, #DAA520, #FFD700);
        color: #000;
        padding: 0.6rem 1.5rem;
        border: none;
        border-radius: 4px;
        font-family: 'Teko', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.3s;
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .login-button:hover {
        box-shadow: 0 0 25px rgba(218, 165, 32, 1);
        transform: translateY(-2px);
    }

    .footer {
        padding: 4rem 5%;
        border-top: 2px solid rgba(218, 165, 32, 0.3);
        text-align: center;
        background: rgba(0, 0, 0, 0.9);
        box-shadow: 0 -20px 40px rgba(0, 0, 0, 0.8);
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .social-links a {
        color: #DAA520;
        font-size: 2rem;
        transition: all 0.3s;
        text-decoration: none;
        text-shadow: 0 0 5px rgba(218, 165, 32, 0.5);
    }

    .social-links a:hover {
        color: #fff;
        text-shadow:
            0 0 20px rgba(218, 165, 32, 1),
            0 0 40px rgba(218, 165, 32, 0.6);
        transform: scale(1.1);
    }

    /* Hamburger Menu */
    .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        gap: 5px;
        padding: 10px;
        z-index: 10001;
        background: none;
        border: none;
        -webkit-tap-highlight-color: transparent;
        position: relative;
    }

    .hamburger span {
        display: block;
        width: 25px;
        height: 3px;
        background: #DAA520;
        transition: all 0.3s;
        pointer-events: none;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    /* Tablet breakpoint */
    @media (max-width: 1024px) {
        .nav-links {
            gap: 0.8rem;
        }

        .nav-links a {
            font-size: 0.85rem;
            letter-spacing: 1px;
        }

        .login-button {
            padding: 0.4rem 0.8rem;
            font-size: 0.75rem;
            letter-spacing: 0.5px;
            white-space: nowrap;
        }

        .logo img {
            height: 40px;
        }
    }

    @media (max-width: 900px) {
        nav {
            padding: 0.8rem 3%;
        }

        .nav-links {
            gap: 0.6rem;
        }

        .nav-links a {
            font-size: 0.75rem;
            letter-spacing: 0.5px;
        }

        .login-button {
            padding: 0.35rem 0.6rem;
            font-size: 0.7rem;
        }

        .logo img {
            height: 35px;
        }
    }

    @media (max-width: 768px) {
        nav {
            padding: 0.8rem 4%;
        }

        .nav-left {
            width: 100%;
            justify-content: space-between;
            gap: 0;
        }

        .logo img {
            height: 35px;
        }

        .hamburger {
            display: flex;
            margin-left: auto;
        }

        .login-button {
            padding: 0.4rem 0.8rem;
            font-size: 0.7rem;
            letter-spacing: 1px;
            margin-left: auto;
            margin-right: 1rem;
        }

        .nav-links {
            display: none;
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.98);
            flex-direction: column;
            padding: 1rem;
            gap: 0;
            border-bottom: 2px solid rgba(218, 165, 32, 0.5);
        }

        .nav-links.active {
            display: flex;
        }

        .nav-links li {
            width: 100%;
            text-align: center;
            border-bottom: 1px solid rgba(218, 165, 32, 0.2);
        }

        .nav-links li:last-child {
            border-bottom: none;
        }

        .nav-links a {
            font-size: 0.85rem;
            letter-spacing: 2px;
            display: block;
            padding: 1rem;
        }

        .dropdown-content {
            position: static;
            display: none;
            box-shadow: none;
            border: none;
            background: rgba(218, 165, 32, 0.1);
        }

        .dropdown.active .dropdown-content {
            display: block;
        }
    }

    @media (max-width: 480px) {
        .login-button {
            padding: 0.3rem 0.6rem;
            font-size: 0.65rem;
        }
    }
</style>
`;

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
    // Inject the shared stylesheet once (avoid duplicates if this ever runs twice)
    if (!document.getElementById('dhtv-shared-styles')) {
        document.head.insertAdjacentHTML('beforeend', DHTV_NAV_FOOTER_CSS);
    }

    const navRoot = document.getElementById('dhtv-nav-root');
    const footerRoot = document.getElementById('dhtv-footer-root');

    if (navRoot) navRoot.innerHTML = DHTV_NAV_HTML;
    if (footerRoot) footerRoot.innerHTML = DHTV_FOOTER_HTML;

    // Highlight the current page's nav link.
    // Only compare against the TOP-LEVEL nav links that point at davidheavener.tv
    // itself — this skips the "GIVE" dropdown toggle (href="#", which always
    // resolves to the current page) and external links like SERIES/CHANNELS/
    // WATCH LIVE (which point at lightcast.com and would otherwise falsely
    // match the homepage's "/" path).
    const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
    document.querySelectorAll('#navLinks > li > a').forEach(function (link) {
        if (link.classList.contains('dropdown-toggle')) return;
        try {
            const url = new URL(link.href, window.location.href);
            if (url.hostname !== window.location.hostname) return;
            const linkPath = url.pathname.replace(/\/index\.html$/, '/');
            if (linkPath === currentPath) {
                link.classList.add('dhtv-current');
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
