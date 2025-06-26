import { useState, useEffect } from "react";

interface TimeLeft {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Устанавливаем дату окончания марафона (7 недель от сегодня)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 49); // 7 недель = 49 дней

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor(
          (distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24),
        );
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ weeks, days, hours, minutes, seconds });
      } else {
        setTimeLeft({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.weeks, label: "недель", labelEn: "weeks" },
    { value: timeLeft.days, label: "дней", labelEn: "days" },
    { value: timeLeft.hours, label: "часов", labelEn: "hours" },
    { value: timeLeft.minutes, label: "минут", labelEn: "minutes" },
    { value: timeLeft.seconds, label: "секунд", labelEn: "seconds" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-6">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[100px] text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
            {unit.value.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-600 font-medium">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
