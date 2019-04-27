export default {
    getTasks: () => {
        return JSON.parse(localStorage.getItem('__task'))
    },
    setTasks: tasks => {
        return localStorage.setItem('__task', JSON.stringify(tasks))
    }
}