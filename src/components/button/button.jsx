import React from 'react';
import PropTypes from 'prop-types';
import {
  StandardStyled,
  LightStyled,
  LinkStyled,
} from './button.styled';


const ButtonType = {
  standard: StandardStyled,
  light: LightStyled,
  link: LinkStyled,
};


function Button({ children, theme, ...props }) {
  const ButtonStyled = ButtonType[theme];

  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  children: null,
  loading: false,
  color: 'blue',
  theme: 'standard',
};

Button.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
  color: PropTypes.oneOf(['blue', 'red']),
  theme: PropTypes.oneOf(Object.keys(ButtonType)),
};


const MemoButton = React.memo(Button);
export { MemoButton as Button };
