const storyElement = document.getElementById('story');
const choices = document.getElementById('choices');

// Story paths
const stories = {
    1: {
        text: "You hear a whisper behind you. Do you:",
        choices: {
            1: { next: 5, text: "Run into the woods" },
            2: { next: 6, text: "Turn around to confront it" },
            3: { next: 7, text: "Ignore it and walk forward" },
            4: { next: 8, text: "Scream for help" },
        },
    },
    5: {
        text: "You run deeper into the woods. You see a cabin. Do you:",
        choices: {
            1: { next: 9, text: "Enter the cabin" },
            2: { next: 10, text: "Keep running past it" },
            3: { next: 11, text: "Look for another way" },
            4: { next: 12, text: "Climb a nearby tree" },
        },
    },
    6: {
        text: "You turn around and see a shadowy figure. Do you:",
        choices: {
            1: { next: 13, text: "Approach the figure" },
            2: { next: 14, text: "Run in the opposite direction" },
            3: { next: 15, text: "Ask 'Who are you?'" },
            4: { next: 16, text: "Attack the figure" },
        },
    },
    // Continue adding paths like this until you have 10 endings
    // Endings are numbered from 9 to 18
    9: { text: "Ending 1: You were caught by a monster. Game over.", choices: {} },
    10: { text: "Ending 2: You escaped but will never forget the terror. Game over.", choices: {} },
    11: { text: "Ending 3: You found an old relic, but now you're cursed. Game over.", choices: {} },
    12: { text: "Ending 4: The tree you climbed was haunted. Game over.", choices: {} },
    13: { text: "Ending 5: The figure vanished, and so did you. Game over.", choices: {} },
    14: { text: "Ending 6: You tripped and fell into a dark hole. Game over.", choices: {} },
    15: { text: "Ending 7: The figure answered, 'I'm you'. Game over.", choices: {} },
    16: { text: "Ending 8: The figure disappeared, leaving you alone forever. Game over.", choices: {} },
    17: { text: "Ending 9: You found safety, but at what cost? Game over.", choices: {} },
    18: { text: "Ending 10: You confronted the horror and survived... for now. Game over.", choices: {} },
};

// Function to handle story progression
function makeChoice(choice) {
    const currentStory = stories[choice];
    if (!currentStory) return;

    storyElement.textContent = currentStory.text;

    // Clear old buttons
    choices.innerHTML = '';

    // If it's an ending
    if (Object.keys(currentStory.choices).length === 0) {
        const restartButton = document.createElement('button');
        restartButton.textContent = "Restart";
        restartButton.onclick = () => location.reload();
        choices.appendChild(restartButton);
        return;
    }

    // Add new choice buttons
    Object.keys(currentStory.choices).forEach(key => {
        const btn = document.createElement('button');
        btn.textContent = currentStory.choices[key].text;
        btn.onclick = () => makeChoice(currentStory.choices[key].next);
        choices.appendChild(btn);
    });
}

// Start the game with the first story
makeChoice(1);
