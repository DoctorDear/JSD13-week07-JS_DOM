// Creating & Removing Elements
// Open index.html and work through these in order.

// TODO 1: Select #item-input, #add-item-btn, #items (the <ul>), and
// #item-count (the <span>).
const itemInput = document.querySelector("#item-input");
const addItemBtn = document.querySelector("#add-item-btn");
const items = document.querySelector("#items");
const itemCount = document.querySelector("#item-count");

// TODO 2: Write a function updateCount() that sets item-count's textContent
// to the number of <li> elements currently in the list (items.children.length).
function updateCount() {
  itemCount.textContent = items.children.length;
}

// TODO 3: Add a "click" listener on #add-item-btn. Inside it:
//   - read and trim the input's value; if empty, do nothing
//   - create a new <li>, set its textContent to the value
//   - add a "click" listener on the <li> that removes it (li.remove())
//     and then calls updateCount() again
//   - add the <li> to the TOP of the list using items.prepend(li)
//   - clear the input
//   - call updateCount()

// อ่านและตัดช่องว่าง ถ้า input value ว่าง ให้เด้งออกทันที
addItemBtn.addEventListener("click", () => {
  const val = itemInput.value.trim();
  if (val === "") {
    return;
  }

  // สร้าง element <li> ขึ้นมาใหม่
  const li = document.createElement("li");
  li.textContent = val;

  // ดักจับการคลิกที่ <li> ตัวนี้ ถ้าโดนคลิกให้ลบตัวเองออก แล้วอัพเดทจำนวนนับใหม่
  li.addEventListene("click", () => {
    li.remove();
    updateCount();
  });

  // <li> ใหม่ไว้ด้านบนสุดของรายการ

  // เคลียร์ช่องอินพุตให้ว่าง
  itemInput = "";

  // อัปเดทตัวเลขนับจำนวนรายการใหม่
  updateCount();
});
