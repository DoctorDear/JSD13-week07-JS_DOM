# 🎮 DOM Playground Guide (โฟลเดอร์หลัก)

คู่มือนี้สรุปเนื้อหาโจทย์และความรู้สำหรับไฟล์ [`dom-playground.html`](file:///c:/Users/DoctorDear/Code/JSD13/week-07/dom-playground.html) และ [`script.js`](file:///c:/Users/DoctorDear/Code/JSD13/week-07/script.js)

---

## 📌 สรุปโจทย์และคำใบ้แต่ละส่วน

### Section 1: Selecting Elements
- **โจทย์:** เลือก `#main-title`, `.submit-btn`, `.task`
- **ความรู้ที่ใช้:** `document.getElementById`, `document.querySelector`, `document.querySelectorAll`
- **Hint:** ใช้ `.class` สำหรับ class และ `#id` สำหรับ id

### Section 2: Modifying Content
- **โจทย์:** เปลี่ยนข้อความ `.label`, `#msg` และแทรก HTML ย่อยลงใน `<div id="card">`
- **ความรู้ที่ใช้:** `textContent`, `innerHTML`
- **Hint:** ใช้ `innerHTML` เมื่อต้องการใส่แท็ก HTML ย่อยลงไปในกล่องเปล่า

### Section 3: classList & Theme Toggle
- **โจทย์:** ทำปุ่ม `#themeBtn` สลับ class `dark-mode` บน `document.body`
- **ความรู้ที่ใช้:** `classList.toggle('dark-mode')`
- **Hint:** สั่ง `document.body.classList.toggle('dark-mode')` บรรทัดเดียวใน click event

### Section 4: Creating & Removing Elements
- **โจทย์:** กด `#addTaskBtn` เพื่อเพิ่ม `<li>` เข้าใน `<ul id="tasks">` และกด `#resetTasksBtn` เพื่อลบทั้งหมด
- **ความรู้ที่ใช้:** `document.createElement`, `appendChild`, `innerHTML = ''`
- **Hint:** ขั้นตอน: `createElement` ➔ กำหนด `textContent` ➔ `appendChild`

### Section 5: Events & Form Handling
- **โจทย์:** `#click-me` (click event), `#list` (Event Delegation), `#signupForm` (submit & preventDefault)
- **ความรู้ที่ใช้:** `addEventListener`, `e.preventDefault()`, `e.target.tagName === 'LI'`
- **Hint:** Event Delegation ช่วยให้ติด `addEventListener` ที่ `<ul>` จุดเดียวได้

### Section 6: Pokémon Card Fetcher
- **โจทย์:** สุ่ม ID 1-151 ดึงข้อมูลโปเกมอนจาก PokéAPI นำรูปภาพและชื่อมาใส่ใน `#gallery`
- **ความรู้ที่ใช้:** `fetch(url)`, `async/await`, `Math.random()`
- **Hint:** `https://pokeapi.co/api/v2/pokemon/${id}`
