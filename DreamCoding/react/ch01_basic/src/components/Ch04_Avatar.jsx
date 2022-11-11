export default function Avatar(props) {
  return (
    <div className="Avatar">
      <img className="profileImg" src={props.imgUrl} alt="예시사진"></img>
      {props.new && <span className="new">NEW!</span>}
    </div>
  );
}
