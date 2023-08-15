export default function Inscripciones() {
    return (
        <form className="max-w-screen-xl py-16 mx-auto sm:px-6 lg:px-8">
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" value="John"></input>
            <input type="submit" value="Submit"></input>
        </form>
    )
}