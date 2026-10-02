// Troque pelo seu número com DDI e DDD, só dígitos (ex.: 5527999999999)
var WHATSAPP = "5527999999999";

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
    nome: "Laboratório de cibersegurança",
    status: "dev", rotulo: "Em montagem",
    resumo: "Máquinas virtuais para praticar",
    descricao: "Ambiente isolado no VirtualBox para praticar auditoria e administração de servidores: Kali Linux para testes de segurança web, Ubuntu Server para simular servidores, SSH e serviços web, e Arch Linux para estudar kernel, sistema de arquivos e processos.",
    tags: ["VirtualBox", "Kali", "Ubuntu Server", "Arch"],
    icone: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'
  },
  {
    nome: "Segurança de aplicações web",
    status: "dev", rotulo: "Em estudo",
    resumo: "Prática na PortSwigger Academy",
    descricao: "Estudo contínuo na PortSwigger Web Security Academy, interceptando e analisando requisições com o Burp Suite para entender como as falhas reais acontecem e como corrigi-las.",
    tags: ["Burp Suite", "PortSwigger", "Nmap", "Wireshark"],
    icone: '<path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6z"/>'
  },
  {
    nome: "C e Assembly x86-64",
    status: "dev", rotulo: "Em estudo",
    resumo: "Entendendo a máquina por dentro",
    descricao: "Estudos de baixo nível em linguagem C e Assembly x86-64 para entender como o computador executa os programas, base importante para a área de segurança.",
    tags: ["C", "Assembly", "x86-64"],
    icone: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'
  }
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
