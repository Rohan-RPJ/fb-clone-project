import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

const HeaderRightMessengerDetails = ({ className, iconWidth, iconHeight }) => {
  return (
    <ChatBubbleOvalLeftEllipsisIcon
      width={iconWidth}
      height={iconHeight}
      className={`${className}`}
    />
  );
};

export default HeaderRightMessengerDetails;
