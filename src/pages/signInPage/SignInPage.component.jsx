import { withSpinner } from '../../components/with-spinner/withSpinner.HOC'

import SignUp from '../../components/sign-up/SignUp.component'
import SignIn from '../../components/signIn/SignIn.component'

import './sign-in-page.styles.scss'

const SignInPage = () => (
   <div className='sign-in-page'>
      <SignIn />
      <SignUp />
   </div>
)

export default withSpinner(SignInPage)