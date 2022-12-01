import React from 'react';
import "./Contact.scss";

function Contact() {
  return (
    <section className='contact'>
      <div className="title">
        <h3>Liên hệ</h3>
        <p>Để lại tin nhắn cho chúng tôi.</p>
      </div>
      <form class="cf">
        <div class="half left cf">
          <input type="text" id="input-first-name" placeholder="Họ" />
          <input type="text" id="input-last-name" placeholder="Tên" />
          <input type="email" id="input-email" placeholder="Email" />
        </div>
        <div class="half right cf">
          <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
    </section>
  )
}

export default Contact;
