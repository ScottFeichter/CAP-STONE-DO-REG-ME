function DemoRegistrarLogin() {

    const handleClick = (e) =>
    {
        e.preventDefault;
        window.store.dispatch(
            window.sessionActions.thunkLogin({
              credential: "Demo-lition",
              password: "password",
            })
          );
    }


    return(<>


        <button
        onClick={handleClick}>Demo Registrar Login</button>




    </>)


}

export default DemoRegistrarLogin;
