import React from 'react';

function QuickActions({ onTrackSugar }) {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <button className="btn blue" onClick={onTrackSugar}>Track Blood Sugar</button>
    </div>
  );
}

export default QuickActions;
