import React, { useState } from 'react';
import { X, ZoomIn, Play } from 'lucide-react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000', category: 'Wedding', alt: 'Wedding Couple' },
  { id: 2, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000', category: 'Portrait', alt: 'Model Portrait' },
  { id: 3, src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000', category: 'Event', alt: 'Concert' },
  { id: 4, src: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1000', category: 'Wedding', alt: 'Traditional Wedding' },
  { id: 5, src: 'https://images.unsplash.com/photo-1471341971474-273d38152771?q=80&w=1000', category: 'Nature', alt: 'Landscape' },
  { id: 6, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000', category: 'Portrait', alt: 'Woman Smile' },
  // Additional gallery items
  { id: 7, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000', category: 'Wedding', alt: 'Bride and Groom' },
  { id: 8, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000', category: 'Portrait', alt: 'Business Portrait' },
  { id: 9, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000', category: 'Event', alt: 'Corporate Event' },
  { id: 10, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000', category: 'Wedding', alt: 'Wedding Ceremony' },
  { id: 11, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000', category: 'Portrait', alt: 'Fashion Portrait' },
  { id: 12, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000', category: 'Event', alt: 'Live Performance' },
  { id: 13, src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000', category: 'Wedding', alt: 'Wedding Details' },
  { id: 14, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000', category: 'Portrait', alt: 'Male Portrait' },
  { id: 15, src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000', category: 'Nature', alt: 'Sunset Landscape' },
  { id: 16, src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000', category: 'Portrait', alt: 'Beauty Portrait' },
  { id: 17, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000', category: 'Event', alt: 'Birthday Party' },
  { id: 18, src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=1000', category: 'Nature', alt: 'Mountain Vista' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Show only first 6 items initially, or all if showAll is true
  const displayedItems = showAll ? galleryItems : galleryItems.slice(0, 6);

  return (
    <section id="gallery" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-5xl md:text-8xl uppercase text-white mb-2">Featured Work</h2>
            <p className="text-gray-500 uppercase tracking-widest">Selected shots from our portfolio</p>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="hidden md:block border border-white/20 text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
          >
            {showAll ? 'Show Less' : 'View All Work'}
          </button>
        </div>

        {/* Masonry Grid Simulation using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden break-inside-avoid"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-accent uppercase tracking-widest text-xs mb-2">{item.category}</p>
                  <p className="text-white font-display text-2xl uppercase">{item.alt}</p>
                  <ZoomIn className="mx-auto mt-4 text-white/70" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="border border-white/20 text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
          >
            {showAll ? 'Show Less' : 'View All Work'}
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-brand-accent transition-colors"
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-display text-2xl uppercase">{selectedImage.alt}</p>
            <p className="text-brand-accent text-sm uppercase tracking-widest">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;