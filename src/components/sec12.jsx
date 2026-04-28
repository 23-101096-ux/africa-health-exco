import { useState } from 'react';
import { supabase } from '../supabase';
import './sec12.css';

const Sec12 = () => {
  const [userName, setUserName]   = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage]     = useState('');
  const [loading, setLoading]     = useState(false);
  const [sent, setSent]           = useState(false);
  const [error, setError]         = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await supabase.from('masseges').insert([{
      user_name:  userName,
      user_email: userEmail,
      message:    message,
    }]);

    if (res.error) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
      return;
    }

    setLoading(false);
    setSent(true);
  };

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
            <div className="cf-success-icon">✓</div>
            <h3>Message Sent!</h3>
            <p>We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <>
            <h3 className="cf-form-title">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="cf-form">

              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="cf-name">Your Name *</label>
                  <input
                    id="cf-name"
                    type="text"
                    placeholder="John Doe"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="cf-field">
                  <label htmlFor="cf-email">Email Address *</label>
                  <input
                    id="cf-email"
                    type="email"
                    placeholder="john@example.com"
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="cf-field">
                <label htmlFor="cf-message">Message *</label>
                <textarea
                  id="cf-message"
                  placeholder="How can we help you?"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  rows={6}
                />
              </div>

              {error && <p className="cf-error">{error}</p>}

              <button type="submit" className="cf-submit-btn" disabled={loading}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {loading ? 'Sending…' : 'Send Message'}
              </button>

            </form>
          </>
        )}

      </div>

    </section>
  );
};

export default Sec12;