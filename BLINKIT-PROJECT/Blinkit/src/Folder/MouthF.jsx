import React from 'react';

export default function MouthF() {
    const products = [
        {
            id: 1,
            name: 'Center Fresh Sugar Free Mint Candy',
            size: '35 g',
            price: '₹100',
            image: '/src/assets/mouthfresheners/center_fresh_mint.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Praakritik Natural Paan Gulkand',
            size: '250 g',
            price: '₹335',
            originalPrice: '₹360',
            image: '/src/assets/mouthfresheners/praakritik_natural_paan_gulkand.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Chandan Mitha Amla Candy',
            size: '100 g',
            price: '₹60',
            image: '/src/assets/mouthfresheners/chandan_mitha_amla_candy.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Tic Tac Orange Mouth Freshner',
            size: '1 pack (13 g x 12 pieces)',
            price: '₹223',
            originalPrice: '₹240',
            image: '/src/assets/mouthfresheners/tic_tac_orange_mouth_freshner.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Barkleys Peppermint Intense Mint Candies',
            size: '50 g',
            price: '₹300',
            image: '/src/assets/mouthfresheners/barkleys_peppermint_intense_mint_candies_1.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Barkleys Wintergreen Intense Mint Candies',
            size: '50 g',
            price: '₹300',
            image: '/src/assets/mouthfresheners/barkleys_peppermint_intense_mint_candies_2.avif',
            deliveryTime: '8 MINS',
        },
    ];

    function ProductCard({ product }) {
        return (
            <div className="card" style={{ width: '12rem' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top p-2"
                    style={{ height: '150px', objectFit: 'contain' }}
                />
                <div className="card-body">
                    <p className="text-muted small mb-2 d-flex align-items-center">
                        <i className="bi bi-clock me-1"></i> {product.deliveryTime}
                    </p>
                    <h5 className="card-title text-truncate" title={product.name}>
                        {product.name}
                    </h5>
                    <p className="card-text text-muted small">{product.size}</p>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div>
                            <span className="fw-bold">{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-muted text-decoration-line-through ms-2">
                                    {product.originalPrice}
                                </span>
                            )}
                        </div>
                        <button className="btn btn-outline-success btn-sm">ADD</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Mouth Fresheners</h2>
                <h4 className="text-success mb-0 cursor-pointer">See All</h4>
            </div>
            <div className="row g-4">
                {products.map((product) => (
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
