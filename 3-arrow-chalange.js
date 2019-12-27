const task = {
    tasks: [{
        text: 'grocery shoping',
        completed: true,
    }, {
        text: 'clean yard',
        completed: false
    }, {
        text: 'film course',
        completed: false
    }],
    getTaskDone() {
        return this.tasks.filter((task) => !task.completed);

    }
}
console.log(task.getTaskDone());



