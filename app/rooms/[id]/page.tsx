
import {Header} from "../../../components/header";
import {BackButton} from "../../../components/BackButton";
import {Room} from "../../../components/room";
import Axios from "../../../core/axios";

/*type Props = {
    params: {
        id: string
    }
}*/

const getServerSideProps = async (ctx) => {

    try {
        const {data} = await Axios.get('/rooms.json');
        const roomId = ctx.query.id
        const room = data.find((obj) => obj.id === roomId)
        return data
    } catch (error) {
        console.log('error!')
    }
    return [];

}

//{params: {id}, room}: Props
export default async function RoomPage () {

    const rooms = await getServerSideProps();

    return (
        <>
            <Header/>
            <div className='container mt-40 wrapper'>
                <BackButton title='All rooms' href='/rooms'/>

            </div>
            <Room title='cdc'/>

        </>

    )
}