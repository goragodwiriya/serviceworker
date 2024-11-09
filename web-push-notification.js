// web-push-notification.js

const WebPushNotification = {
  /**
   * เริ่มต้นระบบแจ้งเตือน
   */
  async init() {
    try {
      // ตรวจสอบการรองรับ service worker
      if (!('serviceWorker' in navigator)) {
        throw new Error('เบราว์เซอร์ไม่รองรับ Service Worker');
      }

      // ลงทะเบียน service worker
      const registration = await navigator.serviceWorker.register('service-worker.js');
      console.log('Service Worker ลงทะเบียนสำเร็จ');

      // ขอสิทธิ์การแจ้งเตือน
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        throw new Error('ไม่ได้รับอนุญาตให้แจ้งเตือน');
      }

      return true;
    } catch (error) {
      console.error('การเริ่มต้นระบบแจ้งเตือนล้มเหลว:', error);
      return false;
    }
  },

  /**
   * ส่งการแจ้งเตือน
   */
  async send(title, options = {}) {
    try {
      const registration = await navigator.serviceWorker.ready;
      
      const defaultOptions = {
        body: '',
        icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%234CAF50" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/%3E%3C/svg%3E',
        badge: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Ccircle fill="%234CAF50" cx="12" cy="12" r="10"/%3E%3C/svg%3E',
        vibrate: [200, 100, 200],
        tag: 'web-push',
        data: { url: options.url || '/' },
        actions: [
          { action: 'open', title: 'เปิดดู' },
          { action: 'close', title: 'ปิด' }
        ],
        requireInteraction: true
      };

      const notificationOptions = { ...defaultOptions, ...options };
      await registration.showNotification(title, notificationOptions);
      
      return true;
    } catch (error) {
      console.error('การส่งการแจ้งเตือนล้มเหลว:', error);
      return false;
    }
  },

  /**
   * ส่งการแจ้งเตือนแบบสำเร็จ
   */
  async success(message, options = {}) {
    return this.send('สำเร็จ!', {
      body: message,
      icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%234CAF50" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/%3E%3C/svg%3E',
      ...options
    });
  },

  /**
   * ส่งการแจ้งเตือนแบบข้อผิดพลาด
   */
  async error(message, options = {}) {
    return this.send('ข้อผิดพลาด!', {
      body: message,
      icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%23F44336" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/%3E%3C/svg%3E',
      requireInteraction: true,
      ...options
    });
  },

  /**
   * ส่งการแจ้งเตือนแบบคำเตือน
   */
  async warning(message, options = {}) {
    return this.send('คำเตือน!', {
      body: message,
      icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%23FFC107" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/%3E%3C/svg%3E',
      ...options
    });
  },

  /**
   * ส่งการแจ้งเตือนแบบข้อมูล
   */
  async info(message, options = {}) {
    return this.send('ข้อมูล', {
      body: message,
      icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%232196F3" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/%3E%3C/svg%3E',
      ...options
    });
  }
};
