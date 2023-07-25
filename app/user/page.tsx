import '../global.css'
import NavLogged from '@/components/NavLog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import API from '../_spotify/userToken'
import styles from '../_styles/User.module.css'
export default function UserStats(){
    return(
        <div>
            <div className = {styles.container}>
                <NavLogged />
                <API />
                
            </div>
        </div>
    )
}