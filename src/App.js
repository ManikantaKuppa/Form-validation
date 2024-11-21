
import React,{useState} from 'react'

const App = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

const [errors,setErrors] = useState({
    email:"",
    password:""
});

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleSubmit(e);
  }
};

const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function handleSubmit(e){
        let hasErrors = false;

        e.preventDefault();

        if(email.trim() ===""){
            setErrors((errors)=>({...errors,email:"Enter email address"}))
            hasErrors = true;
        }
        else if(!emailpattern.test(email)){
            setErrors((errors)=>({...errors,email:"Enter Valid email address"}))
            hasErrors = true;
        }
        else{
            setErrors((errors)=>({...errors,email:""}))

        }

        if(password.trim() ===""){
            setErrors((errors)=>({...errors,password:"Enter your password"}))
            hasErrors = true;
        }
        else if(password.trim().length<8){
            setErrors((errors)=>({...errors,password:"Password should be at least 8 characters long"}))
            hasErrors = true;
        }
        
        else{
            setErrors((errors)=>({...errors,password:""}));
        }

        if(!hasErrors){
            alert('Form submitted successfully');
            setEmail('');
            setPassword('');
            setErrors({email:"",password:""});
            
        }

    }

  return (
    <div className='border w-25 mt-5 m-auto p-3'>
      
     <form onKeyDown={handleKeyDown}>
        <h2 className='text-primary text-center'>
          Login Form
        </h2>
        <div className='mt-3'>
          <label>Email</label>
          <input type='email' className='form-control' placeholder='Enter your email' value={email} onChange={(e)=>(setEmail(e.target.value))} />
          {errors.email&&<span className='text-danger'>{errors.email}</span>}
        </div>
        <div className='mt-3'>
          <label>Password</label>
          <input type='password' className='form-control' placeholder='Enter your password' value={password} onChange={(e)=>(setPassword(e.target.value))}/>
          {errors.password&&<span className='text-danger'>{errors.password}</span>}
        </div>
        <div className='mt-3'>
          <button onClick={handleSubmit} className='btn btn-primary w-100' >Login</button>
        </div>
     </form>
      
    </div>
  )
}

export default App


