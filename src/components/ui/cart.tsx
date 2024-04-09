import React from "react";

interface HeroProps {
    "id": 2,
    "title: "Stainless Steel Water Bottle",
    description: "Stay hydrated on-the-go with our durable stainless steel water bottle. Keeps your beverages cold for up to 24 hours.",
    image: "https://example.com/water_bottle.jpg",
    price: 19.99,
    oldPrice: 24.99,
    discount: 20,
    quantity: 150,
    weight: "0.5 lbs",
    categories: ["Kitchen", "Outdoor"],
    reviews: {
      rating: 4.8,
      count: 85
    },
    otherImage: []
  title?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  scrollTo?: string;
  id?: string;
  customP?: string;
}

export function ProductCart() {
  return <div></div>;
}
