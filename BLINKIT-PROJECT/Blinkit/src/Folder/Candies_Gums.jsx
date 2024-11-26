import React from 'react';

export default function Candies_Gums() {
    const products = [
        {
            id: 1,
            name: 'Chupa Chups Sour Belt Mixed Fruit Candy',
            size: '57.6 g',
            price: '₹30',
            image: '/src/assets/candies/chupa_chups_sour_belt.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Chupa Chups Sour Bites Mixed Fruit Candy',
            size: '93 g',
            price: '₹50',
            image: '/src/assets/candies/chupa_chups_sour_bites.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Center Freah Sugar Free Mint Candy',
            size: '35 g',
            price: '₹100',
            image: '/src/assets/candies/center_fresh_sugar_mint_candy.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Alpenliebe Pop Assored Flavours Lollipop (with Toy...',
            size: '5 x 8 g',
            price: '₹50',
            image: '/src/assets/candies/alpenliebe_pop_assored_flavours.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Dabur Hajmola Imli Digestive Tablets',
            size: '120 tablets',
            price: '₹68',
            originalPrice: '₹70',
            image: '/src/assets/candies/dabur_hajmora_imli_digestive_tablets.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Sour Punk Cola Flavour Stick Candy',
            size: '40 g',
            price: '₹35',
            image: '/src/assets/candies/sour_punk_cola_flavour_stick_candy.avif',
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
                <h2 className="fw-bold">Candies & Gums</h2>
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
