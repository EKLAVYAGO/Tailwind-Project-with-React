import React from 'react'
import Rightcard from './Rightcard'

const RightContent = () => {

  const cards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop",
    description: "A professional leader focused on building strong teams and delivering meaningful results.",
    tag: "UnderSatisfied"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop",
    description: "A confident professional with a strong focus on communication, collaboration, and growth.",
    tag: "Satisfied"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop",
    description: "An experienced corporate professional working toward innovative solutions and business success.",
    tag: "Highly Satisfied"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop",
    description: "A motivated professional passionate about leadership, creativity, and continuous improvement.",
    tag: "Satisfied"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop",
    description: "A corporate professional committed to creating impactful strategies and achieving long-term goals.",
    tag: "UnderSatisfied"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop",
    description: "A business professional focused on teamwork, productivity, and delivering high-quality outcomes.",
    tag: "Highly Satisfied"
  }
];
  return (
    <div   className="h-full w-2/3 overflow-x-scroll bg-white text-white p-4 flex flex-nowrap gap-10">
        {cards.map((card) => (
        <Rightcard
          key={card.id}
          img={card.img}
          description={card.description}
          tag={card.tag}
        />
      ))}
        
    </div>
  )
}

export default RightContent