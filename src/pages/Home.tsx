
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Users, Trophy, Lightbulb } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: '🎯',
      title: 'تعلم خطوة بخطوة',
      description: 'دروس مبسطة ومنظمة تبدأ من الصفر حتى الاحتراف'
    },
    {
      icon: '🎮',
      title: 'تعلم بالممارسة',
      description: 'تمارين تفاعلية ومشاريع عملية لتطبيق ما تعلمته'
    },
    {
      icon: '📊',
      title: 'تتبع التقدم',
      description: 'راقب تقدمك واكتشف ما أنجزته في رحلة التعلم'
    },
    {
      icon: '🏆',
      title: 'محتوى ممتع',
      description: 'أسلوب تعليمي شيق وممتع مناسب للأطفال والمبتدئين'
    }
  ];

  const topics = [
    { name: 'المتغيرات', icon: '📦', color: 'bg-blue-500' },
    { name: 'الشروط', icon: '🔀', color: 'bg-green-500' },
    { name: 'الحلقات', icon: '🔄', color: 'bg-purple-500' },
    { name: 'الدوال', icon: '⚙️', color: 'bg-orange-500' },
    { name: 'المشاريع', icon: '🚀', color: 'bg-red-500' },
    { name: 'المتقدم', icon: '⭐', color: 'bg-yellow-500' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6 animate-bounce">🎨💻🚀</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
              أهلاً بك في كود كيدز!
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              🌟 المكان المثالي لتعلم البرمجة بطريقة ممتعة وسهلة 🌟
              <br />
              ابدأ رحلتك في عالم البرمجة من الصفر حتى الإبداع!
            </p>
            <Link
              to="/lessons"
              className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>ابدأ التعلم الآن</span>
              <ArrowLeft className="animate-pulse" size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            لماذا كود كيدز؟ 🤔
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            ماذا ستتعلم؟ 📚
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`${topic.color} rounded-xl p-6 text-white text-center hover:transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg`}
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="font-bold text-sm">{topic.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/20 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">6+</div>
              <p className="text-lg">دروس تفاعلية</p>
            </div>
            <div className="bg-white/20 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-lg">تمرين عملي</p>
            </div>
            <div className="bg-white/20 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">∞</div>
              <p className="text-lg">إمكانيات لا محدودة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">مستعد لبدء رحلتك؟ 🎯</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المتعلمين الذين بدأوا رحلتهم معنا واكتشفوا عالم البرمجة الممتع!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lessons"
              className="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-full text-lg font-bold hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              🚀 ابدأ الدروس
            </Link>
            <Link
              to="/projects"
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              💡 استكشف المشاريع
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
