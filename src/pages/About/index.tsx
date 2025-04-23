import { FC } from "react"

const About:FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="text-lg">This is a simple Todo List application built with React and TypeScript.</p>
            <p className="text-lg">It allows you to add, edit, and delete tasks.</p>
        </div>
    )
}
export default About