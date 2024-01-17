const { execSync } = require('child_process');
const fs = require('fs');

// Générez l'heure aléatoire
const cronExpression = execSync('node /chemin/vers/generateRandomTime.js').toString().trim();

// Construisez la commande pour le planificateur de tâches
const scheduleCommand = `0 ${cronExpression} /chemin/vers/node /chemin/vers/updateReadme.js`;

// Ajoutez la tâche au planificateur de tâches
execSync(`echo "${scheduleCommand}" | crontab -`);

// Votre mise à jour de README ici
const emotions = require('./emotions.json');
const emojis = ['😊', '😎', '🚀', '🌟', '❤️'];

// Fonction pour obtenir une émotion aléatoire depuis le fichier JSON
function getRandomEmotion() {
  const randomIndex = Math.floor(Math.random() * emotions.length);
  return emotions[randomIndex];
}

// Fonction pour obtenir un emoji aléatoire
function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Construisez le contenu du README avec une émotion aléatoire
const newContent = `Aujourd'hui je suis ${getRandomEmotion()} ${getRandomEmoji()}`;

// Mettez à jour le fichier README.md
fs.writeFileSync('README.md', newContent);

// Construisez le message de commit avec un emoji aléatoire
const commitMessage = `Mise à jour automatique du README ${getRandomEmoji()}`;

// Effectuez un commit
execSync(`git add README.md && git commit -m "${commitMessage}"`);

// Poussez les modifications vers GitHub
execSync('git push origin main');
