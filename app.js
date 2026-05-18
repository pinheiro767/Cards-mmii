const ARTERIAS = [
{n:1,nome:'Artéria ilíaca externa',onde:'Na pelve, sobre o psoas maior; ao passar sob o ligamento inguinal vira artéria femoral.',rota:'Pelve → ligamento inguinal → artéria femoral.',grupo:'pelve-coxa'},
{n:2,nome:'Artéria femoral',onde:'No trígono femoral, abaixo do ligamento inguinal; entre nervo femoral lateral e veia femoral medial.',rota:'Continuação da ilíaca externa → emite ramos superficiais e femoral profunda.',grupo:'pelve-coxa'},
{n:3,nome:'Artéria circunflexa ilíaca superficial',onde:'Ramo superficial da femoral que segue lateralmente em direção à EIAS.',rota:'Femoral → parede/lateral inguinal em direção à EIAS.',grupo:'pelve-coxa'},
{n:4,nome:'Artéria epigástrica superficial',onde:'Ramo superficial da femoral que sobe para a parede abdominal anterior.',rota:'Femoral → ascende para parede abdominal anterior.',grupo:'pelve-coxa'},
{n:5,nome:'Artéria pudenda externa superficial',onde:'Ramo medial superficial da femoral para genitais externos.',rota:'Femoral → trajeto medial superficial → região pudenda.',grupo:'pelve-coxa'},
{n:6,nome:'Artéria pudenda externa profunda',onde:'Ramo medial mais profundo em direção à região pudenda.',rota:'Femoral → trajeto medial profundo → região pudenda.',grupo:'pelve-coxa'},
{n:7,nome:'Artéria femoral profunda',onde:'Grande ramo posterior/lateral da femoral; mergulha profundamente atrás do adutor longo.',rota:'Femoral → posterior/lateral → plano profundo da coxa.',grupo:'pelve-coxa'},
{n:8,nome:'Artéria circunflexa femoral medial',onde:'Geralmente sai da femoral profunda; segue medial e posteriormente entre iliopsoas/pectíneo para colo do fêmur.',rota:'Femoral profunda → medial/posterior → colo do fêmur.',grupo:'pelve-coxa'},
{n:9,nome:'Artéria circunflexa femoral lateral',onde:'Geralmente sai da femoral profunda; vai lateralmente, profunda ao sartório e reto femoral.',rota:'Femoral profunda → lateral → profunda ao sartório/reto femoral.',grupo:'pelve-coxa'},
{n:10,nome:'Ramo descendente da circunflexa femoral lateral',onde:'Desce pela face anterolateral da coxa, acompanhando o vasto lateral até a rede genicular.',rota:'Circunflexa femoral lateral → ramo descendente → rede genicular.',grupo:'pelve-coxa'},
{n:11,nome:'Artéria descendente do joelho',onde:'Ramo distal da femoral antes do hiato do adutor, descendo medialmente ao joelho.',rota:'Femoral distal → antes do hiato do adutor → joelho medial.',grupo:'joelho-perna'},
{n:12,nome:'Artéria obturatória',onde:'Na pelve e canal obturatório, próxima ao forame obturado.',rota:'Pelve → canal obturatório → região medial proximal da coxa.',grupo:'pelve-coxa'},
{n:13,nome:'Artéria glútea superior',onde:'Sai da pelve acima do piriforme, na região glútea superior.',rota:'Pelve → acima do piriforme → glútea superior.',grupo:'glutea'},
{n:14,nome:'Artéria glútea inferior',onde:'Sai abaixo do piriforme, profunda ao glúteo máximo.',rota:'Pelve → abaixo do piriforme → profunda ao glúteo máximo.',grupo:'glutea'},
{n:15,nome:'Artéria poplítea',onde:'Profundamente na fossa poplítea, atrás do joelho.',rota:'Femoral após hiato do adutor → fossa poplítea.',grupo:'joelho-perna'},
{n:16,nome:'Artéria tibial anterior',onde:'Atravessa a membrana interóssea e segue no compartimento anterior da perna.',rota:'Poplítea → tibial anterior → dorso do pé.',grupo:'joelho-perna'},
{n:17,nome:'Tronco tíbiofibular',onde:'Curto segmento após a poplítea, antes de dividir em tibial posterior e fibular.',rota:'Poplítea → tronco tíbiofibular → tibial posterior/fibular.',grupo:'joelho-perna'},
{n:18,nome:'Artéria tibial posterior',onde:'Compartimento posterior profundo; passa atrás do maléolo medial.',rota:'Tronco tíbiofibular → posterior profundo → túnel do tarso/planta.',grupo:'joelho-perna'},
{n:19,nome:'Artéria fibular',onde:'Ramo lateral da tibial posterior, junto à fíbula.',rota:'Tibial posterior → ramo lateral → região fibular.',grupo:'joelho-perna'},
{n:20,nome:'Artéria superior lateral do joelho',onde:'Acima e lateral ao joelho, na rede genicular.',rota:'Poplítea → ramo superior lateral → rede genicular.',grupo:'joelho-perna'},
{n:21,nome:'Artéria superior medial do joelho',onde:'Acima e medial ao joelho.',rota:'Poplítea → ramo superior medial → rede genicular.',grupo:'joelho-perna'},
{n:22,nome:'Artéria inferior lateral do joelho',onde:'Abaixo e lateral ao joelho.',rota:'Poplítea → ramo inferior lateral → rede genicular.',grupo:'joelho-perna'},
{n:23,nome:'Artéria inferior medial do joelho',onde:'Abaixo e medial ao joelho.',rota:'Poplítea → ramo inferior medial → rede genicular.',grupo:'joelho-perna'},
{n:24,nome:'Artéria média do joelho',onde:'Ramo profundo que perfura a cápsula articular posterior do joelho.',rota:'Poplítea → ramo profundo → cápsula posterior do joelho.',grupo:'joelho-perna'},
{n:25,nome:'Artéria recorrente tibial anterior',onde:'Sobe da tibial anterior para a rede genicular.',rota:'Tibial anterior → ascende → rede genicular.',grupo:'joelho-perna'},
{n:26,nome:'Artéria tarsal lateral',onde:'Dorso lateral do pé.',rota:'Dorsal do pé → ramo tarsal lateral.',grupo:'pe'},
{n:27,nome:'Artéria dorsal do pé',onde:'Continuação da tibial anterior no dorso do pé, entre tendões extensores.',rota:'Tibial anterior → tornozelo anterior → dorso do pé.',grupo:'pe'},
{n:28,nome:'Artéria arqueada',onde:'Transversalmente na base dos metatarsos dorsais.',rota:'Dorsal do pé → arco transverso dorsal → metatarsais dorsais.',grupo:'pe'},
{n:29,nome:'Artéria plantar profunda',onde:'Ramo que mergulha do dorso para a planta, ajudando no arco plantar profundo.',rota:'Dorsal do pé → ramo plantar profundo → arco plantar profundo.',grupo:'pe'},
{n:30,nome:'1ª artéria metatarsal dorsal',onde:'Primeiro espaço intermetatarsal dorsal.',rota:'Dorsal/arqueada → primeiro espaço intermetatarsal.',grupo:'pe'},
{n:31,nome:'Artérias metatarsais dorsais',onde:'Entre os metatarsos, no dorso do pé.',rota:'Arqueada → metatarsais dorsais → digitais dorsais.',grupo:'pe'},
{n:32,nome:'Artérias digitais dorsais comuns',onde:'Ramos dorsais antes da divisão para os dedos.',rota:'Metatarsais dorsais → digitais dorsais comuns.',grupo:'pe'},
{n:33,nome:'Artérias digitais dorsais próprias',onde:'Nas margens dorsais dos dedos.',rota:'Digitais dorsais comuns → digitais dorsais próprias.',grupo:'pe'},
{n:34,nome:'Artéria plantar medial',onde:'Ramo medial da tibial posterior, na planta medial.',rota:'Tibial posterior → plantar medial.',grupo:'pe'},
{n:35,nome:'Artéria plantar lateral',onde:'Ramo lateral da tibial posterior, indo para arco plantar profundo.',rota:'Tibial posterior → plantar lateral → arco plantar profundo.',grupo:'pe'},
{n:36,nome:'Arco plantar profundo',onde:'Profundamente na planta, próximo às bases dos metatarsos.',rota:'Plantar lateral + plantar profunda → arco plantar profundo.',grupo:'pe'},
{n:37,nome:'Artérias metatarsais plantares',onde:'Entre os metatarsos, na planta.',rota:'Arco plantar profundo → metatarsais plantares.',grupo:'pe'},
{n:38,nome:'Artérias digitais plantares comuns',onde:'Antes da divisão digital plantar.',rota:'Metatarsais plantares → digitais plantares comuns.',grupo:'pe'},
{n:39,nome:'Artérias digitais plantares próprias',onde:'Margens plantares dos dedos.',rota:'Digitais plantares comuns → digitais plantares próprias.',grupo:'pe'}
];

