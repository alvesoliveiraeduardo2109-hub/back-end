async function getDados() {
  const respostaDiv = document.getElementById("resposta");
  try {
      let cep = document.getElementById("inputCep").value.trim();
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await response.json();
      respostaDiv.innerHTML = `
          <strong>CEP:</strong> ${dados.cep}<br>
          <strong>Cidade:</strong> ${dados.localidade} - ${dados.uf}<br>
          
      `;
  } catch (error) {
      console.error("erro:", error);
      respostaDiv.innerHTML = "erro.";
  }
}
setTimeout(() => {
  const lista = document.querySelector('.lista-animada');
  if (lista) lista.classList.add('show');
}, 400);

document.querySelectorAll('.lista-animada li').forEach(li => {
  li.addEventListener('click', () => {
    const emoji = li.querySelector('.doidosono');
    if (emoji) {
      const emojis = ['😴','💤','🛌','😎','😪','🥱','🧟‍♂️','🥹','😵‍💫','🐔','🧏🏻‍♀️'];
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    }
  });
});
function clicou(onde) {
  alert("você clicou " + onde + " da melhor sala");
}
function initTabs() {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  if (buttons.length === 0) {
    console.warn("Nenhum botão de tab encontrado!");
    return;
  }
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);
      
      if (targetContent) {
        targetContent.classList.add('active');
      } else {
        console.warn(`Conteúdo com id "${tabId}" não encontrado!`);
      }
    });
  });
}
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  const fill = document.querySelector('.brawl-progress-fill');
  const images = document.querySelectorAll('.brawl-image');

  if (fill) fill.style.width = '100%';
  let current = 0;
  let interval = null;
  if (images.length > 0) {
    interval = setInterval(() => {
      images.forEach(img => img.classList.remove('active'));
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 750);
  }

  setTimeout(() => {
    if (interval) clearInterval(interval); 
    if (loading) {
      loading.classList.add('hidden');  
      setTimeout(() => {
        const conteudo = document.getElementById('conteudo');
        if (conteudo) conteudo.classList.remove('hidden');
        initTabs();
      }, 600);
    }
  }, 3400);
});
