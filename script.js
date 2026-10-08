// Troque pelo seu número com DDI e DDD, só dígitos (ex.: 5527999999999)
var WHATSAPP = "5527997670909";

// Projetos: para adicionar um novo, copie um bloco e preencha os campos.
// status: "live" (no ar), "dev" (em desenvolvimento) ou "plan" (planejado)
var PROJETOS = [
  {
    nome: "Criança Feliz",
    status: "live", rotulo: "No ar",
    resumo: "Site do projeto do Dia das Crianças",
    descricao: "Site criado para apresentar o projeto do Dia das Crianças e ajudar as pessoas a entenderem do que ele se trata. Foi o meu primeiro projeto publicado.",
    tags: ["Site", "Front-end"],
    link: "https://criancafeliz.me", linkTexto: "Visitar criancafeliz.me",
    icone: '<path d="M12 21s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z"/>'
  },
  {
    nome: "DOE Conecta",
    status: "plan", rotulo: "Planejado",
    resumo: "Doações entre empresas e ONGs",
    descricao: "Site onde empresas e ONGs podem se conectar e fazer doações. O projeto ainda não começou a ser desenvolvido, mas é o próximo grande passo do meu portfólio.",
    tags: ["Plataforma web", "Doações"],
    icone: '<rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M5 12v9h14v-9M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>'
  },
  {
    nome: "Scanner de vulnerabilidades",
    status: "dev", rotulo: "Em desenvolvimento",
    resumo: "Auditoria web em Python",
    descricao: "Ferramenta em Python que audita sites de forma não destrutiva, e que pretendo transformar em um serviço de monitoramento contínuo. Primeiros módulos: cabeçalhos HTTP, SSL, listagem de diretórios e Path Traversal.",
    tags: ["Python", "HTTP", "SSL/TLS"],
    icone: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'
  },
  {
    nome: "Laboratório de Infraestrutura & Segurança",
    status: "dev", rotulo: "Ativo",
    resumo: "Ambiente isolado para testes de desempenho e segurança",
    descricao: "Ambiente de testes isolado em VirtualBox utilizado para simulação de cenários reais de rede e validação de segurança. Conta com Kali Linux para auditorias e análise de vulnerabilidades web, Ubuntu Server para testes de desempenho, SSH e hardening de servidores web, e Arch Linux para otimização fina de processos e recursos do sistema.",
    tags: ["VirtualBox", "Kali", "Ubuntu Server", "Arch Linux"],
    icone: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'
  },
  {
    nome: "Site Demonstrativo para Contabilidade",
    status: "dev", rotulo: "Ativo",
    resumo: "Um site demonstrativo para contabilidade, com foco em SEO e performance",
    descricao: "Site demonstrativo para contabilidade, com foco em SEO e performance. O site é responsivo, otimizado para velocidade e acessibilidade, e conta com um blog para publicação de artigos relacionados à contabilidade e finanças.",
    tags: ["Website", "SEO", "HTML", "CSS", "JavaScript"],
    link: "https://duquedanyllo.github.io/contabilidade/", linkTexto: "Visitar Site Demonstrativo",
    icone: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'
  },

  {
    nome: "Site Demonstrativo para Odontologia",
    status: "dev", rotulo: "Ativo",
    resumo: "Um site demonstrativo para odontologia, com foco em SEO e performance",
    descricao: "Site demonstrativo para odontologia, com foco em SEO e performance. O site é responsivo, otimizado para velocidade e acessibilidade, e conta com um blog para publicação de artigos relacionados à odontologia e saúde bucal.",
    tags: ["Website", "SEO", "HTML", "CSS", "JavaScript"],
    link: "https://duquedanyllo.github.io/odontologia/", linkTexto: "Visitar Site Demonstrativo",
    icone: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'
  },

  {
    nome: "Site Demonstrativo para Advocacia",
    status: "dev", rotulo: "Ativo",
    resumo: "Um site demonstrativo para advocacia, com foco em SEO e performance",
    descricao: "Site demonstrativo para advocacia, com foco em SEO e performance. O site é responsivo, otimizado para velocidade e acessibilidade, e conta com um blog para publicação de artigos relacionados à advocacia e direito.",
    tags: ["Website", "SEO", "HTML", "CSS", "JavaScript"],
    link: "https://duquedanyllo.github.io/advocacia/", linkTexto: "Visitar Site Demonstrativo",
    icone: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'
  },


];

var dlg = document.getElementById("dlg");
var corpo = document.getElementById("dlg-body");
var grade = document.getElementById("tiles");

function esc(t) {
  var d = document.createElement("div");
  d.textContent = t;
  return d.innerHTML;
}

function classeStatus(s) { return s === "plan" ? "status plan" : "status"; }

PROJETOS.forEach(function (p, i) {
  var b = document.createElement("button");
  b.type = "button";
  b.className = "tile";
  b.setAttribute("aria-label", "Ver detalhes: " + p.nome);
  b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + p.icone + '</svg>' +
    '<span class="' + classeStatus(p.status) + '">' + esc(p.rotulo) + '</span>' +
    '<strong>' + esc(p.nome) + '</strong>' +
    '<span class="tile-sub">' + esc(p.resumo) + '</span>';
  b.addEventListener("click", function () { abrir(i); });
  grade.appendChild(b);
});

function abrir(i) {
  var p = PROJETOS[i];
  var html = '<span class="' + classeStatus(p.status) + '">' + esc(p.rotulo) + '</span>' +
    '<h3 id="dlg-title" style="margin-top:.9rem">' + esc(p.nome) + '</h3>' +
    '<p>' + esc(p.descricao) + '</p>' +
    '<ul class="stack">' + p.tags.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join("") + '</ul>';
  if (p.link) {
    html += '<a class="btn btn-primary" href="' + p.link + '" target="_blank" rel="noopener">' + esc(p.linkTexto) + '</a>';
  }
  corpo.innerHTML = html;
  if (dlg.showModal) { dlg.showModal(); } else { dlg.setAttribute("open", ""); }
}

document.getElementById("dlg-close").addEventListener("click", function () { dlg.close(); });
dlg.addEventListener("click", function (e) { if (e.target === dlg) { dlg.close(); } });

// Links do WhatsApp (o número vem da variável WHATSAPP)
document.querySelectorAll("a[data-wa]").forEach(function (a) {
  a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(a.dataset.wa);
  a.target = "_blank";
  a.rel = "noopener";
});

// Se a foto não existir, o fundo com as iniciais continua aparecendo
var foto = document.querySelector(".photo-frame img");
if (foto) { foto.addEventListener("error", function () { foto.remove(); }); }

document.getElementById("ano").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var f = e.target;
  var status = document.getElementById("form-status");
  var nome = f.nome.value.trim();
  if (!nome) {
    status.textContent = "Informe seu nome para continuar.";
    f.nome.focus();
    return;
  }
  var linhas = [
    "Olá, Danyllo! Meu nome é " + nome + ".",
    "Preciso de: " + f.servico.value + ".",
    f.site.value.trim() ? "Meu site: " + f.site.value.trim() : "",
    f.msg.value.trim() ? "Sobre o projeto: " + f.msg.value.trim() : ""
  ].filter(Boolean);
  var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(linhas.join("\n"));
  status.textContent = "Abrindo o WhatsApp com a sua mensagem.";
  window.open(url, "_blank", "noopener");
});
