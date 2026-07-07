#!/usr/bin/env python3
import urllib.request
import ssl

ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

base = "https://advtkudlxrdx6.kimi.page"

pages = [
    "/", "/reviews/skincare.html", "/reviews/makeup.html", "/reviews/haircare.html",
    "/reviews/skincare/best-vegan-moisturizers-2025.html",
    "/reviews/skincare/best-vegan-vitamin-c-serums.html",
    "/reviews/skincare/best-vegan-sunscreens.html",
    "/reviews/makeup/best-vegan-lipsticks.html",
    "/reviews/makeup/best-vegan-foundations.html",
    "/reviews/makeup/vegan-makeup-sensitive-eyes.html",
    "/reviews/makeup/best-vegan-blushes.html",
    "/reviews/haircare/best-vegan-shampoo-bars.html",
    "/reviews/haircare/best-vegan-hair-oils.html",
    "/reviews/haircare/vegan-hair-dye-guide.html",
    "/reviews/haircare/best-vegan-conditioners-curly-hair.html",
    "/ingredients/avocado-for-skin.html", "/ingredients/shea-butter-benefits.html",
    "/ingredients/aloe-vera-skin-benefits.html", "/ingredients/coconut-oil-skin.html",
    "/ingredients/jojoba-oil-benefits.html", "/ingredients/niacinamide-benefits.html",
    "/ingredients/hyaluronic-acid-vegan-source.html",
    "/brands.html",
    "/brands/is-the-ordinary-cruelty-free.html",
    "/brands/is-cerave-cruelty-free.html",
    "/brands/is-kiehls-cruelty-free.html",
    "/brands/is-versed-cruelty-free.html",
    "/brands/is-e-l-f--cruelty-free.html",
    "/brands/is-olaplex-vegan.html",
    "/brands/is-drunk-elephant-cruelty-free.html",
    "/brands/is-tower-28-cruelty-free.html",
    "/brands/is-glossier-cruelty-free.html",
    "/guides.html",
    "/guides/beginners-guide-cruelty-free-beauty.html",
    "/guides/cruelty-free-living.html",
    "/guides/vegan-lifestyle.html",
    "/documentaries.html",
    "/about.html", "/contact.html", "/newsletter.html", "/privacy-policy.html",
]

errors = []
for page in pages:
    url = base + page
    try:
        req = urllib.request.Request(url, method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        response = urllib.request.urlopen(req, timeout=10, context=ssl_context)
        if response.getcode() != 200:
            errors.append((page, response.getcode()))
    except urllib.error.HTTPError as e:
        errors.append((page, e.code))
    except Exception as e:
        errors.append((page, str(e)))

if errors:
    print(f"\nERRORS ({len(errors)}):")
    for p, c in errors:
        print(f"  {c} {p}")
else:
    print(f"\nAll {len(pages)} pages OK!")
