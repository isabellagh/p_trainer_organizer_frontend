const endPoint = "http://localhost:3000/api/v1/workouts"

document.addEventListener('DOMContentLoaded', () => {
    getWorkouts()
})

function getWorkouts() {
    fetch(endPoint) // returns a promise and makes a get request
    .then(response => response.json()) // capture the response and parse that response into JSON
    .then(workouts => {
        workouts.data.forEach(workout => {
            const workoutMarkup = `
              <div data-id=${workout.id}>
                <h3>${workout.attributes.date}</h3>
                <h3>${workout.attributes.date}</h3>
                <p>${workout.attributes.sets}</p>
                <p>${workout.attributes.reps}</p>
                <p>${workout.attributes.weight}</p>
                <button data-id=${workout.id}>edit</button>
              </div>
              <br><br>`;

              document.querySelector('#workout-container').innerHTML +=
              workoutMarkup
        })
    })  // get access to that data
}