import React from "react";
import LogoImg from "../../public/ankit-logo.png";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex justify-center items-center mt-2">
      <Image src='/A-logo.png' alt='logo' width={50} height={50}/> {/* Added leading slash */}
      
    </div>
    //
  );
}

export default Logo;