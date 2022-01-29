import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import './sign-in.styles.scss';
// import { signInWithGoogle } from '../../firebase/firebase.utils'
// import { auth } from '../../firebase/firebase.utils';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignIn extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
      }
   }

   handleSubmit = event => {
      event.preventDefault();
      const { email, password } = this.state;
      const { emailSignInStart } = this.props
      emailSignInStart(email, password)
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
      const { googleSignInStart } = this.props;
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
                  <CustomButton onClick={googleSignInStart} isGoogleButton="true" type='button'>
                     Sign in with google
                  </CustomButton>
               </div>
            </form>
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)