import { useEffect } from 'react';
import products from '../data/products.json';

const StructuredData = () => {
  useEffect(() => {
    const id = 'clover-product-list';
    if (document.getElementById(id)) return undefined;

    const data = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Clover Moda — Drop 04 / SS26',
      itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.name,
          description: p.description,
          image: p.image,
          category: p.category,
          sku: p.id,
          brand: { '@type': 'Brand', name: 'Clover Moda' },
          offers: {
            '@type': 'Offer',
            price: p.price,
            priceCurrency: p.currency,
            availability:
              p.label === 'SALE'
                ? 'https://schema.org/LimitedAvailability'
                : 'https://schema.org/InStock',
            url: 'https://clovermoda.com/',
            seller: { '@type': 'Organization', name: 'Clover Moda' },
          },
        },
      })),
    };

    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }, []);

  return null;
};

export default StructuredData;
