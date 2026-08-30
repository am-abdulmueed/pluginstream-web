
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

(function () {
    var yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
})();

function setupMobileNav() {
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const closeNav = document.querySelector('.close-mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav-links a');

    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeMobileMenu = () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (closeNav) {
        closeNav.addEventListener('click', closeMobileMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close on overlay click
    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav) {
            closeMobileMenu();
        }
    });
}

function initializeApp() {
    setupScreenshotCycling();
    setupMobileScreenshotCycling();
    setupDownloadButtonStats();
    setupDownloadButtons();
    setupDownloadModal();
    setupScrollEffects();
    setupPhoneAnimations();
    setupFeaturesAnimation();
    setupFAQ();
    setupLinuxOptions();
    setupFloatingDownload();
    setupMobileNav();
}

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {

        const feedback = element.querySelector('.copy-feedback');
        feedback.classList.add('show');

        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            const feedback = element.querySelector('.copy-feedback');
            feedback.classList.add('show');
            setTimeout(() => {
                feedback.classList.remove('show');
            }, 2000);
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }
        document.body.removeChild(textArea);
    });
}

function setupScreenshotCycling() {
    const screenshots = document.querySelectorAll('.screenshot');
    let currentIndex = 0;

    function showNextScreenshot() {
        screenshots[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % screenshots.length;

        screenshots[currentIndex].classList.add('active');
    }

    setInterval(showNextScreenshot, 4000);

    const phoneScreen = document.querySelector('.phone-screen');
    phoneScreen.addEventListener('click', function () {
        showNextScreenshot();
    });
}

function setupMobileScreenshotCycling() {
    const mobileScreenshots = document.querySelectorAll('.mobile-screenshot');
    let currentMobileIndex = 0;

    function showNextMobileScreenshot() {
        mobileScreenshots[currentMobileIndex].classList.remove('active');

        currentMobileIndex = (currentMobileIndex + 1) % mobileScreenshots.length;

        mobileScreenshots[currentMobileIndex].classList.add('active');
    }

    setInterval(showNextMobileScreenshot, 3000);

    const mobilePhoneScreen = document.querySelector('.mobile-phone-screen');
    if (mobilePhoneScreen) {
        mobilePhoneScreen.addEventListener('click', function () {
            showNextMobileScreenshot();
        });
    }
}

function setupDownloadModal() {
    const modal = document.getElementById('download-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.close-modal');
    const initialState = document.getElementById('modal-initial-state');
    const successState = document.getElementById('modal-success-state');
    const platformCards = document.querySelectorAll('.platform-card');
    const selectedPlatformSpan = document.getElementById('selected-platform');

    function closeModal() {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');

        // Reset modal state after closing
        setTimeout(() => {
            if (initialState) initialState.style.display = 'block';
            if (successState) successState.style.display = 'none';
        }, 300);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Platform Selection Logic
    platformCards.forEach(card => {
        card.addEventListener('click', function () {
            const platform = this.getAttribute('data-platform');
            if (selectedPlatformSpan) selectedPlatformSpan.textContent = platform;

            // Show success state
            if (initialState) initialState.style.display = 'none';
            if (successState) successState.style.display = 'block';

            // Trigger actual download based on platform
            if (platform === 'Android') {
                const phoneBtn = document.querySelector('.phone-download');
                if (phoneBtn) phoneBtn.click();
            } else {
                const tvBtn = document.querySelector('.tv-download');
                if (tvBtn) tvBtn.click();
            }
        });
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

function setupFloatingDownload() {
    const floatingBtn = document.getElementById('floating-download');
    const featuresSection = document.getElementById('features');
    const modal = document.getElementById('download-modal');

    if (!floatingBtn || !featuresSection) return;

    window.addEventListener('scroll', function () {
        const featuresTop = featuresSection.getBoundingClientRect().top;
        if (featuresTop < window.innerHeight * 0.8) {
            floatingBtn.classList.add('show');
        } else {
            floatingBtn.classList.remove('show');
        }
    });

    floatingBtn.addEventListener('click', function () {
        if (modal) {
            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
        }
    });
}

function setupDownloadButtons() {
    const downloadBtns = document.querySelectorAll('.download-btn');
    const modal = document.getElementById('download-modal');
    const initialState = document.getElementById('modal-initial-state');
    const successState = document.getElementById('modal-success-state');
    const selectedPlatformSpan = document.getElementById('selected-platform');

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            // Check if this click was NOT from the modal's programmatic click
            if (!e.isTrusted) return;

            const isPhone = btn.classList.contains('phone-download');
            const platform = isPhone ? 'Android' : 'TV';

            if (modal && successState && initialState) {
                if (selectedPlatformSpan) selectedPlatformSpan.textContent = platform;

                modal.classList.add('show');
                modal.setAttribute('aria-hidden', 'false');
                initialState.style.display = 'none';
                successState.style.display = 'block';
            }

            btn.style.transform = 'translateY(-2px) scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
        });

        btn.addEventListener('mouseenter', function () {
            btn.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
        });

        btn.addEventListener('mouseleave', function () {
            btn.style.boxShadow = 'none';
        });
    });
}

function setupDownloadButtonStats() {
    const phoneCountEl = document.querySelector('.phone-count');
    const tvCountEl = document.querySelector('.tv-count');

    const phoneRepo = 'am-abdulmueed/pluginstream';
    const tvRepo = 'pluginstream/pluginstream-tv';
    const statsRepo = 'recloudstream/cloudstream';
    const phoneLandingUrl = 'download.html?platform=phone';
    const tvLandingUrl = 'download.html?platform=tv';

    function formatDownloadCount(count) {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        }
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count;
    }

    async function fetchTotalDownloads(repo) {
        try {
            const response = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=100`);
            if (!response.ok) throw new Error('API error');
            const releases = await response.json();

            let totalDownloads = 0;
            releases.forEach(release => {
                if (release.assets) {
                    release.assets.forEach(asset => {
                        totalDownloads += (asset.download_count || 0);
                    });
                }
            });
            return totalDownloads;
        } catch (error) {
            console.error(`Error fetching stats for ${repo}:`, error);
            return null;
        }
    }

    // Fetch stats from CloudStream for the Phone count display
    fetchTotalDownloads(statsRepo).then(count => {
        if (count !== null) {
            const formattedCount = `${formatDownloadCount(count)} total downloads`;
            const phoneCountEls = document.querySelectorAll('.phone-count');
            phoneCountEls.forEach(el => {
                el.textContent = formattedCount;
            });
        }
    });

    // Set fixed count for TV version as requested
    if (tvCountEl) {
        tvCountEl.textContent = '230k total downloads';
    }

    // Route users through the branded download hub so ads stay localized there.
    const phoneBtn = document.querySelector('.phone-download');
    if (phoneBtn) phoneBtn.href = phoneLandingUrl;

    const tvBtn = document.querySelector('.tv-download');
    if (tvBtn) tvBtn.href = tvLandingUrl;
}


function setupScrollEffects() {
    let ticking = false;

    function updateScrollEffects() {
        const scrolled = window.pageYOffset;

        const mainContent = document.querySelector('.main-content');
        const opacity = Math.max(0, 1 - scrolled / 500);
        mainContent.style.opacity = opacity;

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

function setupPhoneAnimations() {
}

function setupFeaturesAnimation() {
    const featureCards = document.querySelectorAll('.feature-card');
    const featureCategories = document.querySelectorAll('.feature-category');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    featureCategories.forEach(cat => {
        cat.style.opacity = '0';
        cat.style.transform = 'translateY(40px)';
        cat.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(cat);
    });

    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// Add CSS for reveal class via JS or update CSS file
document.head.insertAdjacentHTML('beforeend', `
<style>
    .feature-category.reveal {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    .feature-category.reveal .feature-card {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
</style>
`);


function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
}

function fetchLatestReleaseAndAutoDownload() {
    const owner = 'AM-ABDULMUEED';
    const repo = 'pluginstream';
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('GitHub API error');
            return response.json();
        })
        .then(release => {
            let asset = null;
            if (Array.isArray(release.assets)) {
                asset = release.assets.find(a => /\.apk$/i.test(a.name)) || release.assets[0] || null;
            }

            if (!asset) {
                return;
            }

            const overlay = document.getElementById('auto-download-overlay');
            const titleEl = document.getElementById('ad-release-title');
            const bodyEl = document.getElementById('ad-release-body');
            const assetNameEl = document.getElementById('ad-asset-name');
            const countdownEl = document.getElementById('ad-countdown');

            titleEl.textContent = `${release.name || release.tag_name}`;
            bodyEl.textContent = (release.body || '').replace(/\r?\n/g, ' ');
            assetNameEl.textContent = asset.name;


            overlay.setAttribute('aria-hidden', 'false');

            const manualLink = document.getElementById('manual-download-link');
            if (manualLink) {
                manualLink.href = asset.browser_download_url;
                manualLink.target = '_blank';
                manualLink.rel = 'noopener noreferrer';
            }

            let seconds = 5;
            countdownEl.textContent = String(seconds);

            if (window.__echoAutoDownloadInterval) {
                clearInterval(window.__echoAutoDownloadInterval);
                window.__echoAutoDownloadInterval = null;
            }

            const interval = setInterval(() => {
                seconds -= 1;
                if (seconds <= 0) {
                    clearInterval(interval);
                    window.__echoAutoDownloadInterval = null;
                    countdownEl.textContent = '0';

                    try {
                        const a = document.createElement('a');
                        a.href = asset.browser_download_url;
                        a.rel = 'noopener noreferrer';
                        a.setAttribute('download', '');
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                    } catch (e) {
                        window.location.href = asset.browser_download_url;
                    }

                    setTimeout(() => {
                        overlay.setAttribute('aria-hidden', 'true');
                    }, 1200);
                } else {
                    countdownEl.textContent = String(seconds);
                }
            }, 1000);

            window.__echoAutoDownloadInterval = interval;
        })
        .catch(err => {
            console.warn('Failed to fetch latest release:', err);
        });
}

setTimeout(() => {
    if (document.getElementById && document.getElementById('auto-download-overlay')) {
        fetchLatestReleaseAndAutoDownload();

        const cancelBtn = document.getElementById('cancel-download');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                if (window.__echoAutoDownloadInterval) {
                    clearInterval(window.__echoAutoDownloadInterval);
                    window.__echoAutoDownloadInterval = null;
                }
                const overlay = document.getElementById('auto-download-overlay');
                if (overlay) overlay.setAttribute('aria-hidden', 'true');
            });
        }

        const manualLink = document.getElementById('manual-download-link');
        if (manualLink) {
            manualLink.addEventListener('click', (e) => {
                if (window.__echoAutoDownloadInterval) {
                    clearInterval(window.__echoAutoDownloadInterval);
                    window.__echoAutoDownloadInterval = null;
                }
            });
        }
    }
}, 600);


function setupLinuxOptions() {
    const linuxBtn = document.getElementById('linux-btn');
    const platformOptions = document.querySelector('.platform-options');
    const linuxOptions = document.querySelector('.linux-options');

    if (linuxBtn && platformOptions && linuxOptions) {
        linuxBtn.addEventListener('click', function (e) {
            e.preventDefault();

            platformOptions.style.opacity = '0';
            platformOptions.style.transform = 'translateY(-10px)';

            setTimeout(() => {
                platformOptions.style.display = 'none';
                linuxOptions.style.display = 'flex';
                linuxOptions.style.flexDirection = 'column';

                setTimeout(() => {
                    linuxOptions.style.opacity = '1';
                    linuxOptions.style.transform = 'translateY(0)';
                }, 50);
            }, 200);
        });
    }
}
