function generatePromoBadge(promotional) {
    if (!promotional || !promotional.enabled || promotional.type === 'none') {
        return '';
    }
    
    let badgeText = '';
    let badgeClass = promotional.type;
    
    switch (promotional.type) {
        case 'percentage':
            badgeText = `${promotional.value}% OFF`;
            break;
        case 'sale':
            badgeText = 'SALE';
            break;
        case 'bogo':
            badgeText = promotional.bogoType === 'same' ? 'BOGO' : 'BOGO ANY';
            break;
        case 'new':
            badgeText = 'NEW';
            break;
        case 'limited':
            badgeText = 'LIMITED';
            break;
        case 'custom':
            badgeText = promotional.value || 'SPECIAL';
            break;
    }
    
    return `<div class="promo-badge ${badgeClass}">${badgeText}</div>`;
}

function processPackPrice(pack, promotional) {
    if (!promotional || !promotional.enabled || !promotional.discountPercent) {
        return { ...pack, isDiscounted: false };
    }
    
    const discountMultiplier = (100 - promotional.discountPercent) / 100;
    
    return {
        ...pack,
        originalSalePrice: pack.salePrice,
        regularPrice: pack.regularPrice, // Keep fake retail price unchanged
        salePrice: Math.round(pack.salePrice * discountMultiplier * 100) / 100,
        isDiscounted: true
    };
}