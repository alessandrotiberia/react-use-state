import { useState } from 'react';

// Inserisco l'array fornito all'esterno del componente per non ricrearlo ad ogni render
const dati_linguaggi = [
  {
    id: 1,
    title: "HTML",
    description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
  },
  {
    id: 2,
    title: "CSS",
    description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
  },
  {
    id: 3,
    title: "JavaScript",
    description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
  },
  {
    id: 4,
    title: "Node.js",
    description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
  },
  {
    id: 5,
    title: "Express",
    description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
  },
  {
    id: 6,
    title: "ReactJS",
    description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
  }
];

function MyCard() {
    // Inizializzo lo stato passando il primo elemento dell'array in modo che HTML sia visibile di default
    const [lingua_selezionata, imposta_lingua_selezionata] = useState(dati_linguaggi[0]);

    // Funzione dedicata ad aggiornare lo stato quando l'utente clicca un bottone
    const gestisci_click_bottone = (nuovo_linguaggio) => {
        imposta_lingua_selezionata(nuovo_linguaggio);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Learn Web development</h1>
            
            <div className="mb-4">
                {/* Ciclo l'array per stampare tutti i bottoni necessari */}
                {dati_linguaggi.map((singolo_linguaggio) => {
                    
                    // Controllo se l'id del bottone corrente è uguale all'id salvato nello stato
                    const e_selezionato = lingua_selezionata.id === singolo_linguaggio.id;
                    
                    // Assegno il colore giallo se selezionato, blu se inattivo. Aggiungo margine a destra.
                    const classi_del_bottone = e_selezionato ? "btn btn-warning me-2" : "btn btn-primary me-2";

                    return (
                        <button 
                            key={singolo_linguaggio.id} 
                            className={classi_del_bottone}
                            onClick={() => gestisci_click_bottone(singolo_linguaggio)}
                        >
                            {singolo_linguaggio.title}
                        </button>
                    );
                })}
            </div>

            <div className="card">
                <div className="card-body">
                    {/* Stampo i dati basandomi sull'oggetto attualmente salvato nello stato */}
                    <h5 className="card-title">{lingua_selezionata.title}</h5>
                    <p className="card-text">{lingua_selezionata.description}</p>
                </div>
            </div>
        </div>
    );
}

export default MyCard;