import React from "react";
import "../css/dashboard.css";

function SocialMediaDashboard() {
    const sharesDashboard = () => {
        alert("Sharing dashboard...");
        // Add additional sharing functionality here as needed.
    };

    return (
        <div className="container">
        <div className="header">
            <div>
                <h1 className="title">Social Media Dashboard</h1>
                <p className="subtitle">Your activity summary for the past week</p>
            </div>
            <button className="share-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
                Share
            </button>
        </div>

        <div className="grid">
            {/* <!-- Twitter Card --> */}
            <div className="card">
                <div className="card-content">
                    <div className="platform-header">
                        <div className="platform-icon twitter-icon">
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </div>
                        <span className="platform-name">Twitter/X</span>
                    </div>

                    <div className="metrics-grid">
                        <div>
                            <div className="metric-label">Time Spent</div>
                            <div className="metric-value">2.5<span className="unit">hrs</span></div>
                            <div className="engagement">
                                <span className="meaningful">0.8hrs</span>
                                <span className="passive">1.7hrs</span>
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Notifications</div>
                            <div className="metric-value">47</div>
                            <div className="tooltip">
                                • Enable "Hide notifications"
                                • Set 'Important' notifications only
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Infinite Scroll</div>
                            <div className="metric-value">328<span className="unit">ft</span></div>
                            <div className="tooltip">
                                • Install a feed blocker extension
                                • Use Lists instead of the main feed
                                • Set a tweet limit per day
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Autoplay Time</div>
                            <div className="metric-value">0.8<span className="unit">hrs</span></div>
                            <div className="tooltip">
                                • Toggle on "Block autoplay"
                                • Set video quality to low
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Facebook Card --> */}
            <div className="card">
                <div className="card-content">
                    <div className="platform-header">
                        <div className="platform-icon facebook-icon">
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </div>
                        <span className="platform-name">Facebook</span>
                    </div>

                    <div className="metrics-grid">
                        <div>
                            <div className="metric-label">Time Spent</div>
                            <div className="metric-value">3.8<span className="unit">hrs</span></div>
                            <div className="engagement">
                                <span className="meaningful">1.2hrs</span>
                                <span className="passive">2.6hrs</span>
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Notifications</div>
                            <div className="metric-value">23</div>
                            <div className="tooltip">
                                • Turn off group notifications
                                • Disable friend suggestion alerts
                                • Use 'Favorites' for important updates
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Infinite Scroll</div>
                            <div className="metric-value">456<span className="unit">ft</span></div>
                            <div className="tooltip">
                                • Hide news feed with an extension
                                • Use Facebook in a browser tab only
                                • Schedule specific check-in times
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Autoplay Time</div>
                            <div className="metric-value">1.5<span className="unit">hrs</span></div>
                            <div className="tooltip">
                                • Disable video autoplay
                                • Turn off auto-refresh
                                • Use Facebook Lite version
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- LinkedIn Card --> */}
            <div className="card">
                <div className="card-content">
                    <div className="platform-header">
                        <div className="platform-icon linkedin-icon">
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </div>
                        <span className="platform-name">LinkedIn</span>
                    </div>

                    <div className="metrics-grid">
                        <div>
                            <div className="metric-label">Time Spent</div>
                            <div className="metric-value">1.2<span className="unit">hrs</span></div>
                            <div className="engagement">
                                <span className="meaningful">0.9hrs</span>
                                <span className="passive">0.3hrs</span>
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Notifications</div>
                            <div className="metric-value">15</div>
                            <div className="tooltip">
                                • Set weekly digest instead of daily
                                • Turn off network update alerts
                                • Disable job suggestion notifications
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Infinite Scroll</div>
                            <div className="metric-value">186<span className="unit">ft</span></div>
                            <div className="tooltip">
                                • Use LinkedIn's 'My Network' filter
                                • Set homepage to 'Recent' not 'Top'
                                • Schedule specific networking times
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Autoplay Time</div>
                            <div className="metric-value">0.3<span className="unit">hrs</span></div>
                            <div className="tooltip">
                                • Disable autoplay in feed
                                • Turn off auto-refresh
                                • Use 'Save for later' feature
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- YouTube Card --> */}
            <div className="card">
                <div className="card-content">
                    <div className="platform-header">
                        <div className="platform-icon youtube-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </div>
                        <span className="platform-name">YouTube</span>
                    </div>

                    <div className="metrics-grid">
                        <div>
                            <div className="metric-label">Time Spent</div>
                            <div className="metric-value">5.3<span className="unit">hrs</span></div>
                            <div className="engagement">
                                <span className="meaningful">2.9hrs</span>
                                <span className="passive">2.4hrs</span>
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Notifications</div>
                            <div className="metric-value">8</div>
                            <div className="tooltip">
                                • Set weekly digest instead of daily
                                • Turn off update alerts
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Infinite Scroll</div>
                            <div className="metric-value">275<span className="unit">ft</span></div>
                            <div className="tooltip">
                                • Use YouTube's 'Subscription' filter
                                • Set homepage to 'Recent' not 'Top'
                                • Schedule specific networking times
                            </div>
                        </div>

                        <div className="metric-container">
                            <div className="metric-label">Autoplay Time</div>
                            <div className="metric-value">4.2<span className="unit">hrs</span></div>
                            <div className="tooltip">
                                • Disable autoplay in feed
                                • Turn off auto-refresh
                                • Use 'Save for later' feature
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SocialMediaDashboard;
