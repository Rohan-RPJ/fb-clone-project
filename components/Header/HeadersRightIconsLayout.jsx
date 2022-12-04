
const HeadersRightIconsLayout = (props) => {
  return (
    <div className={`${props.index !== 3 ? "mr-2" : "-mr-1"} relative`}>{props.children}</div>
  );
};

export default HeadersRightIconsLayout;
