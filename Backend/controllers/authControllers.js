import { User} from "../models/authModels.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const Register = async (req, res) => {
    const {username, password, email} = req.body; //es la info que va a coger
    try {
        const existingEmail = await User.findOne({email: email})
        if(existingEmail) {
           return res.status(400).json({message: "This email already exist"}) //si el email existe
        }
        const salt = await bcrypt.genSalt(10)//para encriptar la contraseña
        const hashPassword = await bcrypt.hash(password, salt)


        //si no el existe el email, creamos uno nuevo
        const credentials = new User({
            username: username,
            password: hashPassword,
            email: email
        })
        await credentials.save()
        res.status(200).json({message: "Register successfull", credentials})
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})

    }
}

export const Login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email:email}) //Buscamos si el email existe
        if(!user){
            return req.status(400).json({message:"invalid credentials"})
        }else{
            const validPassword = await bcrypt.compare(password, user.password) //verifica si la password coincide
            if(!validPassword) {
                return res.status = (400).json({message: "Invalid password"})
            }
        }

        //generamos un token tras el login
        const token = jwt.sign({
            email: email,
            role: user.role,
        },"codesecret")
        await res.header({
            "auth": token
        })
        res.status(200).json({message: "login successfull", token})
    } catch (error) {
        res.status(500).json({message:"Something went wrong", error})
    }

}