import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const vanData = useOutletContext()[0];
    console.log(vanData);

    return (
        <>
            <span>{vanData.name}</span>
        </>
    )
}