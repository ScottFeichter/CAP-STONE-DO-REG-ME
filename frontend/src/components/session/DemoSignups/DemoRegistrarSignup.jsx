function DemoRegistrarSignup() {

    const handleClick = (e) =>
    {
        e.preventDefault;
        window.store.dispatch(
          window.sessionActions.signup({
            username: "DemoRegistrarSignupUser",
            firstName: "DemoRegistrarSignupUser",
            lastName: "DemoRegistrarSignupUser",
            email: "DemoRegistrarSignupUser@user.io",
            password: "password",
          })
        );

    }


    return(<>


        <button onClick={handleClick}>Demo Registrar Signup</button>




    </>)


}

export default DemoRegistrarSignup;
