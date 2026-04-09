const API = '';

async function apiGet(url) {
    const res = await fetch(`${API}${url}`);
    return await res.json();
}

async function apiPost(url, data) {
    const res = await fetch(`${API}${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function apiPut(url, data) {
    const res = await fetch(`${API}${url}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function apiPatch(url, data) {
    const res = await fetch(`${API}${url}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: data ? JSON.stringify(data) : undefined
    });
    return await res.json();
}

async function apiDelete(url) {
    const res = await fetch(`${API}${url}`, { method: 'DELETE' });
    return await res.json();
}

function toast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    el.textContent = message;
    container.appendChild(el);
    setTimeout(() => el.remove(), 4000);
}

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function getEstabelecimentoId() {
    return localStorage.getItem('estabelecimentoId') || '1';
}

function setEstabelecimentoId(id) {
    localStorage.setItem('estabelecimentoId', id);
}
