export default function Avatar(props) {
  return (
    <div className="Avatar">
      <img className="profileImg" src={props.imgUrl} alt="ėėėŽė§"></img>
      {props.new && <span className="new">NEW!</span>}
    </div>
  );
}
