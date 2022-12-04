import { Squares2X2Icon } from "@heroicons/react/24/solid";

const HeaderRightOtherAppsDetails = ({ className, iconWidth, iconHeight }) => {
  return (
    <Squares2X2Icon
      width={iconWidth}
      height={iconHeight}
      className={`${className}`}
    />
  );
};

export default HeaderRightOtherAppsDetails;
