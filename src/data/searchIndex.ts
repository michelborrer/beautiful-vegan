// Lightweight client-side search index. Add new pages here when publishing.
export interface SearchEntry {
  title: string;
  url: string;
  category: string;
  keywords?: string;
}

export const searchIndex: SearchEntry[] = [
  // Skincare
  { title: '7 Best Vegan Moisturizers for Every Skin Type', url: '/reviews/skincare/best-vegan-moisturizers-2025', category: 'Skincare', keywords: 'moisturizer cream hydration dry oily versed elf drunk elephant weleda' },
  { title: '5 Vegan Sunscreens That Do Not Leave a White Cast', url: '/reviews/skincare/best-vegan-sunscreens', category: 'Skincare', keywords: 'spf sunscreen mineral zinc white cast' },
  { title: 'Best Vegan Vitamin C Serums That Actually Brighten', url: '/reviews/skincare/best-vegan-vitamin-c-serums', category: 'Skincare', keywords: 'vitamin c serum brightening dark spots' },
  { title: 'Vegan Skincare Reviews', url: '/reviews/skincare', category: 'Skincare', keywords: 'skincare category all reviews' },
  // Makeup
  { title: 'The Best Vegan Lipsticks That Actually Last All Day', url: '/reviews/makeup/best-vegan-lipsticks', category: 'Makeup', keywords: 'lipstick long-wearing lip color' },
  { title: 'Best Vegan Foundations for Every Skin Tone', url: '/reviews/makeup/best-vegan-foundations', category: 'Makeup', keywords: 'foundation coverage shade match' },
  { title: 'Best Vegan Mascaras: Length, Volume, No Smudging', url: '/reviews/makeup/best-vegan-mascaras', category: 'Makeup', keywords: 'mascara lashes volume lengthening' },
  { title: 'Best Vegan Blushes for a Natural Flush', url: '/reviews/makeup/best-vegan-blushes', category: 'Makeup', keywords: 'blush cheek cream powder' },
  { title: 'Vegan Makeup for Sensitive Eyes', url: '/reviews/makeup/vegan-makeup-sensitive-eyes', category: 'Makeup', keywords: 'sensitive eyes irritation allergy eyeliner eyeshadow' },
  { title: 'Vegan Makeup Reviews', url: '/reviews/makeup', category: 'Makeup', keywords: 'makeup category all reviews' },
  // Haircare
  { title: '5 Vegan Shampoo Bars That Replace Your Bottle', url: '/reviews/haircare/best-vegan-shampoo-bars', category: 'Haircare', keywords: 'shampoo bar plastic-free zero waste ethique' },
  { title: 'Best Vegan Conditioners for Curly Hair', url: '/reviews/haircare/best-vegan-conditioners-curly-hair', category: 'Haircare', keywords: 'conditioner curly curls co-wash detangle' },
  { title: 'Best Vegan Hair Oils for Shine and Repair', url: '/reviews/haircare/best-vegan-hair-oils', category: 'Haircare', keywords: 'hair oil argan jojoba frizz shine' },
  { title: 'Vegan Hair Dye: The Complete Guide', url: '/reviews/haircare/vegan-hair-dye-guide', category: 'Haircare', keywords: 'hair dye color henna ppd' },
  { title: 'Vegan Haircare Reviews', url: '/reviews/haircare', category: 'Haircare', keywords: 'haircare category all reviews' },
  // Ingredients
  { title: 'Avocado for Skin: Benefits, Science & Best Products', url: '/ingredients/avocado-for-skin', category: 'Ingredients', keywords: 'avocado oil fatty acids dry skin' },
  { title: 'Aloe Vera Skin Benefits', url: '/ingredients/aloe-vera-skin-benefits', category: 'Ingredients', keywords: 'aloe vera soothing sunburn hydration' },
  { title: 'Coconut Oil for Skin: Helpful or Harmful?', url: '/ingredients/coconut-oil-skin', category: 'Ingredients', keywords: 'coconut oil comedogenic moisture' },
  { title: 'Is Hyaluronic Acid Vegan? Sources Explained', url: '/ingredients/hyaluronic-acid-vegan-source', category: 'Ingredients', keywords: 'hyaluronic acid fermentation hydration' },
  { title: 'Jojoba Oil Benefits for Skin and Hair', url: '/ingredients/jojoba-oil-benefits', category: 'Ingredients', keywords: 'jojoba oil sebum balance' },
  { title: 'Niacinamide Benefits: What It Actually Does', url: '/ingredients/niacinamide-benefits', category: 'Ingredients', keywords: 'niacinamide vitamin b3 pores redness' },
  { title: 'Shea Butter Benefits for Skin', url: '/ingredients/shea-butter-benefits', category: 'Ingredients', keywords: 'shea butter rich moisture eczema' },
  { title: 'Ingredient Library', url: '/ingredients', category: 'Ingredients', keywords: 'ingredients science glossary' },
  // Brands
  { title: 'Is The Ordinary Cruelty-Free?', url: '/brands/is-the-ordinary-cruelty-free', category: 'Brands', keywords: 'the ordinary deciem estee lauder' },
  { title: 'Is CeraVe Cruelty-Free?', url: '/brands/is-cerave-cruelty-free', category: 'Brands', keywords: 'cerave loreal animal testing' },
  { title: 'Is e.l.f. Cruelty-Free?', url: '/brands/is-e-l-f-cruelty-free', category: 'Brands', keywords: 'elf cosmetics budget vegan' },
  { title: 'Is Glossier Cruelty-Free?', url: '/brands/is-glossier-cruelty-free', category: 'Brands', keywords: 'glossier boy brow balm' },
  { title: 'Is Drunk Elephant Cruelty-Free?', url: '/brands/is-drunk-elephant-cruelty-free', category: 'Brands', keywords: 'drunk elephant shiseido protini' },
  { title: "Is Kiehl's Cruelty-Free?", url: '/brands/is-kiehl-s-cruelty-free', category: 'Brands', keywords: 'kiehls loreal china testing' },
  { title: 'Is Olaplex Vegan?', url: '/brands/is-olaplex-vegan', category: 'Brands', keywords: 'olaplex bond repair no 3' },
  { title: 'Is Versed Cruelty-Free?', url: '/brands/is-versed-cruelty-free', category: 'Brands', keywords: 'versed drugstore skincare' },
  { title: 'Is Tower 28 Cruelty-Free?', url: '/brands/is-tower-28-cruelty-free', category: 'Brands', keywords: 'tower 28 sos spray sensitive' },
  { title: 'Brand Directory: Cruelty-Free Status Checker', url: '/brands', category: 'Brands', keywords: 'brands directory cruelty-free checker' },
  // Guides
  { title: "Beginner's Guide to Cruelty-Free Beauty", url: '/guides/beginners-guide-cruelty-free-beauty', category: 'Guides', keywords: 'beginner guide certifications leaping bunny' },
  { title: 'Cruelty-Free Living: Your Complete Guide', url: '/guides/cruelty-free-living', category: 'Guides', keywords: 'cruelty-free living lifestyle home' },
  { title: 'The Vegan Lifestyle Guide', url: '/guides/vegan-lifestyle', category: 'Guides', keywords: 'vegan lifestyle food fashion' },
  { title: 'All Guides', url: '/guides', category: 'Guides', keywords: 'guides how-to' },
  // Site
  { title: 'Vegan & Documentary Watchlist', url: '/documentaries', category: 'Guides', keywords: 'documentaries films watch netflix' },
  { title: 'How We Test Products', url: '/how-we-test', category: 'About', keywords: 'methodology testing review process editorial' },
  { title: 'Our Story', url: '/about', category: 'About', keywords: 'about casey bloom founder' },
  { title: 'Contact Us', url: '/contact', category: 'About', keywords: 'contact email pitch' },
  { title: 'Newsletter', url: '/newsletter', category: 'About', keywords: 'newsletter subscribe email' },
];
