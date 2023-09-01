import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const vanData = useOutletContext()[0];

    return (
        <div className="vanHostInfoPrice">${vanData.price}/day</div>
    )
}