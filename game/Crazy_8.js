<template>
  <div>
    <h2>Crazy 8 Console Game</h2>
    <button @click="startGame">Start Game</button>
</div>
</template>

<script>
  export default {
  name: 'Crazy8',
  methods: {
  startGame() {
  // Basic Game Setup
  const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  function createCard(suit, value) {
  return { suit, value };
}

  function createDeck() {
  const deck = [];
  for (const suit of SUITS) {
  for (const value of VALUES) {
  deck.push(createCard(suit, value));
}
}
  return deck;
}

  function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}
}

  const game = {
  deck: [],
  discardPile: [],
  players: {
  human: [],
  ai: []
},
  currentPlayer: 'human',
  currentSuit: null,
  gameOver: false
};

  function startGame() {
  game.deck = createDeck();
  shuffle(game.deck);

  for (let i = 0; i < 5; i++) {
  game.players.human.push(game.deck.pop());
  game.players.ai.push(game.deck.pop());
}

  let topCard;
  do {
  topCard = game.deck.pop();
} while (topCard.value === '8');
  game.discardPile.push(topCard);
  game.currentSuit = topCard.suit;

  console.log(`Game started! Top card: ${topCard.value} of ${topCard.suit}`);
  console.log(`Your hand:`, game.players.human);

  gameLoop();
}

  function gameLoop() {
  if (game.gameOver) return;

  if (game.currentPlayer === 'human') {
  playerTurn();
} else {
  aiTurn();
}
}

  function switchTurn() {
  game.currentPlayer = game.currentPlayer === 'human' ? 'ai' : 'human';
  gameLoop();
}

  function getPlayableCards(hand) {
  const topCard = game.discardPile[game.discardPile.length - 1];
  return hand.filter(card =>
  card.suit === game.currentSuit || card.value === topCard.value || card.value === '8'
  );
}

  function playCard(playerType, card) {
  const hand = game.players[playerType];
  hand.splice(hand.indexOf(card), 1);
  game.discardPile.push(card);

  console.log(`${playerType} played ${card.value} of ${card.suit}`);

  if (card.value === '8') {
  const randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
  game.currentSuit = randomSuit;
  console.log(`${playerType} chose suit: ${randomSuit}`);
} else {
  game.currentSuit = card.suit;
}

  if (hand.length === 0) {
  console.log(`${playerType} wins!`);
  game.gameOver = true;
  return;
}

  switchTurn();
}

  function drawCard(playerType) {
  if (game.deck.length === 0) {
  console.log("Deck is empty!");
  return;
}
  const card = game.deck.pop();
  game.players[playerType].push(card);
  console.log(`${playerType} drew a card: ${card.value} of ${card.suit}`);
}

  function playerTurn() {
  console.log("Your turn!");
  const playable = getPlayableCards(game.players.human);
  if (playable.length > 0) {
  const cardToPlay = playable[0];
  playCard('human', cardToPlay);
} else {
  console.log("No playable cards. Drawing one...");
  drawCard('human');
  switchTurn();
}
}

  function aiTurn() {
  console.log("AI's turn...");
  const playable = getPlayableCards(game.players.ai);
  if (playable.length > 0) {
  const cardToPlay = playable[0];
  playCard('ai', cardToPlay);
} else {
  console.log("AI has no playable cards. Drawing...");
  drawCard('ai');
  switchTurn();
}
}

  startGame();
}
}
};
</script>

<style scoped>
  button {
  padding: 8px 16px;
  font-size: 16px;
}
</style>
