import {downloadLink} from "../../api";

const Submit = ({match}) => {

    console.log(match.params.id);

    const handleDownload = () => {
        downloadLink(match.params.id)
    }

    return <div>
        <div>Udało ci się zakupić wymarzony dom</div>
        <a href={downloadLink(match.params.id)}>Pobierz fakturę</a>
    </div>
}

export default Submit;