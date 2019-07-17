'use strict';
//// written by Nikhil 'itsN1X' Pandita for Exit Co.
const app = document.getElementById('root');const logo = document.createElement('img');logo.src = 'https://avatars1.githubusercontent.com/u/13474314?s=24';
const Zeus = document.createElement('ol');Zeus.setAttribute('class', 'Zeus');
app.appendChild(Zeus);
const Butch0000 = document.createElement('div');
var request0000 = new XMLHttpRequest();request0000.open('GET', 'https://api.coinmarketcap.com/v1/ticker/', true);
const Butch0001 = document.createElement('div');
var request0001 = new XMLHttpRequest();request0001.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=100', true);
const Butch0002 = document.createElement('div');
var request0002 = new XMLHttpRequest();request0002.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=200', true);
const Butch0003 = document.createElement('div');
var request0003 = new XMLHttpRequest();request0003.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=300', true);
const Butch0004 = document.createElement('div');
var request0004 = new XMLHttpRequest();request0004.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=400', true);
const Butch0005 = document.createElement('div');
var request0005 = new XMLHttpRequest();request0005.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=500', true);
const Butch0006 = document.createElement('div');
var request0006 = new XMLHttpRequest();request0006.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=600', true);
const Butch0007 = document.createElement('div');
var request0007 = new XMLHttpRequest();request0007.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=700', true);
const Butch0008 = document.createElement('div');
var request0008 = new XMLHttpRequest();request0008.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=800', true);
const Butch0009 = document.createElement('div');
var request0009 = new XMLHttpRequest();request0009.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=900', true);
const Butch0010 = document.createElement('div');
var request0010 = new XMLHttpRequest();request0010.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1000', true);
const Butch0011 = document.createElement('div');
var request0011 = new XMLHttpRequest();request0011.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1100', true);
const Butch0012 = document.createElement('div');
var request0012 = new XMLHttpRequest();request0012.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1200', true);
const Butch0013 = document.createElement('div');
var request0013 = new XMLHttpRequest();request0013.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1300', true);
const Butch0014 = document.createElement('div');
var request0014 = new XMLHttpRequest();request0014.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1400', true);
const Butch0015 = document.createElement('div');
var request0015 = new XMLHttpRequest();request0015.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1500', true);
const Butch0016 = document.createElement('div');
var request0016 = new XMLHttpRequest();request0016.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1600', true);
const Butch0017 = document.createElement('div');
var request0017 = new XMLHttpRequest();request0017.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1700', true);
const Butch0018 = document.createElement('div');
var request0018 = new XMLHttpRequest();request0018.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1800', true);
const Butch0019 = document.createElement('div');
var request0019 = new XMLHttpRequest();request0019.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=1900', true);
const Butch0020 = document.createElement('div');
var request0020 = new XMLHttpRequest();request0020.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=2000', true);
const Butch0021 = document.createElement('div');
var request0021 = new XMLHttpRequest();request0021.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=2100', true);
const Butch0022 = document.createElement('div');
var request0022 = new XMLHttpRequest();request0022.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=2200', true);
request0000.onload = function () {
  var dawg0000 = JSON.parse(this.response);
  if (request0000.status >= 200 && request0000.status < 400) {
	  dawg0000.forEach(id => {
		  const Taur0000 = document.createElement('li');
Taur0000.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0000.appendChild(Taur0000);
    });  } }
request0001.onload = function () {
  var dawg0001 = JSON.parse(this.response);
  if (request0001.status >= 200 && request0001.status < 400) {
	  dawg0001.forEach(id => {
		  const Taur0001 = document.createElement('li');
Taur0001.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0001.appendChild(Taur0001);
    });  } }
request0002.onload = function () {
  var dawg0002 = JSON.parse(this.response);
  if (request0002.status >= 200 && request0002.status < 400) {
    dawg0002.forEach(id => {
		const Taur0002 = document.createElement('li');
Taur0002.innerText  = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0002.appendChild(Taur0002);
    });  } }
