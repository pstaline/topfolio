import React, { useState } from 'react';
import './DemoStyles.css';

const EncryptionDemo = () => {
  const [message, setMessage] = useState('');
  const [encrypted, setEncrypted] = useState('');
  const [decrypted, setDecrypted] = useState('');
  const [messages, setMessages] = useState([]);
  const [activeUser, setActiveUser] = useState('Alice');

  // Simulation RSA/AES encryption
  const encryptMessage = (text) => {
    // Simulate encryption with base64 + random characters
    const base64 = btoa(text);
    const encrypted = base64.split('').map(char => {
      return Math.random() > 0.5 ? char : String.fromCharCode(char.charCodeAt(0) + Math.floor(Math.random() * 10));
    }).join('');
    return encrypted;
  };

  const simulateDecryption = (text) => {
    return text; // In real scenario, this would decrypt
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const encryptedMsg = encryptMessage(message);
    setEncrypted(encryptedMsg);

    setTimeout(() => {
      setDecrypted(message);
      const newMsg = {
        id: Date.now(),
        sender: activeUser,
        text: message,
        timestamp: new Date().toLocaleTimeString(),
        encrypted: encryptedMsg
      };
      setMessages([...messages, newMsg]);
      setMessage('');
    }, 1000);
  };

  const resetEncryption = () => {
    setMessage('');
    setEncrypted('');
    setDecrypted('');
  };

  const users = ['Alice', 'Bob'];
  const otherUser = activeUser === 'Alice' ? 'Bob' : 'Alice';

  return (
    <div className="demo encryption-demo">
      <h4>🔐 End-to-End Encrypted Messaging Platform</h4>
      
      <div className="encryption-info">
        <div className="info-card">
          <span className="info-icon">🔑</span>
          <div>
            <strong>Encryption</strong>
            <p>RSA-2048 + AES-256</p>
          </div>
        </div>
        <div className="info-card">
          <span className="info-icon">✓</span>
          <div>
            <strong>Status</strong>
            <p>Secure Connection</p>
          </div>
        </div>
        <div className="info-card">
          <span className="info-icon">👥</span>
          <div>
            <strong>Users</strong>
            <p>Alice ↔ Bob</p>
          </div>
        </div>
      </div>

      <div className="user-switcher">
        <p>Sending as:</p>
        {users.map(user => (
          <button
            key={user}
            className={`user-btn ${activeUser === user ? 'active' : ''}`}
            onClick={() => setActiveUser(user)}
          >
            {user}
          </button>
        ))}
      </div>

      <div className="message-input-section">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your secure message here..."
          className="message-input"
          rows="3"
        />
        <div className="message-buttons">
          <button onClick={sendMessage} className="send-btn">
            🔒 Encrypt & Send
          </button>
          {(message || encrypted) && (
            <button onClick={resetEncryption} className="reset-btn">
              🔄 Reset
            </button>
          )}
        </div>
      </div>

      {encrypted && (
        <div className="encryption-process">
          <div className="process-step">
            <h5>1️⃣ Original Message</h5>
            <div className="code-block">{message}</div>
          </div>
          <div className="process-arrow">⬇️ RSA + AES Encryption</div>
          <div className="process-step">
            <h5>2️⃣ Encrypted (In Transit)</h5>
            <div className="code-block encrypted-text">{encrypted}</div>
          </div>
          <div className="process-arrow">⬇️ RSA + AES Decryption</div>
          <div className="process-step">
            <h5>3️⃣ Decrypted by Recipient</h5>
            <div className="code-block">{decrypted}</div>
          </div>
        </div>
      )}

      <div className="chat-window">
        <h5>💬 Secure Chat History</h5>
        <div className="messages-list">
          {messages.length === 0 ? (
            <div className="no-messages">No messages yet. Start a secure conversation!</div>
          ) : (
            messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender === activeUser ? 'sent' : 'received'}`}>
                <div className="message-header">
                  <strong>{msg.sender}</strong>
                  <span className="timestamp">{msg.timestamp}</span>
                </div>
                <div className="message-content">{msg.text}</div>
                <div className="encryption-badge">🔒 E2E Encrypted</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EncryptionDemo;
