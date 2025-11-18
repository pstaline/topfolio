import React, { useState, useEffect } from 'react';
import './DemoStyles.css';

const DashboardDemo = () => {
  const [users, setUsers] = useState(1247);
  const [revenue, setRevenue] = useState(45280);
  const [activeUsers, setActiveUsers] = useState(892);
  const [growth, setGrowth] = useState(12.5);
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => prev + Math.floor(Math.random() * 3));
      setRevenue(prev => prev + Math.floor(Math.random() * 100));
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
      setGrowth(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5))));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const recentActivity = [
    { id: 1, user: 'Alice Johnson', action: 'Upgraded to Pro', time: '2 min ago', type: 'upgrade' },
    { id: 2, user: 'Bob Smith', action: 'Created new project', time: '5 min ago', type: 'project' },
    { id: 3, user: 'Carol White', action: 'Invited 3 team members', time: '12 min ago', type: 'team' },
    { id: 4, user: 'David Brown', action: 'Completed onboarding', time: '18 min ago', type: 'onboarding' },
    { id: 5, user: 'Emma Davis', action: 'API key generated', time: '25 min ago', type: 'api' }
  ];

  const chartData = [
    { month: 'Jan', value: 4200 },
    { month: 'Feb', value: 5100 },
    { month: 'Mar', value: 6300 },
    { month: 'Apr', value: 5800 },
    { month: 'May', value: 7200 },
    { month: 'Jun', value: 8100 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  const topFeatures = [
    { name: 'API Integration', usage: 89, color: '#64ffda' },
    { name: 'Analytics Dashboard', usage: 76, color: '#00d4ff' },
    { name: 'Team Collaboration', usage: 68, color: '#8892b0' },
    { name: 'Custom Reports', usage: 54, color: '#ccd6f6' }
  ];

  return (
    <div className="demo dashboard-demo">
      <h4>📊 SaaS Analytics Dashboard</h4>

      <div className="period-selector">
        {['day', 'week', 'month', 'year'].map(period => (
          <button
            key={period}
            className={`period-btn ${selectedPeriod === period ? 'active' : ''}`}
            onClick={() => setSelectedPeriod(period)}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-label">Total Users</div>
            <div className="stat-value">{users.toLocaleString()}</div>
            <div className="stat-change positive">+{growth.toFixed(1)}% vs last {selectedPeriod}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <div className="stat-label">Revenue</div>
            <div className="stat-value">${revenue.toLocaleString()}</div>
            <div className="stat-change positive">+15.3% MRR</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <div className="stat-label">Active Now</div>
            <div className="stat-value">{activeUsers}</div>
            <div className="stat-change">{((activeUsers/users)*100).toFixed(1)}% online</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-label">Conversion Rate</div>
            <div className="stat-value">8.4%</div>
            <div className="stat-change positive">+2.1% improvement</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="chart-card">
          <h5>📊 Revenue Trend</h5>
          <div className="bar-chart">
            {chartData.map((data, index) => (
              <div key={index} className="bar-wrapper">
                <div 
                  className="bar"
                  style={{ 
                    height: `${(data.value / maxValue) * 200}px`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="bar-value">${(data.value/1000).toFixed(1)}k</span>
                </div>
                <span className="bar-label">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="activity-card">
          <h5>🔔 Recent Activity</h5>
          <div className="activity-list">
            {recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'upgrade' && '⬆️'}
                  {activity.type === 'project' && '📁'}
                  {activity.type === 'team' && '👥'}
                  {activity.type === 'onboarding' && '✅'}
                  {activity.type === 'api' && '🔑'}
                </div>
                <div className="activity-details">
                  <div className="activity-user">{activity.user}</div>
                  <div className="activity-action">{activity.action}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="features-section">
        <h5>🎯 Most Used Features</h5>
        <div className="features-list">
          {topFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-info">
                <span className="feature-name">{feature.name}</span>
                <span className="feature-percent">{feature.usage}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ 
                    width: `${feature.usage}%`,
                    backgroundColor: feature.color,
                    animationDelay: `${index * 0.1}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="user-insights">
        <div className="insight-card">
          <div className="insight-icon">🌍</div>
          <div className="insight-content">
            <h6>Top Regions</h6>
            <div className="region-list">
              <div className="region-item">
                <span>🇺🇸 United States</span>
                <span>32%</span>
              </div>
              <div className="region-item">
                <span>🇬🇧 United Kingdom</span>
                <span>18%</span>
              </div>
              <div className="region-item">
                <span>🇫🇷 France</span>
                <span>12%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="insight-card">
          <div className="insight-icon">📱</div>
          <div className="insight-content">
            <h6>Device Usage</h6>
            <div className="device-stats">
              <div className="device-item">
                <span>💻 Desktop</span>
                <span>58%</span>
              </div>
              <div className="device-item">
                <span>📱 Mobile</span>
                <span>32%</span>
              </div>
              <div className="device-item">
                <span>📟 Tablet</span>
                <span>10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDemo;
