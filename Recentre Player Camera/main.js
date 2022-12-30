// Register the /player command in Foundry
Hooks.on('chatMessage', (chatMessage) => {
  if (chatMessage.content.startsWith('/player')) {
    // Get the current user's actor
    const user = game.users.get(chatMessage.user);
    const actor = user.character;
    
    // Get the current user's player token
    const playerToken = canvas.tokens.ownedTokens(user.id).find(token => token.actor.id === actor.id);
    
    // If the player has a token, center the view on the token
    if (playerToken) {
      canvas.animatePan({ x: playerToken.x, y: playerToken.y });
    }
  }
});