const grid=document.getElementById('grid'), tpl=document.getElementById('cardTemplate'), search=document.getElementById('search'), filter=document.getElementById('filter');
const modal=document.getElementById('modal'), modalContent=document.getElementById('modalContent');
function imgPath(n){return `imagens/${n}.png`}
function render(){
  const q=search.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const f=filter.value; grid.innerHTML='';
  ARTERIAS.filter(a=>f==='todas'||a.grupo===f).filter(a=>`${a.nome} ${a.onde} ${a.rota}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(q)).forEach(a=>{
    const node=tpl.content.cloneNode(true); const card=node.querySelector('.card');
    node.querySelector('.num').textContent=a.n; node.querySelector('img').src=imgPath(a.n); node.querySelector('img').alt=`Imagem ${a.n}: ${a.nome}`;
    node.querySelector('h2').textContent=a.nome; node.querySelector('.where').textContent=a.onde; node.querySelector('.route').textContent=a.rota;
    node.querySelector('button').onclick=()=>openModal(a); grid.appendChild(node);
  })
}
function openModal(a){modalContent.innerHTML=`<div class="modalBox"><img src="${imgPath(a.n)}" alt="${a.nome}"><div class="modalText"><p class="tag">Card ${a.n} de 39</p><h2>${a.nome}</h2><p class="where">${a.onde}</p><p class="route">${a.rota}</p><p class="sub">Arquivo esperado: <strong>${imgPath(a.n)}</strong></p></div></div>`; modal.showModal()}
document.getElementById('closeModal').onclick=()=>modal.close(); search.oninput=render; filter.onchange=render;
document.getElementById('themeBtn').onclick=()=>{document.body.classList.toggle('light');localStorage.setItem('tema',document.body.classList.contains('light')?'light':'dark')};
if(localStorage.getItem('tema')==='light') document.body.classList.add('light');
document.getElementById('pdfBtn').onclick=()=>window.print();
let deferredPrompt; const installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;installBtn.hidden=false});
installBtn.onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true};
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js')}
render();
