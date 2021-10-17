import { useSelector } from 'react-redux';

const Home = () => {
    const {user} = useSelector(state => ({...state}))

    return (
        <div className="container-fluid h1 p-5 text-center">
            Home Page {user.name}
        </div>
    )
}

export default Home
