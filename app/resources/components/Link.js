export default function Link({ title, date, link, icon }) {
  return (
    <li>
      <a href={link} className="link-button">
        <div className="icon-div">{icon}</div>
        <div className="text-div">
          <h6>{title}</h6>
          <p>{date}</p>
        </div>
      </a>
    </li>
  );
}
