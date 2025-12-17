import { ArrowRight, Shield, Truck, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Slide1 from '../assets/pharmacy/hero_interior.png';
import Slide2 from '../assets/pharmacy/hero_medicines.png';
import Slide3 from '../assets/pharmacy/hero_delivery.png';

const slides = [
  {
    title: 'Your Trusted Neighborhood Pharmacy',
    description: 'Serving our community with genuine medications, expert health advice, and personalized care. We are here for your health journey.',
    badge: 'Welcome to Pharmacy',
    image: Slide1
  },
  {
    title: 'Wide Range of Medicines & Supplements',
    description: 'Find everything from prescription medications to daily vitamins and wellness products. Quality you can trust, prices you can afford.',
    badge: 'Quality Products',
    image: Slide2
  },
  {
    title: 'Fast & Reliable Delivery Service',
    description: 'Get your medications delivered promptly to your doorstep. Safe, secure, and hassle-free prescription refills.',
    badge: 'Home Delivery',
    image: Slide3
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="relative h-[600px] lg:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/40"></div>
          </div>
        ))}

        <div className="container mx-auto px-4 h-full relative">
          <div className="flex items-center h-full">
            <div className="max-w-2xl space-y-8">
              <div className="inline-block">
                <span className="bg-primary-500/20 backdrop-blur-sm text-primary-300 px-4 py-2 rounded-full text-sm font-semibold border border-primary-400/30">
                  {slides[currentSlide].badge}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${index === currentSlide
                  ? 'w-8 bg-secondary-500'
                  : 'w-2 bg-white/50 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                All products meet stringent quality standards and regulatory requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery to ensure your facility never runs short.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-primary-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated support team to assist with product selection and queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
