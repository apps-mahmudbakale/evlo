import { Star } from 'lucide-react';
import PainRelief from '../assets/pharmacy/product_pain_relief.png';
import Multivitamin from '../assets/pharmacy/product_multivitamin.png';
import FirstAid from '../assets/pharmacy/product_first_aid.png';
import GenericMeds from '../assets/pharmacy/hero_medicines.png';






const products = [
  {
    name: 'Pain Relief Tablets',
    category: 'Over-the-counter',
    price: '$12.99',
    rating: 4.8,
    image: PainRelief,
    inStock: true,
  },
  {
    name: 'Multivitamin Complex',
    category: 'Vitamins & Supplements',
    price: '$24.99',
    rating: 4.9,
    image: Multivitamin,
    inStock: true,
  },
  {
    name: 'Premium First Aid Kit',
    category: 'First Aid',
    price: '$34.99',
    rating: 4.9,
    image: FirstAid,
    inStock: true,
  },
  {
    name: 'Prescription Refill Service',
    category: 'Prescription',
    price: 'Contact Us',
    rating: 5.0,
    image: GenericMeds,
    inStock: true,
  },
  {
    name: 'Immune Support Supplements',
    category: 'Vitamins & Supplements',
    price: '$19.99',
    rating: 4.7,
    image: Multivitamin,
    inStock: true,
  },
  {
    name: 'Family Health Essentials',
    category: 'General Health',
    price: '$45.99',
    rating: 4.8,
    image: GenericMeds,
    inStock: true,
  },
  {
    name: 'Emergency Care Pack',
    category: 'First Aid',
    price: '$29.99',
    rating: 4.8,
    image: FirstAid,
    inStock: true,
  },
  {
    name: 'Cold & Flu Relief',
    category: 'Over-the-counter',
    price: '$14.99',
    rating: 4.6,
    image: PainRelief,
    inStock: true,
  }
];

const whatsappNumber = '1234567890';

const handleWhatsAppOrder = (productName: string) => {
  const message = encodeURIComponent(
    `Hi! I would like to inquire about:\n\nProduct: ${productName}\n\nPlease provide more details.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
};

export default function Products() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Premium Pharmaceutical Products Catalog
          </h2>
          <p className="text-xl text-gray-600">
            Browse our collection of medications, health supplements, and personal care products. Order directly via WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.inStock && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    In Stock
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-2">
                  {product.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>
                <div className="mt-auto">
                  <div className="h-6 mb-4"></div>
                  <button
                    onClick={() => handleWhatsAppOrder(product.name)}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Prescription Refills & Wholesale Orders?</h3>
          <p className="text-xl mb-8 text-primary-50">
            Contact us for prescription refills, bulk pharmaceutical supplies, and customized medical packages for your facility.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppOrder('Bulk Order Inquiry')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp for Bulk Orders
            </button>
            <button className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold shadow-lg transition-all">
              Request Quote via Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
