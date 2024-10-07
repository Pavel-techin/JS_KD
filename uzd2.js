const random_exercise_generator = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];

const randomExercises = count => {
    for(let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * 10);
        const exercise = random_exercise_generator[index];
        console.log(exercise);
    }
}

randomExercises(10);