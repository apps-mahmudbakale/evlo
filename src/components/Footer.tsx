import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../logo2.png';

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>

            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-xl inline-block shadow-md">
                <img src={logo} alt="Pharmacy Logo" className="h-20 w-auto" />
              </div>
            </div>
            <p className="text-primary-50 mb-6 leading-relaxed">
              Your trusted partner for quality medical equipment and consumables since 1998.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-600 hover:bg-white hover:text-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-600 hover:bg-white hover:text-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-600 hover:bg-white hover:text-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-600 hover:bg-white hover:text-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary-100 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary-100 transition-colors">
                  Products
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-primary-100 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Product Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary-100 transition-colors">
                  Prescription Medicines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-100 transition-colors">
                  Vitamins & Supplements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-100 transition-colors">
                  First Aid & Emergency
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-100 transition-colors">
                  Personal Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-100 transition-colors">
                  Health Devices
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span className="text-sm">
                  123 Health Street, Medical District<br />
                  Central City, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-primary-100 transition-colors">
                  +234 704 868 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href="mailto:info@medequip.com" className="hover:text-primary-100 transition-colors">
                  info@pharmacy.com
                </a>
              </li>
            </ul>
            <div className="mt-6 bg-primary-600 p-4 rounded-lg">
              <p className="text-sm font-semibold text-white mb-1">Business Hours</p>
              <p className="text-sm text-primary-100">Mon-Fri: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-100">
              &copy; {new Date().getFullYear()} Pharmacy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary-100 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-100 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-100 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
