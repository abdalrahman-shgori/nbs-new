import React, { useState, useEffect } from "react";
import bg from "../assets/mosquee.jfif";
import cloudy from "../assets/Cloudy.svg";
import hijriDate from "hijri-date";

const salahTimes = [
  { name: "Fajr", time: "4:49 a.m.", img: cloudy },
  { name: "Dhuhr", time: "12:49 p.m.", img: cloudy },
  { name: "Asr", time: "4:49 p.m.", img: cloudy },
  { name: "Maghrib", time: "6:40 p.m.", img: cloudy },
  { name: "Isha", time: "8:49 p.m.", img: cloudy },
];

export default function AzanSection() {
  const [active, setActive] = useState("Maghrib");
  const [timeRemaining, setTimeRemaining] = useState("");
  const getHijriDate = () => {
    const date = new HijriDate();
    const day = date.getDate(); 
    const month = date.getMonth(); 
    const year = date.getFullYear(); 
    const months = [
      'Muharram', 'Safar', 'Rabi\' al-Awwal', 'Rabi\' al-Thani',
      'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
      'Ramadan', 'Shawwal', 'Dhul-Qada', 'Dhul-Hijjah'
    ];
    return `${day}. ${months[month]} ${year}`;
  };

  const convertToDate = (timeString) => {
    const [time, period] = timeString.split(" ");
    const [hours, minutes] = time.split(":");
    let hours24 = parseInt(hours);

    if (period === "p.m." && hours24 < 12) {
      hours24 += 12;
    }

    if (period === "a.m." && hours24 === 12) {
      hours24 = 0; 
    }

    const currentDate = new Date();
    currentDate.setHours(hours24);
    currentDate.setMinutes(parseInt(minutes));
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    return currentDate;
  };

  const getTimeRemaining = (nextPrayerTime) => {
    const now = new Date();
    const timeDiff = nextPrayerTime - now;

    if (timeDiff <= 0) {
      return "Time's up!";
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    const nextPrayer = salahTimes.find(({ name }) => name === active);
    const nextPrayerDate = convertToDate(nextPrayer.time);

    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(nextPrayerDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div
      className="relative flex items-center justify-center w-full bg-cover bg-center overflow-hidden max-h-[334px] sm:min-h-[234px] md:min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:items-center text-white px-2 text-center md:mt-[192px]">
        <h2 className="flex md:hidden mt-4 pl-[15px] text-start font-custom">
          {getHijriDate()}
        </h2>
        <p className="flex md:hidden font-custom mt-[32px] align-center justify-center">
          {active} in <br /> {timeRemaining}
        </p>
        <h2 className="font-custom text-sm md:text-4xl md:mb-2 mt-8 font-arabic hidden md:flex">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h2>
        <h1 className="font-custom text-xl md:text-3xl lg:text-[44px] font-semibold mb-2 pl-[30px] pr-[30px] max-w-[1125px] pl- hidden md:block lg:leading-[64px] md:leading-[40px] ">
          "In houses [of worship] which Allah has ordered to be raised, in them His name is remembered; therein glorify Him morning and evening.."
        </h1>
        <p className="italic text-sm md:text-base mb-6 hidden md:flex">(Surah An-Nur 24:36)</p>

        {/* Salah Buttons */}
        <div
          style={{ overflowX: "scroll", scrollbarWidth: "none", }}
          className="grid grid-cols-1 gap-[20px] mt-[50px] mb-[60px] pb-[14px] md:mt-[100px] w-full md:px-4 overflow-x-auto"
        >
          <div className="flex gap-[12px] mx-auto" style={{ width: "max-content" }}>
            {salahTimes.map(({ name, time, img }) => (
              <button
                key={name + time}
                onClick={() => setActive(name)}
                className={`backdrop-blur-sm flex-shrink-0 font-custom w-[120px] md:w-[191px] h-[80px] md:h-[158px] flex flex-col items-center justify-center md:p-3 rounded-xl transition-none ${active === name
                    ? "text-custom-green border border-custom-green bg-gray-900 bg-opacity-40"
                    : "bg-gray-900 bg-opacity-40 text-white"
                  } focus:outline-none hover:outline-none hover:border-custom-green`}
              >
                <div className="flex flex-col items-center gap-1 md:gap-[13px]">
                <img src={img} className="lg:w-[41px] md:w-[28px] w-[19px]" />
                <p className="lg:text-[28px] md:text-md text-xs font-semibold">{name}</p>
                  <p className="lg:text-[20px] md:text-md text-xs whitespace-nowrap">{time}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
