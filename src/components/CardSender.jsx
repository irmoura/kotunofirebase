import MessagingService from '../services/messaging'
import './CardSender.scss'
import './PlayerCards.css'

function CardSender() {

    function handleSubmit(arg) {
        var playerCard = {
            number: arg.target.innerText,
            color: arg.target.style.backgroundColor
        }
        var tableCard = {
            number: document.querySelector('.card').innerHTML,
            cor: document.querySelector('.card').style.backgroundColor
        }
        var cor = playerCard.color
        if (cor === 'red' || cor === 'green' || cor === 'blue' || cor === 'yellow') {
            if (playerCard.color === tableCard.cor || playerCard.number === tableCard.number) {
                // alert(`Jogada permitida`)
                MessagingService.updateCard(playerCard)
            } else {
                console.log(`Jogada não permitida`)
            }
        }
        //🚫🔄
    }

    return <div className={'MessageSender'}>
        <table id="tabelaRegistros">
            <tbody>
                <tr>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "red" }} onClick={handleSubmit}>
                            <p>{0}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "green" }} onClick={handleSubmit}>
                            <p>{1}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "blue" }} onClick={handleSubmit}>
                            <p>{2}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "yellow" }} onClick={handleSubmit}>
                            <p>{3}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "red" }} onClick={handleSubmit}>
                            <p>{4}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "green" }} onClick={handleSubmit}>
                            <p>{5}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "blue" }} onClick={handleSubmit}>
                            <p>{6}</p>
                        </div>
                    </td>
                </tr>
                {/* <tr>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "yellow" }} onClick={handleSubmit}>
                            <p>{7}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "red" }} onClick={handleSubmit}>
                            <p>{8}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "green" }} onClick={handleSubmit}>
                            <p>{9}</p>
                        </div>
                    </td>
                </tr> */}
            </tbody>
        </table>
    </div>
}

export default CardSender