import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"
import groupImage from "../assets/groupImage.svg"
import bg from "../assets/bgImg.svg"
export default function Aktivitaten() {
  const dummyEvents = [
    {
      date: "25",
      monthYear: "May 2025",
      time: "8:00 am",
      location: "Downtown, USA",
      title: "Deutschsprachiger Islamunterricht für Jugendliche",
      description:
        "Gemeinsam mit unserem Jugendverein, dem Islamischen Jugendzentrum Berlin, bieten wir diesen Islamischen Unterricht komplett auf Deutsch an.",
    },
    {
      date: "28",
      monthYear: "May 2025",
      time: "4:00 pm",
      location: "Berlin, Germany",
      title: "Workshop für junge Muslime",
      description:
        "Gemeinsam mit unserem Jugendverein, dem Islamischen Jugendzentrum Berlin, bieten wir diesen Islamischen Unterricht komplett auf Deutsch an.",
    },
    {
      date: "03",
      monthYear: "June 2025",
      time: "2:00 pm",
      location: "Hamburg, Germany",
      title: "Quran Studienkreis",
      description:
      "Gemeinsam mit unserem Jugendverein, dem Islamischen Jugendzentrum Berlin, bieten wir diesen Islamischen Unterricht komplett auf Deutsch an.",
    },
    {
      date: "10",
      monthYear: "June 2025",
      time: "6:30 pm",
      location: "Munich, Germany",
      title: "Ramadan Vorbereitungsseminar",
      description:
      "Gemeinsam mit unserem Jugendverein, dem Islamischen Jugendzentrum Berlin, bieten wir diesen Islamischen Unterricht komplett auf Deutsch an.",
    },
  ]

  return (
    <>
    
     <div
                className=""
                style={{ backgroundImage: `url(${bg})` }}
            >
     <h1 className="hidden md:block text-[#B3C352] text-1xl sm:text-1xl md:text-2xl lg:text-4xl font-bold text-center pt-8">
  Die kommenden Aktivitäten
</h1>

<div className=" md:hidden flex align-center justify-between pt-[15px] pl-[15px] pr-[15px]">
<p className="font-custom  text-black text-1xl sm:text-1xl md:text-2xl lg:text-4xl font-bold text-start ">
   Aktivitäten
</p>
<p className="font-custom text-custom-green">
Alle anzeigen
</p>

</div>


      <div className=" sm:grid sm:grid-cols-1 flex overflow-x-auto gap-6 px-4 md:mt-8 mt-4 md:pl-[60px] md:pr-[60px] mx-auto pb-8">
        {dummyEvents.map((event, index) => (
          <Card
            key={index}
            className="shadow-md flex flex-col sm:flex-row overflow-hidden min-w-[300px]"
            >
            {/* Date */}
         

            {/* Content */}
            <CardContent className="font-custom flex flex-col sm:flex-row  p-4 sm:p-8 lg:p-[35px] md:p-[15px]  gap-8 ">
            <div className="hidden  sm:w-24 w-full md:flex sm:flex-col flex-row sm:items-center items-start justify-between sm:justify-center bg-white  p-2 sm:p-0">
              <span className="text-3xl font-bold text-[#B3C352]">{event.date}</span>
              <span className="text-sm text-gray-500">{event.monthYear}</span>
            </div>
              {/* Image */}
                <img 
                  src={groupImage}
                  alt="event"
                  className="md:max-w-[200px] xs:w-screen "
                />

              {/* Info */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{event.title}</h2>

                <div className="hidden  md:flex flex-wrap items-center space-x-4 text-sm text-gray-500 mt-2">
                <div className="gap-1 border border-[#EFF0F6] rounded-[10px] py-[6px] px-[14px] flex items-center">
                    <Clock className="w-4 h-4 text-custom-green"  />
                    <p>{event.time}</p>
                  </div>
                  <div className="g-1 border border-[#EFF0F6] rounded-[10px] py-[6px] px-[14px] flex items-center">
                  <MapPin className="w-4 h-4 text-custom-green" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{event.description}</p>
               

                <div className="md:hidden flex flex-wrap items-center space-x-4 text-sm text-gray-500 mt-2">
                <div className="gap-1 border border-[#EFF0F6] rounded-[10px] py-[6px] px-[14px] flex items-center">
                    <Clock className="w-4 h-4 text-custom-green"  />
                    <p>{event.time}</p>
                  </div>
                  <div className="g-1 border border-[#EFF0F6] rounded-[10px] py-[6px] px-[14px] flex items-center">
                  <MapPin className="w-4 h-4 text-custom-green" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="hidden mt-4 sm:mt-0 lg:flex sm:items-center">
                <Button className="bg-[#B3C352] text-white hover:bg-[#a2b83f] w-full sm:w-auto">
                  Details Anzeigen
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </>
  )
}
