import {useForm} from 'react-hook-form'

function ReactHookFormExamplePage() {

    const {
        register, 
        handleSubmit, 
        reset,
        formState: {errors}
    } = useForm();

    function onSubmitForm(formData){
        console.log(formData);
        reset();
    }
    
    return (
        <div>
            <h1>React Hook From</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label>Email</label>
                    <input {...register('email', {
                        required : true
                    })} name="email" type="email" />
                    {errors.email && errors.email.type === 'required' 
                    ? <p style={{color : 'red', fontWeight : 'bolder', margin: '20px'}}>Email is Required </p>
                    : null
                }
                </div>
                <div>
                <label>Password</label>
                <input {...register('password', {
                    required : true,
                    minLength : 6
                })} name="password" type="password"/>
                {
                    errors.password && errors.password.type === 'required'
                    ?  <p style={{color : 'red', fontWeight : 'bolder', margin: '20px'}}>Password is Required </p>
                    : null
                }
                {
                    errors.password && errors.password.type === 'minLength'
                    ? <p style={{color : 'red', fontWeight : 'bolder', margin: '20px'}}>Password should be 6 character </p>
                    : null
                }
                </div>
                <button  type="submit">Submit</button>
                
            </form>
        </div>
    )
}
export default ReactHookFormExamplePage