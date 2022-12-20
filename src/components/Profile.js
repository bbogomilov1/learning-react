function Profile(props) {
  const { name, lastname } = props;
  return (
    <h1>
      This is the profile of {name} {lastname}
    </h1>
  );
}

export default Profile;
