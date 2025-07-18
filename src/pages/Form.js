import {useForm} from "react-hook-form";
import './form.css';
export const Form = () => {

    const {register, handleSubmit} = useForm();


    const onSubmit = () =>{
        console.log("hello world.!")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}> 
            <input type="text" placeholder="Full Name..." />
            <input type="text" placeholder="Email..." />
            <input type="text" placeholder="Age..." />
            <input type="password" placeholder="Password..." />
            <input type="password" placeholder="Confirm Password..." />
            <input type="submit" />
        </form>
    )
}