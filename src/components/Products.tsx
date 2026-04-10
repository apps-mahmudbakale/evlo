import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import GenericMeds from '../assets/pharmacy/hero_medicines.png';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '';

interface Product {
  id: number;
  name: string;
  barcode?: string;
  product_category: string | null;
  unit?: string;
  selling_price: string;
  buying_price?: string;
  vat_percentage?: string;
  qty: number;
  min_qty?: number;
  expiry_date?: string;
}

const whatsappNumber = '2347038119375';

const handleWhatsAppOrder = (productName: string) => {
  const message = encodeURIComponent(
    `Hi! I would like to inquire about:\n\nProduct: ${productName}\n\nPlease provide more details.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
};

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/products?per_page=50`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch products (${res.status})`);
        return res.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : (data.data ?? []));
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

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

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-primary-600 animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-500">
            <p className="text-lg font-semibold">Failed to load products</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={GenericMeds}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${product.qty > 0 ? 'bg-green-500' : 'bg-red-500'}`}>
                    {product.qty > 0 ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  {product.product_category && (
                    <div className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-2">
                      {product.product_category}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  {product.expiry_date && (
                    <p className="text-xs text-gray-400 mb-2">Exp: {product.expiry_date}</p>
                  )}
                  <div className="mt-auto">
                    <p className="text-primary-600 font-bold text-lg mb-3">
                      ₦{Number(product.selling_price).toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleWhatsAppOrder(product.name)}
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                    >
                      <WhatsAppIcon />
                      Order on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
              <WhatsAppIcon />
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
