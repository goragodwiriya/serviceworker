// service-worker.js

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});

// จัดการเมื่อคลิกที่การแจ้งเตือน
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  // ถ้าคลิกปุ่ม "เปิดดู"
  if (event.action === 'open') {
    // เปิด URL ที่กำหนด
    const urlToOpen = event.notification.data?.url || '/';
    
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(function(clientList) {
        // ถ้ามีหน้าเว็บเปิดอยู่แล้ว ให้เปิดในหน้านั้น
        for (const client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // ถ้าไม่มีหน้าเว็บเปิดอยู่ ให้เปิดหน้าใหม่
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
    );
  }
});

// จัดการเมื่อปิดการแจ้งเตือน
self.addEventListener('notificationclose', function(event) {
  console.log('การแจ้งเตือนถูกปิด');
});
