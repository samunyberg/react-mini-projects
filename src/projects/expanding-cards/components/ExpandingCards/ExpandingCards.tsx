import { useState } from "react";
import "./ExpandingCards.css";

const panels = [
  {
    id: 1,
    backgroundUrl:
      "https://images.unsplash.com/photo-1685189219324-a4ca49a306bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    label: "Rocky Ocean View",
  },
  {
    id: 2,
    backgroundUrl:
      "https://images.unsplash.com/photo-1681174068505-f6b217ff2126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    label: "Desert Dunes",
  },
  {
    id: 3,
    backgroundUrl:
      "https://images.unsplash.com/photo-1672243777342-0698e84a41fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    label: "Ocean Coastline",
  },
  {
    id: 4,
    backgroundUrl:
      "https://images.unsplash.com/photo-1676466920684-5d1aae90c9c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    label: "Snowy Mountain Top",
  },
  {
    id: 5,
    backgroundUrl:
      "https://images.unsplash.com/photo-1687800132770-8f1600a5849e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    label: "Northern Mountain Range",
  },
];

const ExpandingCards = () => {
  const [selectedPanel, setSelectedPanel] = useState(panels[0].id);

  return (
    <div className="container">
      {panels.map((panel) => (
        <div
          key={panel.id}
          onClick={() => setSelectedPanel(panel.id)}
          className={selectedPanel == panel.id ? "panel active" : "panel"}
          style={{
            backgroundImage: `url(${panel.backgroundUrl})`,
          }}
        >
          <h3 className="label">{panel.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
