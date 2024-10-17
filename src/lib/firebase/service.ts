import { collection, getDocs, getFirestore } from "firebase/firestore"
import { app } from "./init"
import { AbilityType } from "@/types/ability.type"
import { ProjectsType } from "@/types/projets.type"
import { SoftwareType } from "@/types/software.type"

const firestore = getFirestore(app)

export async function retriveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName))
    const ability = snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            icon: doc.data().icon,
            color: doc.data().color,
        } as AbilityType
    })
    const projects = snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            star: doc.data().star,
            date: doc.data().date,
            image: doc.data().image,
            color: doc.data().color,
            status: doc.data().status,
            technologies: doc.data().technologies,
        } as ProjectsType
    })
    const softwareApp = snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            name: doc.data().name,
            icon: doc.data().icon,
            color: doc.data().color,
            url: doc.data().url,
        } as SoftwareType
    })

    return { ability, projects, softwareApp }
}
