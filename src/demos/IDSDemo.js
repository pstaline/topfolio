import React, { useState, useEffect } from 'react';
import './DemoStyles.css';

const IDSDemo = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [packets, setPackets] = useState([]);
  const [threats, setThreats] = useState([]);
  const [stats, setStats] = useState({ total: 0, safe: 0, malicious: 0 });

  const threatTypes = [
    { type: 'Port Scan', severity: 'high', description: 'Multiple connection attempts detected' },
    { type: 'SQL Injection', severity: 'critical', description: 'Malicious SQL query in HTTP request' },
    { type: 'DDoS Attack', severity: 'critical', description: 'Abnormal traffic volume detected' },
    { type: 'Brute Force', severity: 'high', description: 'Multiple failed login attempts' },
    { type: 'Malware', severity: 'critical', description: 'Suspicious payload detected' },
    { type: 'ARP Spoofing', severity: 'medium', description: 'ARP cache poisoning detected' }
  ];

  const generatePacket = () => {
    const isMalicious = Math.random() > 0.7;
    const srcIP = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    const dstIP = `10.0.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    const ports = [80, 443, 22, 3306, 8080, 21, 23];
    const protocols = ['TCP', 'UDP', 'ICMP', 'HTTP'];
    
    return {
      id: Date.now() + Math.random(),
      timestamp: new Date().toLocaleTimeString(),
      srcIP,
      dstIP,
      srcPort: Math.floor(Math.random() * 65535),
      dstPort: ports[Math.floor(Math.random() * ports.length)],
      protocol: protocols[Math.floor(Math.random() * protocols.length)],
      size: Math.floor(Math.random() * 1500) + 64,
      isMalicious
    };
  };

  const scanNetwork = () => {
    setIsScanning(true);
    const interval = setInterval(() => {
      const packet = generatePacket();
      
      setPackets(prev => {
        const updated = [packet, ...prev].slice(0, 15);
        return updated;
      });

      setStats(prev => ({
        total: prev.total + 1,
        safe: packet.isMalicious ? prev.safe : prev.safe + 1,
        malicious: packet.isMalicious ? prev.malicious + 1 : prev.malicious
      }));

      if (packet.isMalicious) {
        const threat = threatTypes[Math.floor(Math.random() * threatTypes.length)];
        setThreats(prev => [{
          ...threat,
          ip: packet.srcIP,
          timestamp: packet.timestamp,
          id: packet.id
        }, ...prev].slice(0, 5));
      }
    }, 800);

    setTimeout(() => {
      clearInterval(interval);
      setIsScanning(false);
    }, 15000);
  };

  const resetDemo = () => {
    setPackets([]);
    setThreats([]);
    setStats({ total: 0, safe: 0, malicious: 0 });
    setIsScanning(false);
  };

  const clearThreats = () => {
    setThreats([]);
  };

  return (
    <div className="demo ids-demo">
      <h4>🛡️ Network Intrusion Detection System - Live Simulation</h4>
      
      <div className="demo-controls">
        <button 
          onClick={scanNetwork} 
          disabled={isScanning}
          className="scan-btn"
        >
          {isScanning ? '⏸️ Scanning...' : '▶️ Start Network Scan'}
        </button>
        <button onClick={resetDemo} className="reset-btn">🔄 Reset</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total Packets</div>
        </div>
        <div className="stat-card safe">
          <div className="stat-value">{stats.safe}</div>
          <div className="stat-label">Safe</div>
        </div>
        <div className="stat-card danger">
          <div className="stat-value">{stats.malicious}</div>
          <div className="stat-label">Threats Detected</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {stats.total > 0 ? ((stats.safe / stats.total) * 100).toFixed(1) : 0}%
          </div>
          <div className="stat-label">Safety Rate</div>
        </div>
      </div>

      {threats.length > 0 && (
        <div className="threats-section">
          <div className="threats-header">
            <h5>🚨 Active Threats</h5>
            <button onClick={clearThreats} className="clear-threats-btn">
              🧹 Nettoyer les menaces
            </button>
          </div>
          <div className="threats-list">
            {threats.map(threat => (
              <div key={threat.id} className={`threat-item ${threat.severity}`}>
                <div className="threat-header">
                  <span className="threat-type">{threat.type}</span>
                  <span className={`severity-badge ${threat.severity}`}>{threat.severity}</span>
                </div>
                <div className="threat-details">
                  <span>📍 {threat.ip}</span>
                  <span>🕐 {threat.timestamp}</span>
                </div>
                <div className="threat-desc">{threat.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="packets-section">
        <h5>📊 Network Traffic Monitor</h5>
        <div className="packets-table">
          <div className="table-header">
            <span>Time</span>
            <span>Source IP</span>
            <span>Dest IP</span>
            <span>Protocol</span>
            <span>Port</span>
            <span>Size</span>
            <span>Status</span>
          </div>
          {packets.map(packet => (
            <div key={packet.id} className={`table-row ${packet.isMalicious ? 'malicious' : ''}`}>
              <span>{packet.timestamp}</span>
              <span>{packet.srcIP}</span>
              <span>{packet.dstIP}</span>
              <span>{packet.protocol}</span>
              <span>{packet.dstPort}</span>
              <span>{packet.size}B</span>
              <span className={packet.isMalicious ? 'status-danger' : 'status-safe'}>
                {packet.isMalicious ? '⚠️ Threat' : '✓ Safe'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IDSDemo;
