import PropTypes from 'prop-types';

const Button=({text , button_type , onClick , onVisible}) =>{
   
    return (
        <button className={button_type} onClick={onClick} onClick={onVisible}>{text}</button>
    )
}
//style={{background-color :'color.text'}}
export default Button

Button.prototypes = {
    text: PropTypes.string,
    button_type: PropTypes.string,
    onClick: PropTypes.func,
}