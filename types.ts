import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  alt: string;
}