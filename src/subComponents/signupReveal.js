import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const SignupReveal = (props) => (
  <Modal closeOnDimmerClick={false} trigger={props.button} basic size='small'>
    <Header icon='archive' content='Account Created Successfully' />
    <Modal.Content>
      <p>
       Thanks for creating account
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Link to="/">
      <Button color='green' inverted>
        <Icon name='checkmark' /> Go To Main
      </Button>
      </Link>
    </Modal.Actions>
  </Modal>
)

export default SignupReveal
