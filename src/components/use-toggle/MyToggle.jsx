import useToggle from "./useToggle";

const MyToggle = () => {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isToggled ? "Hide" : "SHow"} Details</button>
      {isToggled && <p>Here are the details toggled</p>}
    </div>
  );
};
export default MyToggle;
