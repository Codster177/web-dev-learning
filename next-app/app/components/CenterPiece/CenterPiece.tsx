import React from "react";

interface Props {
  header: string;
  children?: string;
  buttonBool?: boolean;
  buttonTxt?: string;
  className?: string;
}

const CenterPiece = ({
  header,
  children = "",
  buttonBool = false,
  buttonTxt = "",
  className = ""
}: Props) => {
  if (className != "")
  {
    className = "hero bg-base-800 min-h-100 lg:min-h-200 " + className;
  }
  else
  {
    className = "hero bg-base-800 min-h-100 lg:min-h-200";
  }

  function buttonHandler() {
    if (buttonBool) {
      return <button className="btn btn-primary">{buttonTxt}</button>;
    } else {
      return null;
    }
  }

  return (
    <div className={className}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{header}</h1>
          <p className="py-6">{children}</p>
          {buttonHandler()}
        </div>
      </div>
    </div>
  );
};

export default CenterPiece;
