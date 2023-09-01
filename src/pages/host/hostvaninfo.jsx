import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const vanData = useOutletContext()[0];
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

    return (
        <div className="vanHostInfoMain">
            <div className="info1"><span className="infoBoxes">Name: </span>{vanData.name}</div>
            <div className="info2"><span className="infoBoxes">Category: </span>{capitalizeFirstLetter(vanData.type)}</div>
            <div className="info3"><span className="infoBoxes">Description: </span>{vanData.description}</div>
            <div className="info4"><span className="infoBoxes">Visibility: </span>Public</div>
        </div>
    )
}