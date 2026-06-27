import "../styles/Home.css";
import { useState, useEffect } from "react";
import { uberMenu } from "../data/uberMenu";

function Menu() {
  const [menu, setMenu] = useState(uberMenu);
  const [syncStatus, setSyncStatus] = useState('⏳ Fetching latest menu...');

  // Try to fetch menu from API on mount and refresh every hour
  useEffect(() => {
    fetchMenuFromServer();

    const intervalId = setInterval(fetchMenuFromServer, 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchMenuFromServer = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/menu`);
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          setMenu(data.data);
          setSyncStatus('✅ Menu synced from Uber Eats');
          return;
        }
      }
      setSyncStatus('⚠️ Could not update menu, using local data');
    } catch (err) {
      console.warn('Could not fetch menu from server, using local data');
      setSyncStatus('⚠️ Could not fetch menu from server, using local data');
    }
  };

  return (
    <section className="page-section">
      <div className="section-inner">
        <div className="menu-hero">
          <div>
            <h1 className="section-title">Uber Eats Menu</h1>
            <p className="section-text">
              Browse the Pak Pak Chicken menu. Items and prices automatically sync from Uber Eats.
            </p>
            {syncStatus && (
              <p className="sync-status">{syncStatus}</p>
            )}
          </div>
          <div className="menu-actions">
            <a
              className="gallery-action"
              href="https://www.ubereats.com/store/pak-pak-chicken/LekQ6XcyQB60DrjpVRc6sQ"
              target="_blank"
              rel="noreferrer"
            >
              Open Uber Menu
            </a>
          </div>
        </div>

        {menu.map((section) => (
          <div key={section.id} className="menu-section">
            <div className="menu-section-header">
              <div>
                <h2>{section.title}</h2>
                <p className="section-text">{section.description}</p>
              </div>
            </div>
            <div className="menu-grid">
              {section.items.map((item) => (
                <article key={item.id} className="menu-card animate-card">
                  <div className="menu-card-top">
                    <div>
                      <h3>{item.name}</h3>
                      {item.note && <span className="menu-note">{item.note}</span>}
                    </div>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  {item.priceOld && <div className="menu-price-old">{item.priceOld}</div>}
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
