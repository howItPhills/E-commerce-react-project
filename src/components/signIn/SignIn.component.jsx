import { useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsInvalid } from '../../redux/user/user.selectors';

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart, isInvalidEmailOrPassword }) => {
   const [userCredentials, setUserCredentials] = useState({
      email: '',
      password: '',
   });

   const { email, password } = userCredentials;

   const handleSubmit = event => {
      event.preventDefault();
      emailSignInStart(email, password)
   }

   const handleChange = e => {
      const { value, name } = e.target;
      setUserCredentials({
         ...userCredentials, [name]: value
      })
   }

   return (
      <div className='sign-in'>
         <h2 className='title'>Already have an account?</h2>
         <span className='subtitle'>Sign in with your email and password</span>
         <form action="#" onSubmit={handleSubmit}>
            <FormInput type="email" name='email' required value={email}
               label='Email' onChange={handleChange} />
            <FormInput label='Password' type="password" name='password' required value={password} onChange={handleChange} />
            <div className='buttons'>
               {
                  isInvalidEmailOrPassword ? <div className='sign-in-error'>Invalid Email or Password</div> : null
               }
               <CustomButton type="submit">
                  Sign in
               </CustomButton>
               <CustomButton onClick={googleSignInStart} isGoogleButton="true" type='button'>
                  Sign in with google
               </CustomButton>
            </div>
         </form>
      </div>
   )
}


const mapStateToProps = createStructuredSelector({
   isInvalidEmailOrPassword: selectIsInvalid,
})

const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)