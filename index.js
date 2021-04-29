const endPoint = "http://localhost:3000/api/v1/workouts"

//document.addEventListener('DOMContentLoaded', () => {
    getWorkouts()

    const createWorkoutForm = document.querySelector('#create-workout-form')

    createWorkoutForm.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(e)})
    function createFormHandler(e) {
        e.preventDefault()
        console.log(e);
    }
//})

function getWorkouts() {
    fetch(endPoint) // returns a promise and makes a get request
    .then(response => response.json()) // capture the response and parse that response into JSON
    .then(workouts => {
        workouts.data.forEach(workout => {
            const workoutMarkup = `
              <div data-id=${workout.id}>
                <h2>${workout.attributes.client.name}</h2>
                <h4>exercise:${workout.attributes.exercise}</h4>
                <h4>Date:${workout.attributes.date}</h4>
                <p>Sets:${workout.attributes.sets}</p>
                <p>Reps:${workout.attributes.reps}</p>
                <p>Weight:${workout.attributes.weight}</p>
                <button data-id=${workout.id}>edit</button>
              </div>
              <br><br>`;

              document.querySelector('#workout-container').innerHTML +=
              workoutMarkup;
        })
    })  // get access to that data
}


