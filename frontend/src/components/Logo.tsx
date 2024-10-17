import React from "react";

const Logo: React.FC<{ onClick: () => void }> = React.memo(({ onClick }) => (
  <img
    src="/logo.png"
    alt="Teddy Open Finance"
    className="h-auto w-24 cursor-pointer"
    onClick={onClick}
  />
));

export default Logo;
