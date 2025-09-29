// Mobile nav toggle
document.querySelectorAll('.nav-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const nav = document.querySelector('.nav');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? 'none' : 'flex';
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple filtering on products page
const categoryFilter = document.getElementById('categoryFilter');
const colorFilter = document.getElementById('colorFilter');

function applyFilters(){
  const cat = categoryFilter?.value || '';
  const col = colorFilter?.value || '';
  document.querySelectorAll('.product-card').forEach(card=>{
    const matchesCat = !cat || card.classList.contains(cat);
    const matchesCol = !col || card.classList.contains(col);
    card.style.display = (matchesCat && matchesCol) ? '' : 'none';
  });
}

categoryFilter?.addEventListener('change', applyFilters);
colorFilter?.addEventListener('change', applyFilters);
applyFilters();
