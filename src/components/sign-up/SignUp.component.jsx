import React, { Component } from 'react';
import './sign-up.styles.scss';

import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';

import { auth } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from '../../firebase/firebase.utils';


export default class SignUp extends Component {
   constructor(props) {
      super(props)

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: '',
      }
   }

   handleChange = event => {
      const { name, value } = event.target;

      this.setState({
         [name]: value
      })
   }

   handleSubmit = async event => {
      event.preventDefault();

      const { displayName, email, password, confirmPassword } = this.state

      if (password !== confirmPassword) {
         alert('Passwords dont match');
         return;
      }
      try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password)
         await createUserProfileDocument(user, { displayName });
         this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
         })
      } catch (error) {
         console.log('Failed registry', error.message)
      }
   }

   render() {
      const { displayName, email, password, confirmPassword } = this.state
      return (
         <div className='sign-up'>
            <h2 className='title'>Dont have an account?</h2>
            <span className='subtitle'>Sign up with Email and Password</span>
            <form onSubmit={this.handleSubmit}>
               <FormInput
                  name='displayName'
                  type='text'
                  value={displayName}
                  label='Your name'
                  required
                  handleChange={this.handleChange}
               />
               <FormInput
                  name='email'
                  type='email'
                  value={email}
                  label='Your email'
                  required
                  handleChange={this.handleChange}
               />
               <FormInput
                  name='password'
                  type='password'
                  value={password}
                  label='Your Password'
                  required
                  handleChange={this.handleChange}
               />
               <FormInput
                  name='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  label='Confirm password'
                  required
                  handleChange={this.handleChange}
               />
               <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
         </div>
      )
   }
}
