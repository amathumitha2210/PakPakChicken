import { useState, useEffect } from 'react';
import { uberMenu as fallbackMenu } from '../data/uberMenu';

/**
 * Hook to fetch menu from API with fallback to local data
 * Automatically syncs with Uber Eats when the app starts
 */
export function useMenuData() {
  const [menu, setMenu] = useState(fallbackMenu);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastSync, setLastSync] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try to fetch from API
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/menu`, {
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          setMenu(data.data);
          setLastSync(new Date());
          console.log('✅ Menu synced from server');
        }
      } else {
        console.warn('⚠️ Could not fetch menu from server, using local data');
      }
    } catch (err) {
      console.warn('⚠️ Failed to fetch menu from API:', err.message);
      // Fall back to local data (already set in useState)
    } finally {
      setLoading(false);
    }
  };

  const manualSync = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/sync-menu`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();

      if (data.success) {
        // Re-fetch the updated menu
        await fetchMenu();
        return { success: true, message: data.message };
      } else {
        throw new Error(data.error || 'Sync failed');
      }
    } catch (err) {
      const errorMsg = `Sync error: ${err.message}`;
      setError(errorMsg);
      console.error(errorMsg);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    menu,
    loading,
    error,
    lastSync,
    fetchMenu,
    manualSync
  };
}
