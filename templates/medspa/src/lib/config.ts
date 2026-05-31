import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Esthetics Center",
    tagline: "Elevate Your Beauty. Feel Radiant.",
    phone: "(916) 555-1234",
    phoneHref: "tel:+19165551234",
    email: "info@estheticscenter.com",
    address: "University Village, Fair Oaks Blvd. & Howe Ave., Sacramento, CA",
    city: "Sacramento",
    serviceAreas: ["Sacramento, CA", "University Village"],
    license: "CA Med Spa License #12345",
    since: "2023",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "slate",
    niche: "medspa",
  },

  services: [
    { icon: "scissors", title: "Cosmetic Surgery", desc: "Expert surgical procedures for lasting aesthetic enhancements.", urgent: false },
    { icon: "droplets", title: "Injectables", desc: "Smooth wrinkles and enhance features with advanced dermal fillers and neurotoxins.", urgent: false },
    { icon: "sparkles", title: "Laser & Skin Treatments", desc: "Rejuvenate your skin with cutting-edge laser therapies and personalized treatments.", urgent: false },
    { icon: "heart", title: "Body Contouring", desc: "Sculpt your ideal physique with non-invasive and minimally invasive body shaping solutions.", urgent: false },
    { icon: "thermometer", title: "Weight Loss", desc: "Personalized programs and treatments to help you achieve your weight management goals.", urgent: false },
    { icon: "star", title: "Permanent Makeup", desc: "Enhance your natural beauty with expertly applied, long-lasting permanent makeup.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Sacramento, CA", stars: 5, text: "I had a Pico Laser Resurfacing treatment here last month, and my skin has never looked better! The staff was incredibly professional and made me feel so comfortable throughout the entire process. The results are truly amazing, worth every penny!" },
    { name: "Mark T.", location: "Fair Oaks, CA", stars: 5, text: "The team at Esthetics Center is fantastic. I came in for Wrinkle Relaxers and was impressed by their knowledge and gentle approach. The consultation was thorough, and I felt confident in their recommendations. My results are subtle and natural, exactly what I wanted." },
    { name: "Jessica P.", location: "Carmichael, CA", stars: 5, text: "My experience with Lymphatic Drainage Massage was heavenly. From the moment I walked in, the atmosphere was so calming and luxurious. The therapist was skilled and attentive, and I left feeling completely refreshed and de-stressed. Highly recommend this place for a pampering escape!" }
  ],

  trustBadges: [
    "Premier Medical Spa", "Complimentary Valet", "Advanced Technologies", "Personalized Care", "Luxurious Setting"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Certified Experts", desc: "Our team comprises highly trained and certified professionals dedicated to your aesthetic goals." },
    { icon: "sparkles", title: "Luxurious Environment", desc: "Experience treatments in a serene, upscale setting designed for your ultimate comfort and relaxation." },
    { icon: "shield-check", title: "Advanced Technology", desc: "We utilize cutting-edge equipment and techniques for superior, safe, and effective results." },
    { icon: "heart", title: "Personalized Treatment", desc: "Each treatment plan is custom-tailored to your unique needs and desired outcomes." },
    { icon: "home", title: "Convenient Location", desc: "Easily accessible in University Village with complimentary valet parking for your convenience." },
    { icon: "thumbs-up", title: "Exceptional Results", desc: "We are committed to delivering natural-looking, transformative results that exceed expectations." }
  ],

  formServiceOptions: ["Cosmetic Surgery", "Injectables", "Laser & Skin Treatments", "Body Contouring", "Weight Loss", "Permanent Makeup"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!