import {useForm} from "react-hook-form";
import './form.css';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {

    const schema = yup.object().shape({
        "fullName" : yup.string().required("Your Full Name is required."),
        "email" : yup.string().email().required("Your email is required."),
        "age" : yup.number().positive().integer().min(18).required("Your age must be equal or above 18."),
        "password" : yup.string().min(4).max(20).required("You must enter a password."),
        "confirmPassword" : yup.string().oneOf([yup.ref("password"), null]).required("Your password must match."),
        
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) =>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}> 
            <input type="text" placeholder="Full Name..." {...register("fullName")} />
            <p className="fullName-error">{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p className="fullName-error">{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p className="fullName-error">{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p className="fullName-error">{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <p className="fullName-error">{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    )
}