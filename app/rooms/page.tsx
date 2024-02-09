import {Header} from "../../components/header";
import {Button} from "../../components/button";
import {ConversationCard} from "../../components/conversationCard";
import Link from "next/link";
import React from "react";
import Axios from "../../core/axios";



const getServerSideProps = async () => {
    try {
        const {data} = await Axios.get('/rooms.json');
        console.log(data)
        return data
    }catch (error){
        console.log('error!')
    }
    return [];

}

export default async function RoomsPage() {
    const rooms = await getServerSideProps();
    console.log(rooms)



  /*  const [rooms, setRooms] = React.useState([])

 React.useEffect(() => {
     (async () => {
       const {data} = await Axios.get('/rooms.json')
         setRooms(data)
     })()

}, [])*/

    return (
        <>
            <Header/>
            <div className='container'>
                <div className='mt-40 d-flex align-items-center justify-content-between'>
                    <h1 className='mb-40 mt-40'>All conversations</h1>
                    <Button color='green'>+ Start Room</Button>
                </div>
                <div className=' grid mt-30'>
                    {
                        rooms.map((obj) => (
                            <Link key={obj.id} href={`/rooms/${obj.id}`}>

                                <ConversationCard
                                    title={obj.title}
                                    avatars={[obj.avatars]}
                                    guests={obj.guests}
                                    guestsCount={obj.guestsCount}
                                    speakersCount={obj.speakersCount}

                                />

                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


