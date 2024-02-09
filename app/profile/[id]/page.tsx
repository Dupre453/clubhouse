import {useRouter} from "next/router";

import {Profile} from "../../../components/profile";
import {Header} from "../../../components/header";

type Props = {
    params: {
        id: string
    }
}
export default function ProfilePage({params: {id}}: Props) {
    return (
        <>
            <Header/>


                <div className='container mt-40'>
                    <Profile fullname='Seraphine Dupre' username='@dupre'
                             avatarUrl='https://img.freepik.com/premium-photo/watercolor-of-colorpoint-shorthair-cat-with-a-cloche-hat-velvet-dress-teal-patrick-day-clipart_655090-1075639.jpg?w=826'
                             about='Test info'/>
                </div>
        </>
       
    )
}