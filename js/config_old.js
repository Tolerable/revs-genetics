// Seed Collective - Configuration File
// Edit this file to customize your site

const siteConfig = {
    // Basic Site Information
    site: {
        name: "Seed Collective", // Your site name
        tagline: "Unique Collectibles from Around the World", // Short description
        logo: "img/logo.jpg", // Path to your logo (recommended size: 200x200px)
        email: "contact@example.com", // Contact email
        socialLinks: {
            discord: "https://discord.gg/yourcollective",
            youtube: "https://youtube.com/@yourchannel",
            tiktok: "https://tiktok.com/@yourhandle"
        },
        copyright: "© 2025 Seed Collective. All rights reserved."
    },
    
    // Color Scheme
    colors: {
        primary: "#003B6F", // Main brand color
        secondary: "#00FF9F", // Accent color
        tertiary: "#6A0DAD", // Additional accent color
        highlight: "#FFD700", // Call-to-action color
        alert: "#FF5722", // For notifications/alerts
        background: "#0A0E17", // Site background color
        text: "#FFFFFF" // Main text color
    },
    
    // Typography
    fonts: {
        heading: "'Orbitron', sans-serif", // Font for headings
        body: "'Exo 2', sans-serif" // Font for body text
    },
    
    // Terminology (customize to match your preferred terms)
    terminology: {
        // Product categories
        category1: "Premium Collection",  // e.g. "Indica" equivalent 
        category2: "Signature Series",    // e.g. "Sativa" equivalent
        category3: "Hybrid Collection",   // e.g. "Hybrid" equivalent
        
        // Product-related terms
        productTerm: "Collectible",
        productPluralTerm: "Collectibles",
        packTerm: "Collection Pack",
        cartTerm: "Collection Box",
        
        // Status labels
        soldOutLabel: "UNAVAILABLE",
        comingSoonLabel: "COMING SOON"
    },
    
    // Visual Effects (enabled/disabled)
    effects: {
        backgroundEffect: {
            enabled: true,
            type: "stars", // Options: "stars", "bubbles", "leaves", "particles"
            intensity: "medium" // Options: "low", "medium", "high"
        },
        specialFeature: {
            enabled: true,
            type: "floatingObject", // Options: "floatingObject", "parallax", "spotlight"
            image: "img/floating-object.png", // Only needed for floatingObject
            behavior: "teleport" // Options: "teleport", "float", "pulse"
        }
    },
    
    // Product Display Settings
    products: {
        defaultStatus: "available", // Default product status
        enableRatings: true, // Show product ratings
        showPackOptions: true, // Show different pack sizes
        defaultPackOptions: [
            { size: "3 Pack", regularPrice: 35, salePrice: 30 },
            { size: "5 Pack", regularPrice: 50, salePrice: 45 },
            { size: "10 Pack", regularPrice: 95, salePrice: 80 }
        ]
    },
    
    // Default categories shown in top navigation
    navigation: [
        { name: "Premium Collections", url: "premium.html" },
        { name: "About", url: "about.html" },
        { name: "Contact", url: "contact.html" }
    ],
    
    // Advanced Settings
    advanced: {
        enableLocalStorage: true, // Use localStorage for cart
        checkoutMethod: "email", // Options: "email", "form", "external"
        externalCheckoutUrl: "", // Only needed if checkoutMethod is "external"
        analyticsId: "" // Optional Google Analytics ID
    }
};