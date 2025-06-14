import whatsappIcon from '../../img/whatsapp-btm.svg';

import "../../style/whatsapp.css"

function Whatsapp() {
    return (
        <a href="#" className='whatsapp-button'>
            <img src={whatsappIcon} alt="whatsapp-icon" className='whatsapp-icon' />
        </a>
    )
}

export default Whatsapp;