
import Image from "next/image";

const Link = ({ mouseOverEvent, mouseOutEvent, src }) => {
    return (
      <Image 
      onMouseOut={mouseOutEvent} 
      onMouseOver={mouseOverEvent} 
      src="/coverbg.png"
      width={0}
      height={0}
      alt=""
      />
    );
  };
  
  export default Link;