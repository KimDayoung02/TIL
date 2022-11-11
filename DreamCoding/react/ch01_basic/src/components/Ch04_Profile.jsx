import Avatar from "./Ch04_Avatar";
// (props 자리에 {imgUrl, name, job} 이렇게 넣어서 그냥 써도 됨)
function Profile(props) {
  //여기서 매개변수 안에 props가 아닌 {imgUrl, name, job}이렇게 넣는다면 사용할 때 앞에 props명을 붙이지 않아도 됨
  return (
    <div className="profile">
      <Avatar imgUrl={props.imgUrl} new={props.new} />
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  );
}
export default Profile;
