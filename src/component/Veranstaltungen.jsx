import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import praying from "../assets/paryingman.svg"
const events = [
  {
    id: 1,
    title: "Koran, Hadith im täglichen",
    description:
      "Odio scelerisque maecenas odio nulla. Mollis platea vulputate vel lectus viverra augue sapien. Pharetra consequat imperdiet eu.",
    image: "/card2.png", // make sure this path exists
  },
  {
    id: 2,
    title: "Koran, Hadith im täglichen",
    description:
      "Odio scelerisque maecenas odio nulla. Mollis platea vulputate vel lectus viverra augue sapien. Pharetra consequat imperdiet eu.",
    image: "/card2.png",
  },
];

const CardItem = ({ title, description, image }) => (
  <Card className="bg-transparent box-shadow-none border-none">
    <div className="">
      <img
        src={praying}
        alt={title}
        fill
        className=""
        style={{width:"100%"}}
      />
    </div>
    <CardContent className="p-6">
     
      <h3 className="text-lg font-semibold text-[#1D3557] mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default function Veranstaltungen() {
  return (
    <div className="bg-[#B3C35217] py-12 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#8CA400] mb-10">
        Veranstaltungen
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <CardItem key={event.id} {...event} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button className="bg-[#B3C352] text-white hover:bg-[#9CAD41] px-6 py-3">
          Alle Veranstaltungen Anzeigen
        </Button>
      </div>
    </div>
  );
}
