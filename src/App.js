import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "saddsa1",
      label: "Introduction",
      content:
        " Welcome to our website! We're excited to share our products and services with you.",
    },
    {
      id: "sadddsdasa1",
      label: "Our Team",
      content:
        "Meet our dedicated team of professionals who work tirelessly to deliver top-notch solutions to our clients.",
    },
    {
      id: "ji2nee2i",
      label: "Services Offered",
      content:
        "Explore a wide range of services we provide, including web design, digital marketing, and software development.",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
