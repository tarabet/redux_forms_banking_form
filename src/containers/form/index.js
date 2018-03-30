import React from 'react';
import * as R from 'ramda';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { TOGGLE_MODAL } from '../../modules/modal';
import {
  Grid,
  Row,
  Col,
  Well,
  Panel,
  Button,
  ButtonToolbar
} from 'react-bootstrap';
import FormInput from '../../components/form-components/FormInput';
import { required, email } from '../../utils/validators';
import { asyncValidate } from '../../utils/asyncValidators';
import { formName } from '../../config/config';
import { SubmitModal } from '../../components/page-components/SubmitModal';

const capitalise = string =>
  string && string.charAt(0).toUpperCase() + string.slice(1);

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.props.toggleModal(true);
  }

  hideModal() {
    this.props.toggleModal(false);
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <Grid>
        <SubmitModal
          showModal={this.props.showModal}
          hideModal={this.hideModal}
          result={this.props.submitSucceeded}
        />
        <Row className="show-grid">
          <Col xs={12} md={6} mdOffset={3}>
            <form onSubmit={handleSubmit(this.showModal)}>
              <Field
                name="name"
                normalize={capitalise}
                component={FormInput}
                type="text"
                controlLabel="Name"
                helperText="Enter valid name here"
                validate={[required]}
              />
              <Field
                name="surname"
                normalize={capitalise}
                component={FormInput}
                type="text"
                controlLabel="Surname"
                helperText="Enter valid surname here"
                validate={[required]}
              />
              <Field
                name="email"
                component={FormInput}
                type="text"
                controlLabel="Email"
                helperText="Enter valid email here"
                validate={[required, email]}
              />
              <Field
                name="IBAN"
                component={FormInput}
                type="text"
                controlLabel="IBAN"
                helperText="Enter valid IBAN here"
                validate={[required]}
              />
              <ButtonToolbar>
                <Button
                  type="submit"
                  disabled={pristine || submitting || invalid}>
                  Submit
                </Button>
              </ButtonToolbar>
            </form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <Panel>
              <Panel.Body>
                <Well bsSize="small">{this.props.name}</Well>
                <Well bsSize="small">{this.props.surname}</Well>
                <Well bsSize="small">{this.props.email}</Well>
                <Well bsSize="small">{this.props.IBAN}</Well>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector(formName);

  return {
    showModal: state.modal.showModal,
    name: selector(state, 'name'),
    surname: selector(state, 'surname'),
    email: selector(state, 'email'),
    IBAN: selector(state, 'IBAN')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: flag => dispatch({ type: TOGGLE_MODAL, payload: flag })
  };
};

export const ContactForm = R.compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: formName,
    asyncValidate,
    asyncBlurFields: ['IBAN']
  })
)(FormComponent);
