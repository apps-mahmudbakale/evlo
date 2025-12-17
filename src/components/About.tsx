import { Users, Target, TrendingUp, CheckCircle, Award, Shield, Heart, Globe, Clock, Package, Activity, Stethoscope, FileText, Baby } from 'lucide-react';

const achievements = [
  { number: '25+', label: 'Years of Excellence', icon: Award },
  { number: '5000+', label: 'Happy Patients', icon: Heart },
  { number: '10,000+', label: 'Medicines & Products', icon: Package },
  { number: '50+', label: 'Expert Team Members', icon: Users },
];

const coreValues = [
  {
    title: 'Quality First',
    description: 'Every product undergoes rigorous quality control and meets international healthcare standards.',
    icon: Shield,
  },
  {
    title: 'Customer Commitment',
    description: 'We build lasting relationships through exceptional service and support for our healthcare partners.',
    icon: Heart,
  },
  {
    title: 'Innovation',
    description: 'Continuously adopting cutting-edge medical technology to improve patient care outcomes.',
    icon: TrendingUp,
  },
  {
    title: 'Reliability',
    description: 'Consistent delivery, accurate inventory, and dependable support you can count on every time.',
    icon: Clock,
  },
  {
    title: 'Global Standards',
    description: 'Adhering to FDA regulations and international quality certifications across all our operations.',
    icon: Globe,
  },
  {
    title: 'Integrity',
    description: 'Transparent business practices and ethical conduct in every interaction with our stakeholders.',
    icon: CheckCircle,
  },
];

const specialties = [
  {
    title: 'Expert Consultation',
    icon: Stethoscope,
    description: 'Professional health advice and medication counseling from licensed pharmacists.'
  },
  {
    title: 'Prescription Services',
    icon: FileText,
    description: 'Fast and accurate prescription filling, refills, and medication management.'
  },
  {
    title: 'Health Screenings',
    icon: Activity,
    description: 'Routine checks for blood pressure, blood sugar, and other vital health metrics.'
  },
  {
    title: 'Wellness Products',
    icon: Heart,
    description: 'Wide range of vitamins, supplements, and wellness products for a healthy lifestyle.'
  },
  {
    title: 'Personal Care',
    icon: Users,
    description: 'Quality personal care items, skincare, and hygiene products for the whole family.'
  },
  {
    title: 'Mother & Baby',
    icon: Baby,
    description: 'Essential products for maternal health and baby care, from pregnancy to toddlerhood.'
  },
];

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Pharmacy
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Your Trusted Pharmacy Partner
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            As a leading community pharmacy, we are committed to providing accessible, high-quality healthcare services and products. We go beyond just dispensing medicines; we are dedicated to improving the health and well-being of our community through expert advice and personalized care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Pharmacy, we specialize in providing comprehensive pharmaceutical and wellness solutions tailored to meet the diverse needs of our patients. Our services include:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="font-medium text-gray-800">{specialty.title}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team of experienced pharmacists works closely with patients to ensure they understand their medications and receive the best possible care for their health conditions.
            </p>
            <div className="space-y-4">
              {[
                'Genuine Medications sourced from Manufacturers',
                'Licensed and Experienced Pharmacists',
                'Fast Prescription Filling Service',
                'Patient Counseling & Medication Therapy',
                'Wide Range of Wellness Products',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-primary-600 text-white py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                        <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-primary-600 mb-2">{item.number}</div>
                        <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-primary-600 text-white py-16">
              <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our Pharmacy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Genuine medications and quality assured products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Professional health advice from expert pharmacists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Convenient prescription refill and transfer services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Competitive prices on all medicines and products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Friendly and personalized customer service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Core Values</h3>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            These principles guide every decision we make and every relationship we build in the healthcare industry.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To improve the health and well-being of our community by providing accessible, high-quality medications and expert health advice in a caring environment.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-secondary-50 to-blue-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted community pharmacy, known for our commitment to patient health, innovation, and excellence in pharmaceutical care.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-600 leading-relaxed">
              Building lasting relationships with our patients by delivering exceptional service, reliable products, and compassionate care that exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
