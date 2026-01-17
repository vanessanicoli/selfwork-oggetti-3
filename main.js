// Crea un oggetto bowling con le seguenti caratteristiche:
// una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
// diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
// determinare il vincitore

// EXTRA:
// Crea un metodo per stilare la classifica finale dei giocatori

// DATI DI PARTENZA:

let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],

    showPlayers : function(){
        this.finalScores();
        console.log('------------ PLAYERS LIST ------------');
        this.players.forEach( (player)=> {
            console.log(`Player: ${player.name}\nScore: ${player.totScore}`)
        });
    },
    
    randomScores : function (){
        this.players.forEach( (player) => {
            for(let i=1; i<=10; i++){
                player.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1));
            }
        });
    },
    
    //Uso del .reduce() per calcolare il punteggio totale del singolo giocatore
    //Creazione della proprietà totScore che conserverà il punteggio finale di ogni giocatore
    finalScores : function (){
        this.players.forEach( (player) => {
            let total = player.scores.reduce( (acc, score) => acc + score, 0);
            player.totScore = total;
        } );
    },

    addPlayer : function(nome_aggiunto){
        let nuovoPlayer = {name: nome_aggiunto, scores: []};
        for(let i=1; i<=10; i++){
            nuovoPlayer.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1));
        }
        this.players.push(nuovoPlayer);
    },
       
    findWinner : function(){
        this.finalScores();
        let rank = [...this.players].sort( (a, b) => b.totScore - a.totScore );
        let winner = rank[0];
        console.log('------------ WINNER ------------');
        console.log(`The winner is ${winner.name}!\nFinal score: ${winner.totScore}`);
    },

    ranking : function(){
        console.log('------------ RANKING ------------');
        let rank = [...this.players].sort( (a, b) => b.totScore - a.totScore );
        rank.forEach( (player, i) => {
            console.log(`${i+1}. Player: ${player.name}\n   Final score: ${player.totScore}`); 
        } );
    }

}

bowling.showPlayers();

bowling.randomScores();

bowling.addPlayer('Giulia');
bowling.addPlayer('Sarah');
bowling.showPlayers();

bowling.findWinner();
bowling.ranking();