# Project name - Master Study

---

## - Breve descrizione del progetto

  Riprodurre il layout proposto della page "Master Study" themes;

### * Tecnologie adottate:  HTML/CSS/VueJs

### * Specifiche richieste: aggiungere Header e Footer con VueJs e creare una struttura dati che consenta di inserire i link nelle navbar

---
---

## Fase 1 - Analisi preliminare del layout assegnato

Individuazione delle macroaree di sviluppo:

  1. **Header**
  2. **Main**
  3. **Footer**

Successivamente le andremo a suddividere nelle loro sezioni costituenti in base alla loro funzionalità.
Simultaneamente si inizia a creare una prima bozza di organigramma strutturale, dove allocare le risorse in cartelle.
Project - "masterstudy"

- index.html
- assets
  - css - cartella per lo style
    - style.css
  - js - cartella javascript
    - fontawesome - script per collegamento fontawesome
    - main.js
  - img - cartella risorse immagini suddivise per sottocartelle
    - header
    - main
    - footer

---
---

### 1.1 - Header

![Header image](/masterstudy/prototyping/Header.png)

  Suddividiamo l'header in una
  
- Navbar top
  - contenente una selct per la scelta della lingua del sito
  - un sezione di controllo per funzionalità aggiuntive
  - una sezione per i collegamenti social e altre piattaforme
  
- Una sezione "Jumbotron", al cui interno ritroviamo:

  - una **sub-navbar** contenente:
    - logo/marchio
    - search bar con category selector
    - due collegamenti alle aree "instructor" ed "enterprise"
    - la sezione "Log in" "Signu up" ed un segnapage
  - sotto area informativa del jumbotron suddivisa in due sottosezioni
    - una **info_box** alla sinistra, formata da un "title" - slogan - button
    - una image modulare, a cui poter associare effetti di transizione.

---

### 1.2 - Main

![Main image](/masterstudy/prototyping/Main.png)

Il Main è il corpo del page, pur essendo una macroarea, al suo interno ritroviamo varie sottosezioni:

#### 1.2.1 Main - "Offers Preview"

![Offer Preview](prototyping/Offer_preview.png)

- La sezione **"offers preview"** è dedicata alla presentazione dei punti di forza del prodotto. Le informazioni sono stilizzate in due microaree:

  - Nella prima ritroviamo, sotto forma di card (icona - titolo - paragrafo), un breve riepilogo dei punti di forza del prodotto
  - Nella seconda, sotto forma di immagini, ritroviamo un riferimento all'offerta formativa tematizzata dei corsi proposti

#### 1.2.2 Main - "Info Banner"

![Banner](/masterstudy/prototyping/Banner.png)

- **info banner** - ha una struttura simile al **box** presente nel **jumbotron**.
Due sezioni:
  - una sinistra con **info_box**
    - titolo
    - descrizione
    - call-to-action
  - una destra con **banner_image**

#### 1.2.3 Main - "Showcase Products - Recent Courses"

![Courses](/masterstudy/prototyping/Courses.png)

In questa sezione è presente:

- una raccolta dei prodotti con una sub-row dove poter selezionare le categorie d'interesse;
- una vetrina dei prodotti, stilizzati sotto forma di card, al cui interno ritroviamo:

  - Una image,(in alcuni casi è presente un badge che li classifica come "new" - "hot" - "special")
  - La macro-categoria a cui è associato il corso
  - La durata o la sua valutazione
  - Il costo, e laddove previsto, un eventuale sconto o gratuità

**call-to-action** centrale "Show all"

#### 1.2.4 Main - "Our Numbers"

![Statistics](/masterstudy/prototyping/Statistics.png)

In questa area ritroviamo i "numeri" rilevanti per l'azienda suddivisi in quattro macroaree indicatori.
Questa sezione di compone di un background-color, un titolo un breve descrittivo e i quattro indicatori, stilizzati in quattro colonne, contenenti ciascuna il valore numerico associato.

#### 1.2.5 Main - "Newsletter"

![Newsletter](/masterstudy/prototyping/Newsletter.png)

Questa sezione consente la sottoscrizione alla newletter aziendale, per ricevere eventuali offerte, news, ecc.
La sua struttura può esser identificata in due colonne:

- la prima a sinistra, in cui ritroviamo un sub-title e un breve messaggio descrittivo
- in quella alla destra, il tag input email che permette l'inserimento della mail con i corretti criteri associativi ed il tasto submit per l'invio, e quindi iscrizione alla emailing list.

#### 1.2.6 Main - "Carousel Polular Courses"

![Carousel](prototyping/Carousel.png)

Questa sottosezione mostra, sotto forma di "carousel" - le card dei vari corsi, in particolare dei più poplari.
Lo stile delle card è quello che ritroviamo nella sottosezione - **"Showcase Products."**

La sua macrosctruttura è composta di un colore di background che ne identifica l'area, un titolo ed un sottotitolo descrittivo ed il "carousel" con i relativi tasti di navigazione.

#### 1.2.7 Main - "Business Box"

![Sectorized Offers](/masterstudy/prototyping/Sectorized_offers.png)

In questa sezione ritroviamo due **box_card** con la stessa struttura, con un' immagine nella parte sinistra e una descrizione specifica dell'offerta nella parte destra. Nel dettaglio:

- un titolo;
- una breve descrizione;
- una **call-to-action** di collegamento.

#### 1.2.8 Main - "Testimonial"

![Testimonial](/masterstudy/prototyping/Testimonial.png)

Questa sottosezione è dedicata alle testimonianze.
Essa si articola in :

- Immagine di background
- Bubble rettangolare, con al suo interno testo descrittivo

---
---

### 1.3 Footer

![Footer image](/masterstudy/prototyping/Footer.png)

Il Footer è suddiviso in 4 colonne contenenti:

- **About** - in cui ci sono riferimenti sull'azienda
- **Contact** - contatti aziendali. (Indirizzo, telefono, fax, info-email)
- **Page** - collegamenti alle varie arie d'interesse del sito
- **Blog** - presenta una preview di due articoli presenti nel blog.

---
---

## Fase 2 - Analisi di dettaglio -Stilistico-funzionale

Dopo la fase di analisi di massima del layout e delle sue macroaree, si passa ad una rilevazione e realizzazione delle stesse, andando a determinare gli elementi necessari alla loro realizzazione come colorazioni, dimensionamenti, posizionamenti, funzionalità e sviluppo della relativa struttura da impostare nel javascript per la generazione funzionale degli elementi html e dare interattività alla pagina.

In questa parte lo sviluppo dello "scheletro di base" della parte html va di pari passo con la generazione della struttura da impostare nel file javascrip, all'interno del quale, sfruttando la metodologia di VueJs, rendendo dinamica la creazione delle sezioni simili, in modo da rendere più flessibile eventuli aggiunte o sviluppi futuri.Esempio l'aggiunta di una nuova card prodotto, un nuovo elemento della navbar menu o elemento del footer.

## 2.1 Inizializzazione file index.html e main.js

Andiamo ad inizializzare il file effettuando i collegamenti essenziali per poter avviare la prima scrittura di codice e bozza strutturale.
Collegamenti base:

- Link di collegamento file css style.css locale;
- Script di collegamento alla libreria ajax - sinstassi Mustache-compatible;
- Collegamento a "fontawesome icon" da script locale;
- Script di collegamento a Vue.js mediante cdn;
- Script di collegamento al file locale javascript;

Prima bozza strutturale partendo dalle macrosezioni - header - main - footer;
