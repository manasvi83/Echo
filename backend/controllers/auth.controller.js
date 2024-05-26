export const login = async (req, res) => {
    try{
    const {fullName, username, password, confirmPassword, gender} = req.body;
    } catch (error){

    }
}

export const logout = (req, res) => {
    console.log("logout user");
    res.send("logout");
}

export const signup = (req, res) => {
    console.log("signup user");
    res.send("signup");
}

// export { authController };