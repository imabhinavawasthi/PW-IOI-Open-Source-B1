export const assignments = [
    {
        "id": 1,
        "name": "Github PR",
        "description": "Create a pull request on Github for your project.",
        "instructions": "Fork the repository, make your changes, and submit a pull request.",
    },
    {
        "id": 2,
        "name": "Next JS Todo App",
        "description": "Build a simple Todo application using Next.js.",
        "instructions": "Use Next.js to create a Todo app with features like adding, deleting, and marking tasks as complete.",
    }
]

export function getAssignmentById(id) {
    const x = assignments.find(assignment => assignment.id === id);
    if(x) {
        return x;
    }
    return null;
}