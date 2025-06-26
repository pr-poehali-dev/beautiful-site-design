import Icon from "@/components/ui/icon";

interface TelegramButtonProps {
  botUrl?: string;
}

const TelegramButton = ({
  botUrl = "https://t.me/Youlovekinoki_bot",
}: TelegramButtonProps) => {
  const handleTelegramClick = () => {
    window.open(botUrl, "_blank");
  };

  return (
    <button
      onClick={handleTelegramClick}
      className="group relative overflow-hidden bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold text-lg flex items-center gap-3"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      <Icon name="Send" size={24} className="relative z-10" />
      <span className="relative z-10">Перейти в Telegram бота</span>
    </button>
  );
};

export default TelegramButton;
