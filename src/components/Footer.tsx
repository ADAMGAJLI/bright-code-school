
import { Heart, Mail, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse mb-4">
              <div className="bg-yellow-400 rounded-full p-2">
                <span className="text-2xl">💻</span>
              </div>
              <span className="text-2xl font-bold">كود كيدز</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              منصة تعليمية بسيطة وممتعة لتعلم البرمجة من الصفر، مصممة خصيصًا للأطفال والمبتدئين.
            </p>
          </div>

          {/* Creator Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">من صنع</h3>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
              <div className="text-3xl mb-2">👨‍💻</div>
              <h4 className="text-2xl font-bold mb-2">Adimox</h4>
              <p className="text-sm text-gray-200 mb-4">
                تم تصميم هذا الموقع من طرف Adimox – موجه لكل من يرغب في تعلم البرمجة بأسلوب بسيط
              </p>
              <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/lessons" className="text-gray-300 hover:text-yellow-400 transition-colors">📚 الدروس</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors">🚀 المشاريع</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">ℹ️ عن الموقع</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">📞 تواصل معنا</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <span>صُنع بـ</span>
            <Heart className="text-red-500" size={16} />
            <span>لتعليم البرمجة للجميع © 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
