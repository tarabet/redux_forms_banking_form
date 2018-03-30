import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

export default class FormInput extends React.Component {
  render() {
    const {
      controlLabel,
      helperText,
      input: { value, name, onChange, onBlur },
      meta: { touched, error }
    } = this.props;

    return (
      <FormGroup
        validationState={touched ? (error ? 'error' : 'success') : null}>
        <ControlLabel>{controlLabel}</ControlLabel>
        <FormControl
          type={this.props.type}
          name={name}
          value={value}
          onChange={value => onChange(value)}
          onBlur={e => onBlur(e)}
        />
        <FormControl.Feedback />
        <HelpBlock>{touched && error ? error : helperText}</HelpBlock>
      </FormGroup>
    );
  }
}
