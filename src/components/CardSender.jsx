import MessagingService from '../services/messaging'
import './CardSender.scss'
import './PlayerCards.css'

function CardSender() {

    function handleSubmit(arg) {
        var card = {
            number: arg.target.innerText,
            color: arg.target.style.backgroundColor
        }
        MessagingService.updateCard(card)
    }

    return <div className={'MessageSender'}>
        <table>
            <tbody>
                <tr>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "red" }} onClick={handleSubmit}>
                            <p>{1}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "green" }} onClick={handleSubmit}>
                            <p>{2}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "blue" }} onClick={handleSubmit}>
                            <p>{3}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "yellow" }} onClick={handleSubmit}>
                            <p>{4}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "red" }} onClick={handleSubmit}>
                            <p>{5}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "green" }} onClick={handleSubmit}>
                            <p>{6}</p>
                        </div>
                    </td>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "blue" }} onClick={handleSubmit}>
                            <p>{7}</p>
                        </div>
                    </td>
                </tr>
                {/* <tr>
                    <td>
                        <div className="playercard" style={{ backgroundColor: "red" }} onClick={handleSubmit}>
                            <p>{7}</p>
                        </div>
                    </td>
                </tr> */}
            </tbody>
        </table>
    </div>
}

export default CardSender