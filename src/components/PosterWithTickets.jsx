import poster from "../images/poster.jpeg";

const TICKET_LINKS = [
  {
    id: "aug-6",
    label: "August 6th Tickets – Huartan, Signor Bari, Ruairi",
    href: "#",
    top: "53%",
    left: "34%",
    width: "14%",
    height: "3.5%",
  },
  {
    id: "aug-7",
    label: "August 7th Tickets – Le Cheile x Lonesome George",
    href: "#",
    top: "65%",
    left: "33.5%",
    width: "14%",
    height: "3.5%",
  },
  {
    id: "aug-8",
    label: "August 8th Tickets – Holly Lester, Reger Heads, Optimst",
    href: "#",
    top: "78.5%",
    left: "32%",
    width: "14%",
    height: "3.5%",
  },
];

export default function PosterWithTickets() {
  return (
    <div className="poster-wrapper">
      <div className="poster-image-container">
        <img
          src={poster}
          alt="Kingstorm Fleadh – August 6th, 7th, 8th at Ravenhill Arts Club"
          className="poster-image"
        />

        {TICKET_LINKS.map((ticket) => (
          <a
            key={ticket.id}
            href={ticket.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-link"
            aria-label={ticket.label}
            style={{
              top: ticket.top,
              left: ticket.left,
              width: ticket.width,
              height: ticket.height,
            }}
          />
        ))}
      </div>
    </div>
  );
}