request0003.onload = function () {
  var dawg0003 = JSON.parse(this.response);
  if (request0003.status >= 200 && request0003.status < 400) {
	  dawg0003.forEach(id => {
		  const Taur0003 = document.createElement('li');
Taur0003.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0003.appendChild(Taur0003);
    });  } }
request0004.onload = function () {
  var dawg0004 = JSON.parse(this.response);
  if (request0004.status >= 200 && request0004.status < 400) {
	  dawg0004.forEach(id => {
		  const Taur0004 = document.createElement('li');
Taur0004.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0004.appendChild(Taur0004);
    });  } }
request0005.onload = function () {
  var dawg0005 = JSON.parse(this.response);
  if (request0005.status >= 200 && request0005.status < 400) {
    dawg0005.forEach(id => {
		const Taur0005 = document.createElement('li');
Taur0005.innerText  = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0005.appendChild(Taur0005);
    });  } }
request0006.onload = function () {
  var dawg0006 = JSON.parse(this.response);
  if (request0006.status >= 200 && request0006.status < 400) {
	  dawg0006.forEach(id => {
		  const Taur0006 = document.createElement('li');
Taur0006.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0006.appendChild(Taur0006);
    });  } }
request0007.onload = function () {
  var dawg0007 = JSON.parse(this.response);
  if (request0007.status >= 200 && request0007.status < 400) {
	  dawg0007.forEach(id => {
		  const Taur0007 = document.createElement('li');
Taur0007.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0007.appendChild(Taur0007);
    });  } }
request0008.onload = function () {
  var dawg0008 = JSON.parse(this.response);
  if (request0008.status >= 200 && request0008.status < 400) {
    dawg0008.forEach(id => {
		const Taur0008 = document.createElement('li');
Taur0008.innerText  = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0008.appendChild(Taur0008);
    });  } }
request0009.onload = function () {
  var dawg0009 = JSON.parse(this.response);
  if (request0009.status >= 200 && request0009.status < 400) {
	  dawg0009.forEach(id => {
		  const Taur0009 = document.createElement('li');
Taur0009.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0009.appendChild(Taur0009);
    });  } }
request0010.onload = function () {
  var dawg0010 = JSON.parse(this.response);
  if (request0010.status >= 200 && request0010.status < 400) {
	  dawg0010.forEach(id => {
		  const Taur0010 = document.createElement('li');
Taur0010.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0010.appendChild(Taur0010);
    });  } }
request0011.onload = function () {
  var dawg0011 = JSON.parse(this.response);
  if (request0011.status >= 200 && request0011.status < 400) {
	  dawg0011.forEach(id => {
		  const Taur0011 = document.createElement('li');
Taur0011.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0011.appendChild(Taur0011);
    });  } }
request0012.onload = function () {
  var dawg0012 = JSON.parse(this.response);
  if (request0012.status >= 200 && request0012.status < 400) {
	  dawg0012.forEach(id => {
		  const Taur0012 = document.createElement('li');
Taur0012.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0012.appendChild(Taur0012);
    });  } }
request0013.onload = function () {
  var dawg0013 = JSON.parse(this.response);
  if (request0013.status >= 200 && request0013.status < 400) {
	  dawg0013.forEach(id => {
		  const Taur0013 = document.createElement('li');
Taur0013.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0013.appendChild(Taur0013);
    });  } }
request0014.onload = function () {
  var dawg0014 = JSON.parse(this.response);
  if (request0014.status >= 200 && request0014.status < 400) {
	  dawg0014.forEach(id => {
		  const Taur0014 = document.createElement('li');
Taur0014.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0014.appendChild(Taur0014);
    });  } }
request0015.onload = function () {
  var dawg0015 = JSON.parse(this.response);
  if (request0015.status >= 200 && request0015.status < 400) {
	  dawg0015.forEach(id => {
		  const Taur0015 = document.createElement('li');
Taur0015.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0015.appendChild(Taur0015);
    });  } }
