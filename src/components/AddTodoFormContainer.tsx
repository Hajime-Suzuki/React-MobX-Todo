import { FormikProps, withFormik } from 'formik'
import * as React from 'react'

interface AddTodoFormChildProps {
  name: string
}

// TODO:
class AddTodoFormContainer extends React.PureComponent<
  FormikProps<AddTodoFormChildProps>
> {
  render() {
    return 'Add'
  }
}

export default withFormik<{}, AddTodoFormChildProps>({
  validateOnChange: false,
  handleSubmit: () => console.log('submit')
})(AddTodoFormContainer)
