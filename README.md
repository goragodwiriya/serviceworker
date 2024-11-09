# Web Push Notification System (ระบบแจ้งเตือนผ่านเว็บ)

ระบบแจ้งเตือนผ่านเว็บแบบง่าย รองรับการแจ้งเตือนแบบ Web Push โดยไม่ต้องใช้ server หรือ key ใดๆ

## 🔗 ลิงก์

- [Demo](https://goragodwiriya.github.io/serviceworker/)
- [Source Code](https://github.com/goragodwiriya/serviceworker)

## ✨ คุณสมบัติ

- 🔔 แสดงการแจ้งเตือนแบบ Web Push
- 🎨 รองรับ 4 ประเภทการแจ้งเตือน: 
  - ✅ Success (สำเร็จ)
  - ❌ Error (ข้อผิดพลาด)
  - ⚠️ Warning (คำเตือน)
  - ℹ️ Info (ข้อมูล)
- 🖼️ มีไอคอนในตัว (SVG)
- 🔗 สามารถกำหนด URL เพื่อเปิดเมื่อคลิก
- 🔲 มีปุ่มกดเพื่อเปิดดูหรือปิด
- 📳 แสดงการสั่น
- 👆 สามารถกำหนดให้ต้องมีการตอบสนองจากผู้ใช้

## 📋 ข้อกำหนดเบื้องต้น

- เว็บเบราว์เซอร์ที่รองรับ Service Worker
- Web Server (เช่น Live Server ใน VS Code)

## 🛠️ การติดตั้ง

1. ดาวน์โหลดไฟล์ทั้งหมดในโปรเจ็ค
2. วางไฟล์ทั้งหมดไว้ในโฟลเดอร์ของเว็บไซต์ของคุณ
3. ตรวจสอบให้แน่ใจว่าไฟล์อยู่ในตำแหน่งที่ถูกต้อง:
   ```
   your-website/
   ├── web-push-notification.js
   ├── service-worker.js
   └── index.html (หรือหน้าเว็บของคุณ)
   ```

## 📖 วิธีการใช้งาน

1. เพิ่ม script ในหน้า HTML ของคุณ:
```html
<script src="web-push-notification.js"></script>
```

2. เริ่มต้นระบบแจ้งเตือน:
```javascript
WebPushNotification.init();
```

3. ส่งการแจ้งเตือน:
```javascript
// แจ้งเตือนสำเร็จ
WebPushNotification.success('การทำงานเสร็จสิ้น!', {
    url: '/success-page'
});

// แจ้งเตือนข้อผิดพลาด
WebPushNotification.error('เกิดข้อผิดพลาด', {
    requireInteraction: true
});

// แจ้งเตือนคำเตือน
WebPushNotification.warning('กรุณาตรวจสอบข้อมูล');

// แจ้งเตือนข้อมูล
WebPushNotification.info('คุณมีข้อความใหม่', {
    url: '/messages'
});
```

## ⚙️ ตัวเลือกการแจ้งเตือน

```javascript
{
    body: '',              // ข้อความเนื้อหา
    icon: '',             // URL ของไอคอน
    badge: '',            // URL ของแบดจ์
    vibrate: [],          // รูปแบบการสั่น
    tag: '',              // แท็กสำหรับจัดกลุ่ม
    data: { url: '/' },   // ข้อมูลเพิ่มเติม
    requireInteraction: false,  // ต้องการการตอบสนองจากผู้ใช้
    actions: [            // ปุ่มกดในการแจ้งเตือน
        { action: 'open', title: 'เปิดดู' },
        { action: 'close', title: 'ปิด' }
    ]
}
```

## ⚠️ ข้อจำกัด

- ต้องเปิดผ่าน web server (ไม่สามารถเปิดไฟล์ HTML โดยตรงได้)
- ผู้ใช้ต้องอนุญาตการแจ้งเตือน
- เบราว์เซอร์ต้องรองรับ Service Worker

## 🤝 การมีส่วนร่วม

หากคุณพบปัญหาหรือต้องการเพิ่มคุณสมบัติใหม่ สามารถสร้าง Issue หรือส่ง Pull Request ได้ที่ [GitHub Repository](https://github.com/goragodwiriya/serviceworker)

## 📝 ลิขสิทธิ์

[MIT License](LICENSE)

## 👨‍💻 ผู้พัฒนา

[Goragod Wiriya](https://github.com/goragodwiriya)

