import whatsappIcon from '../../img/whatsapp-btm.svg';

import "../../style/whatsapp.css"

function Whatsapp() {
    return (
        <a href="https://api.whatsapp.com/send?phone=556240099277" target="_blank" className='whatsapp-button'>
            <img src={whatsappIcon} alt="whatsapp-icon" className='whatsapp-icon' />
        </a>
    )
}

export default Whatsapp;