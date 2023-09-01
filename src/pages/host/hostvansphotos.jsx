import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){
    const vanData = useOutletContext()[0];

    return (
        <div className="vanHostInfoPhotos"><img src={vanData.imageUrl} alt=""/></div>
    )
}