import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils'


export default class SignIn extends Component {
   constructor(props) {
      super(props)

      this.state = {
         email: '',
         password: '',
      }
   }

   handleSubmit = event => {
      event.preventDefault();

      this.setState({
         email: '',
         password: '',
      })
   }

   handleChange = e => {
      const { value, name } = e.target;

      this.setState({
         [name]: value
      })
   }

   render() {
      return (
         <div className='sign-in'>
            <h2 className='title'>Already have an account?</h2>
            <span className='subtitle'>Sign in with your email and password</span>
            <form action="#" onSubmit={this.handleSubmit}>
               <FormInput type="email" name='email' required value={this.state.email}
                  label='Email' onChange={this.handleChange} />
               <FormInput label='Password' type="password" name='password' required value={this.state.password} onChange={this.handleChange} />
               <div className='buttons'>
                  <CustomButton type="submit">
                     Sign in
                  </CustomButton>
                  <CustomButton onClick={signInWithGoogle} className='google-button'>
                     Sign in with google
                  </CustomButton>
               </div>
            </form>
         </div>
      )
   }
}
