import { useState } from "react";
import { supabase } from "../supabase";
import "./sec10.css";

const Sec10 = () => {
  const [step, setStep] = useState(1);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const [formData, setFormData] = useState({
    visitorName: "",
    visitorEmail: "",
    specialty: "",
    visitorNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const id = `HEX-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketId(id);
  
    const { data, error } = await supabase.from("visitors").insert([
      {
        visitor_name: formData.visitorName,
        visitor_email: formData.visitorEmail,
        specialty: formData.specialty,
        visitor_number: id,
        status: "pending",
      }
    ]);
  
  
    if (error) {
      console.error("Supabase error:", error);
      alert("Error saving data ❌");
      return;
    }
  
    console.log("Saved successfully:", data);
  
    setShowTicket(true);
  };
  return (
    <section className="reg-section">

      
      <div className="reg-left">
        <p className="reg-title-overlay">Register</p>

        <model-viewer
          src="/human_heart_3d.glb"
          auto-rotate
          camera-controls
          disable-zoom
          rotation-per-second="30deg"
          shadow-intensity="1"
          className="reg-model-viewer"
        />

        <div className="reg-ticket-badge">
          <span className="reg-ticket-dot" />
          <span className="reg-ticket-label">TICKETS REMAINING</span>
          <span className="reg-ticket-count">4,532</span>
        </div>
      </div>


      <div className="reg-right">

        

        <div className="reg-divider" />

        {showTicket ? (


          <div className="ticket-wrap">
            <div className="ticket-card">

           
              <div className="ticket-circle ticket-circle--1" />
              <div className="ticket-circle ticket-circle--2" />
              <div className="ticket-circle ticket-circle--3" />

             
              <div className="ticket-top">
                <span className="ticket-event">AFRICA HEALTH EXCON 2025</span>
                <span className="ticket-badge">CONFIRMED</span>
              </div>

              <div className="ticket-divider-dashed" />

          
              <div className="ticket-name">{formData.visitorName}</div>
              <div className="ticket-email">{formData.visitorEmail}</div>

              <div className="ticket-row">
                <div className="ticket-col">
                  <span className="ticket-col-label">SPECIALTY</span>
                  <span className="ticket-col-value">{formData.specialty || "—"}</span>
                </div>
                <div className="ticket-col">
                  <span className="ticket-col-label">ACCESS</span>
                  <span className="ticket-col-value">All 4 Days</span>
                </div>
                <div className="ticket-col">
                  <span className="ticket-col-label">TYPE</span>
                  <span className="ticket-col-value">General</span>
                </div>
              </div>

              <div className="ticket-divider-dashed" />

         
              <div className="ticket-bottom">
                <div className="ticket-id-wrap">
                  <span className="ticket-id-label">TICKET ID</span>
                  <span className="ticket-id">{ticketId}</span>
                </div>
                <div className="ticket-barcode">
                  {[...Array(18)].map((_, i) => (
                    <span key={i} className="ticket-bar" style={{ height: `${20 + Math.random() * 20}px` }} />
                  ))}
                </div>
              </div>


              <div className="ticket-border-anim" />
            </div>

            <p className="ticket-hint">Check your email for your digital copy.</p>
          </div>

        ) : (


          <form onSubmit={handleSubmit}>

            <div className="reg-steps-row">
              {['Personal Details', 'Professional Info'].map((label, i) => (
                <div key={i} className={`reg-step-dot ${i + 1 === step ? 'active' : ''} ${i + 1 < step ? 'done' : ''}`}>
                  <span className="reg-step-num">{i + 1}</span>
                  {i + 1 === step && <span className="reg-step-label">{label}</span>}
                </div>
              ))}
            </div>

            <h2 className="reg-step-title">{step === 1 ? 'Personal Details' : 'Professional Info'}</h2>
            <p className="reg-step-sub">Step 0{step} of 02</p>

            {step === 1 && (
              <>
                <div className="reg-field">
                  <label>FULL NAME *</label>
                  <input name="visitorName" value={formData.visitorName} onChange={handleChange} placeholder="Full Name" required />
                </div>
                <div className="reg-field">
                  <label>EMAIL ADDRESS *</label>
                  <input name="visitorEmail" value={formData.visitorEmail} onChange={handleChange} placeholder="Email Address" type="email" required />
                </div>
                <div className="reg-field">
                  <label>PHONE NUMBER</label>
                  <input name="visitorNumber" value={formData.visitorNumber} onChange={handleChange} placeholder="+20 xxx xxx xxxx" />
                </div>
                <div className="reg-btn-row">
                  <button type="button" className="reg-continue-btn" onClick={() => setStep(2)}>Continue →</button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="reg-field">
                  <label>SPECIALTY</label>
                  <input name="specialty" value={formData.specialty} onChange={handleChange} placeholder="e.g. Cardiology" />
                </div>
                <div className="reg-btn-row">
                  <button type="button" className="reg-back-btn" onClick={() => setStep(1)}>← Back</button>
                  <button type="submit" className="reg-continue-btn">Complete Registration →</button>
                </div>
              </>
            )}

          </form>
        )}
      </div>
    </section>
  );
};

export default Sec10;