request0016.onload = function () {
  var dawg0016 = JSON.parse(this.response);
  if (request0016.status >= 200 && request0016.status < 400) {
	  dawg0016.forEach(id => {
		  const Taur0016 = document.createElement('li');
Taur0016.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0016.appendChild(Taur0016);
    });  } }
request0017.onload = function () {
  var dawg0017 = JSON.parse(this.response);
  if (request0017.status >= 200 && request0017.status < 400) {
	  dawg0017.forEach(id => {
		  const Taur0017 = document.createElement('li');
Taur0017.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0017.appendChild(Taur0017);
    });  } }
request0018.onload = function () {
  var dawg0018 = JSON.parse(this.response);
  if (request0018.status >= 200 && request0018.status < 400) {
	  dawg0018.forEach(id => {
		  const Taur0018 = document.createElement('li');
Taur0018.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0018.appendChild(Taur0018);
    });  } }
request0019.onload = function () {
  var dawg0019 = JSON.parse(this.response);
  if (request0019.status >= 200 && request0019.status < 400) {
	  dawg0019.forEach(id => {
		  const Taur0019 = document.createElement('li');
Taur0019.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0019.appendChild(Taur0019);
    });  } }
request0020.onload = function () {
  var dawg0020 = JSON.parse(this.response);
  if (request0020.status >= 200 && request0020.status < 400) {
	  dawg0020.forEach(id => {
		  const Taur0020 = document.createElement('li');
Taur0020.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0020.appendChild(Taur0020);
    });  } }
request0021.onload = function () {
  var dawg0021 = JSON.parse(this.response);
  if (request0021.status >= 200 && request0021.status < 400) {
	  dawg0021.forEach(id => {
		  const Taur0021 = document.createElement('li');
Taur0021.innerText = '⛓' + ((((bb[id.symbol])/id.total_supply)*100).toFixed(21)) + '%, ⥱ ¶[' + ((((bb[id.symbol])*1024*68.53)*(id.price_usd)).toLocaleString()) + '] 🌐' + id.name + ': ' + id.
percent_change_1h +'%,'+ id.percent_change_24h +'%,'+ id.percent_change_7d+'% ⟠';
Butch0021.appendChild(Taur0021);
    });  } }
const TerrorMessage = document.createElement('marquee');    TerrorMessage.setAttribute('behavior', 'alternate');    TerrorMessage.setAttribute('bgcolor', '#0FF133');    TerrorMessage.textContent = '✌ / Please consider voting our Proxy : 3r3333333333 on eOS™ network  : ]  ';
Zeus.appendChild(TerrorMessage);
TerrorMessage.appendChild(logo);
Zeus.appendChild(Butch0000);request0000.send();
Zeus.appendChild(Butch0001);request0001.send();
Zeus.appendChild(Butch0002);request0002.send();
Zeus.appendChild(Butch0003);request0003.send();
Zeus.appendChild(Butch0004);request0004.send();
Zeus.appendChild(Butch0005);request0005.send();
Zeus.appendChild(Butch0006);request0006.send();
Zeus.appendChild(Butch0007);request0007.send();
Zeus.appendChild(Butch0008);request0008.send();
Zeus.appendChild(Butch0009);request0009.send();
Zeus.appendChild(Butch0010);request0010.send();
Zeus.appendChild(Butch0011);request0011.send();
Zeus.appendChild(Butch0012);request0012.send();
Zeus.appendChild(Butch0013);request0013.send();
Zeus.appendChild(Butch0014);request0014.send();
Zeus.appendChild(Butch0015);request0015.send();
Zeus.appendChild(Butch0016);request0016.send();
Zeus.appendChild(Butch0017);request0017.send();
Zeus.appendChild(Butch0018);request0018.send();
Zeus.appendChild(Butch0019);request0019.send();
Zeus.appendChild(Butch0020);request0020.send();
Zeus.appendChild(Butch0021);request0021.send();
Zeus.appendChild(Butch0022);request0022.send();
