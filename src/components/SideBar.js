import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
  ];

  const renderdLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path} className='mb-3' activeClassName='font-bold border-l-4 border-blue-500 pl-2'>
        {link.label}
      </Link>
    );
  });
//overflow-y-scroll can be added for scrollbar in sidebar
  return <div className="sticky top-0  flex flex-col item-start">
    {renderdLinks}
  </div>;
}

export default Sidebar;
