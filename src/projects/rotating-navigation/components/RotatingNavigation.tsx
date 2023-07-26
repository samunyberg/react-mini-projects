import "./RotatingNavigation.css";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";
import { useState } from "react";

const RotatingNavigation = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={showNav ? "navPanel showNav" : "navPanel"}>
      <nav className="nav">
        <ul>
          <li>
            <AiOutlineHome />
            Home
          </li>
          <li>
            <AiOutlineInfoCircle />
            About
          </li>
          <li>
            <BsEnvelopeAt />
            Contact
          </li>
        </ul>
      </nav>
      <div className="circleContainer" onClick={() => setShowNav(!showNav)}>
        <div className="circle">
          <span className="icon icon-open">
            <HiMenu />
          </span>
          <span className="icon icon-close">
            <MdClose />
          </span>
        </div>
      </div>
      <div className={showNav ? "rotatingPanel showNav" : "rotatingPanel"}>
        <div className="contentContainer">
          <div className="content">
            <h1>Awesome article</h1>
            <h2>John Smith</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
              tenetur veniam id totam quod, unde, odio rem minima aliquam
              temporibus ducimus expedita pariatur doloribus! Vitae voluptatum
              excepturi odio sed beatae, magni cumque nisi totam minus veritatis
              mollitia sequi laudantium architecto, corrupti pariatur adipisci
              nostrum accusamus perspiciatis perferendis ipsum dignissimos eum,
              quo dolore? Quidem aliquid dolores, ipsam suscipit eaque ab.
              Reprehenderit eaque harum aspernatur quod nihil nesciunt error. A
              tempora deserunt nesciunt ducimus aperiam pariatur ipsum corporis
              veritatis expedita eum quas ut quibusdam voluptatibus distinctio
              magnam, soluta iste repellendus! Deserunt perferendis
              exercitationem tenetur a temporibus odit ab eius, nihil ea?
            </p>
            <h3>A Good Boy</h3>
            <img
              className="img"
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            ></img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facilis voluptatum, similique, ex et earum consequatur minima
              eveniet pariatur unde modi magnam cum est doloremque corporis qui
              vel doloribus aspernatur numquam voluptas, expedita maiores. Nam
              omnis dicta quae quo optio minima magnam, deleniti, modi, sequi
              illo consequuntur maxime praesentium. Adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingNavigation;
