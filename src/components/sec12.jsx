import React, { useState } from 'react';
import { supabase } from '../supabase';
import './sec12.css';

const Sec12 = () => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  
  
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault(); 
    setLoading(true);

  
    const { error } = await supabase.from('messangs').insert([
      {
        user_name: userName,
        user_email: userEmail,
        message: message,
      }
    ]);

    if (error) {
      alert("Error: " + error.message);
      setLoading(false);
    } else {
      setLoading(false);
      setSent(true); 
    }
  }

  return (
    <section className="cf-section">
      
     
      <div className="cf-left">
        <div className="cf-weather-card">
          <span className="cf-weather-temp">26°</span>
          <div className="cf-weather-info">
            <span className="cf-weather-city">CAIRO</span>
            <span className="cf-weather-status">LIGHT RAIN</span>
          </div>
        </div>
      </div>


      <div className="cf-right">
        {sent ? (
          <div className="cf-success">
            <h3>✓ Message Sent!</h3>
            <p>We'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <h3 className="cf-form-title">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="cf-form">
              
              <div className="cf-row">
                <div className="cf-field">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>

                <div className="cf-field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="cf-field">
                <label>Message *</label>
                <textarea
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                />
              </div>

              <button type="submit" className="cf-submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Sec12;