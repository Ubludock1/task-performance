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
    i=c.querySelectorAll(".contact");
};
c.addEventListener("scroll", (e) => {
    const index = c.scrollTop /18;
    s.textContent = i[index].textContent;
});
addContacts();