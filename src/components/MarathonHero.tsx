import CountdownTimer from "./CountdownTimer";
import TelegramButton from "./TelegramButton";

const MarathonHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-rose-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-300/40 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-4">
              Марафон Лайков
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              7 недель к идеальному профилю ✨
            </p>
          </div>

          {/* Карточка с таймером */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              До окончания марафона:
            </h2>
            <CountdownTimer />
          </div>

          {/* Кнопка Telegram */}
          <div className="flex justify-center">
            <TelegramButton />
          </div>

          {/* Дополнительная информация */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-semibold text-lg mb-2">Крутые фото</h3>
              <p className="text-gray-600 text-sm">
                Научитесь делать фото, которые собирают тысячи лайков
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-lg mb-2">
                Еженедельные задания
              </h3>
              <p className="text-gray-600 text-sm">
                Пошаговый план развития вашего профиля
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-semibold text-lg mb-2">Розыгрыш призов</h3>
              <p className="text-gray-600 text-sm">
                100 суперлайков для лучших участников
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonHero;
