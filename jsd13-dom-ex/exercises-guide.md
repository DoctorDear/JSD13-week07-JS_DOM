# 🏋️ JSD13 DOM Exercises Guide (โฟลเดอร์ jsd13-dom-ex)

คู่มือนี้สรุปเนื้อหาโจทย์และความรู้สำหรับแบบฝึกหัดทั้ง 6 ข้อในโฟลเดอร์ [`jsd13-dom-ex`](file:///c:/Users/DoctorDear/Code/JSD13/week-07/jsd13-dom-ex)

---

## 📂 รายละเอียดแบบฝึกหัดทั้ง 6 โฟลเดอร์

### 1. `01-selectors/` (การเลือก Elements)
- **ไฟล์:** [`01-selectors/script.js`](file:///c:/Users/DoctorDear/Code/JSD13/week-07/jsd13-dom-ex/01-selectors/script.js)
- **โจทย์:** ฝึกใช้ `querySelector`, `querySelectorAll`, การเช็ค `.length`, วนลูป `.forEach()`, และการใช้ Attribute Selector `[data-fresh="false"]`
- **Hint:**
  - `document.querySelectorAll('.fruit')` ได้ผลลัพธ์เป็น NodeList
  - ใช้ `.forEach(fruit => console.log(fruit.textContent))` วนลูปอ่านค่าได้ทันที

---

### 2. `02-content-and-classes/` (เนื้อหาและ Class)
- **ไฟล์:** [`02-content-and-classes/script.js`](file:///c:/Users/DoctorDear/Code/JSD13/week-07/jsd13-dom-ex/02-content-and-classes/script.js)
- **โจทย์:** เปลี่ยน `textContent`, ใส่แท็ก `<strong>` ด้วย `innerHTML`, อ่าน attribute ด้วย `getAttribute`, เพิ่ม class ด้วย `classList.add`, และอ่าน/เพิ่มค่า `dataset.visits`
- **Hint:**
  - `card.getAttribute('class')`
  - `let visits = Number(card.dataset.visits); card.dataset.visits = visits + 1;`

---

### 3. `03-events-basics/` (พื้นฐาน Events)
- **ไฟล์:** [`03-events-basics/script.js`](file:///c:/Users/DoctorDear/Code/JSD13/week-07/jsd13-dom-ex/03-events-basics/script.js)
- **โจทย์:** ดักฟัง event `click`, `mouseover`, `mouseout` บน `#box` และ `keydown` บน `document`
- **Hint:**
  - `mouseover`: `box.classList.add('hover')`
  - `mouseout`: `box.classList.remove('hover')`
  - `keydown`: `document.addEventListener('keydown', (e) => { keyDisplay.textContent = e.key; })`

---

### 4. `04-form-events/` (Form Events & Validation)
- **ไฟล์:** [`04-form-events/script.js`](file:///c:/Users/DoctorDear/Code/JSD13/week-07/jsd13-dom-ex/04-form-events/script.js)
- **โจทย์:** ดักฟัง `input` event บนช่องกรอกชื่อเพื่อนับจำนวนตัวอักษร และดักฟัง `submit` บนฟอร์มเพื่อเช็คความถูกต้อง
- **Hint:**
  - นับอักษร: `nameInput.value.length`
  - ยับยั้งรีเฟรช: `e.preventDefault()`

---

### 5. `05-create-and-remove/` (การสร้างและลบ Element)
- **ไฟล์:** [`05-create-and-remove/script.js`](file:///c:/Users/DoctorDear/Code/JSD13/week-07/jsd13-dom-ex/05-create-and-remove/script.js)
- **โจทย์:** สร้าง `<li>` ใหม่ด้วย `document.createElement`, ใส่ไว้ด้านบนสุดด้วย `items.prepend(li)`, ให้คลิกที่ `<li>` แล้วลบตัวเองออกด้วย `li.remove()`, พร้อมอัปเดตจำนวนด้วย `items.children.length`
- **Hint:**
  - ใส่ไว้บนสุด: `items.prepend(li)`
  - ลบตัวเอง: `li.addEventListener('click', () => { li.remove(); updateCount(); });`

---

### 6. `06-todo-list/` (Mini Project To-Do List)
- **ไฟล์:** [`06-todo-list/script.js`](file:///c:/Users/DoctorDear/Code/JSD13/week-07/jsd13-dom-ex/06-todo-list/script.js)
- **โจทย์:** รวบยอดความรู้ทั้งหมดทำแอป To-Do List: เพิ่มรายการใหม่, ลบรายการเมื่อกดปุ่ม "x", สลับสถานะทำเสร็จ (ขีดฆ่า) เมื่อคลิกข้อความ
- **Hint:**
  - สร้าง `addTodo(text)` ทำหน้าที่สร้าง `<li>`, `<span class="todo-text">`, `<button class="delete-btn">`
  - ใส่ Event Listener ให้กับ `span` ( toggle class `completed`) และ `button` (ลบ `li` ออก) ตอนสร้าง Element
