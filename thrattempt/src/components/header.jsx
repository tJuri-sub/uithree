import { InfoIcon } from "./icons";

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <a href="#">
        <img
          className="w-16 aspect-square"
          src="/icon.png"
          alt="VigiWheel Icon"
        />
      </a>
      <a href="">
        <InfoIcon />
      </a>
    </div>
  );
};
