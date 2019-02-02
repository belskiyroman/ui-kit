import React from 'react';
import PropTypes from 'prop-types';
import * as ButtonType from './button.styled';


function Button({ children, type, ...props }) {
  const ButtonStyled = ButtonType[type];

  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  children: null,
  type: 'standard',
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(Object.keys(ButtonType)),
};


const MemoButton = React.memo(Button);
export { MemoButton as Button };
