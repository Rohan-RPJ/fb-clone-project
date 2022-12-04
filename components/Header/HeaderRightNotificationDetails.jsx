import { BellIcon } from "@heroicons/react/24/solid";

const HeaderRightNotificationDetails = ({
  className,
  iconWidth,
  iconHeight,
}) => {
  return (
    <BellIcon
      width={iconWidth}
      height={iconHeight}
      className={`${className}`}
    />
  );
};

export default HeaderRightNotificationDetails;
