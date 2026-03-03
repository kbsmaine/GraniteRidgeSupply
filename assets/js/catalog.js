// Placeholder catalog (CJ-ready)
// Replace this data with CJ product imports or a backend-fed JSON list.

const CATALOG = [
  { id: "edc-01", name: "RidgeLine Folding Utility", category: "edc", price: 39.99, tag: "EDC" },
  { id: "out-01", name: "TrailGuard Fixed Utility", category: "outdoor", price: 59.99, tag: "Outdoor" },
  { id: "uti-01", name: "WorkEdge Utility Cutter", category: "utility", price: 24.99, tag: "Utility" },
  { id: "gear-01", name: "Kydex-Style Sheath Kit", category: "gear", price: 14.99, tag: "Gear" },
  { id: "edc-02", name: "Pocket Clip Folder", category: "edc", price: 32.49, tag: "EDC" },
  { id: "out-02", name: "CampCraft Field Tool", category: "outdoor", price: 67.00, tag: "Outdoor" },
  { id: "uti-02", name: "Compact Box Cutter Tool", category: "utility", price: 12.99, tag: "Utility" },
  { id: "gear-02", name: "Sharpening Stone Set", category: "gear", price: 18.75, tag: "Gear" },
];

function fmt(n){ return `$${n.toFixed(2)}`; }

function renderCards(list, targetId){
  const grid = document.getElementById(targetId);
  if (!grid) return;

  grid.innerHTML = "";
  list.forEach(p => {
    const el = document.createElement("div");
    el.className = "product-card";
    el.innerHTML = `
      <div class="p-img" aria-hidden="true"></div>
      <div class="p-body">
        <div class="p-title">${p.name}</div>
        <div class="p-meta">
          <div class="price">${fmt(p.price)}</div>
          <span class="tag">${p.tag}</span>
        </div>
        <div class="p-actions">
          <a class="btn primary" href="product.html">View</a>
          <button class="btn ghost" type="button" onclick="alert('Mock: add to cart')">Add</button>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

function homeInit(){
  const top = CATALOG.slice(0, 4);
  renderCards(top, "homeProducts");
}

function shopInit(){
  const gridId = "productGrid";
  const q = document.getElementById("q");
  const cat = document.getElementById("cat");
  const sort = document.getElementById("sort");

  function apply(){
    let list = [...CATALOG];

    const query = (q?.value || "").trim().toLowerCase();
    const catVal = cat?.value || "all";
    const sortVal = sort?.value || "featured";

    if (catVal !== "all") list = list.filter(p => p.category === catVal);
    if (query) list = list.filter(p => p.name.toLowerCase().includes(query));

    if (sortVal === "low") list.sort((a,b)=>a.price-b.price);
    if (sortVal === "high") list.sort((a,b)=>b.price-a.price);
    if (sortVal === "az") list.sort((a,b)=>a.name.localeCompare(b.name));

    renderCards(list, gridId);
  }

  if (q) q.addEventListener("input", apply);
  if (cat) cat.addEventListener("change", apply);
  if (sort) sort.addEventListener("change", apply);

  apply();
}

document.addEventListener("DOMContentLoaded", () => {
  homeInit();
  shopInit();
});
