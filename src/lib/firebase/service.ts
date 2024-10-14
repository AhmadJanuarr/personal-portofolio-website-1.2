import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./init";
import { AbilityType } from "../../types/ability.type";

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));

    const data = snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            icon: doc.data().icon,
            color: doc.data().color,
        } as AbilityType;
    });
    return data
}