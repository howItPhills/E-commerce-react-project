import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import './sign-in.styles.scss';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectErrorMessage, selectIsInvalid } from '../../redux/user/user.selectors';

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
      const { googleSignInStart, isInvalidEmailOrPassword } = this.props;
      return (
         <div className='sign-in'>
            <h2 className='title'>Already have an account?</h2>
            <span className='subtitle'>Sign in with your email and password</span>
            <form action="#" onSubmit={this.handleSubmit}>
               <FormInput type="email" name='email' required value={this.state.email}
                  label='Email' onChange={this.handleChange} />
               <FormInput label='Password' type="password" name='password' required value={this.state.password} onChange={this.handleChange} />
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
}

const mapStateToProps = createStructuredSelector({
   isInvalidEmailOrPassword: selectIsInvalid,
})

const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)