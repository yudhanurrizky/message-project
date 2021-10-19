function generateRandomNumber (num) {
    return Math.floor(Math.random() * num)
};

const collectiveMessages = {
    wiseQuotes: ['He who has a why to live can bare any how. - Friedrich Nietzche', 
                'Change is the law of life. And those who look only to the past or present are certain to miss the future. - John F. Kennedy',
                'All life is an experiment. The more experiments you make the better. - Ralph Waldo Emerson',
                'The only true wisdom is in knowing you know nothing. - Socrates',
                'Any fool can know. The point is to understand. - Albert Einstein',
                'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
                'The way to get started is to quit talking and begin doing. - Walt Disney'],
    inspirationalFacts: ['Your brain generates enough energy to turn a light bulb on.',
                        'People say that life is short, but you still get a whopping 2.21 billion heartbeats to use up over your lifetime.',
                        'The odds of you being born as exactly you are basically zero.',
                        'Your subconscious mind is 30,000 times more powerful than your conscious mind.',
                        'If the entire history of the universe’s existence was condensed into one year, your life would be just 0.16 cosmic seconds.',],
    motivationalPrompt: ['Get going!', 'Begin the journey!', 'Conquer the world!', 'Change the world!', 'Start the process!']
};

const randomMessages = []

randomMessages.push(collectiveMessages.wiseQuotes[generateRandomNumber(collectiveMessages.wiseQuotes.length)])
randomMessages.push(collectiveMessages.inspirationalFacts[generateRandomNumber(collectiveMessages.inspirationalFacts.length)])
randomMessages.push(collectiveMessages.motivationalPrompt[generateRandomNumber(collectiveMessages.motivationalPrompt.length)])


console.log(randomMessages)