import Image from "next/image";
export default function Link({ title, date, link }) {
  return (
    <li>
      <a href={link} className="link-button">
        <div className="icon-div">
          <Image src="/resources.svg" width={25} height={25} alt="Link Icon" />
        </div>

        <div className="text-div">
          <h6>{title}</h6>
          <p>{date}</p>
        </div>
      </a>
    </li>
  );
}
