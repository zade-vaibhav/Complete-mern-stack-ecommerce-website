import React from 'react'
import "./footer.css"
import shoppingLogo from "../Assets/shopping logo.svg"
import insta_icon from "../Assets/instagram_icon.png"
import pintrest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
                <img src={shoppingLogo} alt='cart-logo' />
                <p>Shopping</p>
            </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_icon">
        <div className="footer_icon_container">
            <img src={insta_icon}/>
        </div>
        <div className="footer_icon_container">
            <img src={pintrest_icon}/>
        </div>
        <div className="footer_icon_container">
            <img src={whatsapp_icon}/>
        </div>
      </div>

      <div className="footer_copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
