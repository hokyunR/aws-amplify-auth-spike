const Home = ({ user, signOut }) => {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default Home
