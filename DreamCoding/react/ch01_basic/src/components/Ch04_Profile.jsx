function Profile(props) {
  return (
    <div className="profile">
      <img className="profileImg" src={props.imgUrl} alt="예시사진" />
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  );
}
export default Profile;
