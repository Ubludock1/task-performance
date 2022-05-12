const c=document.querySelector(".contacts");
const s=document.querySelector(".stickyHeader");
let i;
function addContacts() {
    for (let i = 0; i < 50000; i++) {
        let d = document.createElement("div");
        d.textContent = i;
        d.classList.add("contact");
        c.appendChild(d);
    }
    i=Array.from(c.querySelectorAll(".contact"));
};
c.addEventListener("scroll", (e) => {
    const t = i.find((o) => c.scrollTop - o.offsetTop <= -18);
    if (t != -1) {s.textContent = t.textContent;}
});
addContacts();