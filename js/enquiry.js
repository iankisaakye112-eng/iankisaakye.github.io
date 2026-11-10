const form = document.getElementById('fragrance-form');
const preview = document.getElementById('preview');
form.querySelector('button').disabled = false;
form.addEventListener('input', () => { preview.textContent = ''; });
form.addEventListener('submit', event => {
  event.preventDefault();
  const fields = ['visitor', 'reply', 'message'].map(id => document.getElementById(id));
  const empty = fields.find(field => !field.value.trim());
  if (empty) {
    preview.textContent = 'Please complete this field.';
    empty.focus();
    return;
  }
  const [name, contact, message] = fields.map(field => field.value.trim());
  const product = document.getElementById('product').value;
  preview.textContent = ['Demo preview · nothing was sent.', name, contact, product, message].join('\n');
});