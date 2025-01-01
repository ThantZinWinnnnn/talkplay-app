import authImage from "../assets/authImage.png";

const AuthenticationPage = () => {
  return (
    <main className="flex w-screen h-screen">
      <div className="w-3/5 h-full flex flex-col justify-center items-center">
        <h1>Let's Chat And Play Games</h1>
      </div>
      <div className="w-2/5 h-full">
        <img
          src={authImage}
          alt="authImage"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
};

export default AuthenticationPage;
