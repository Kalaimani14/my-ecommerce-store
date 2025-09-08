
import"../Style/popup.css"
import "../Style/table.css"
export default function Popup(props) {

    // Calculate total before return
    const totalAmount = props.selectitem.reduce(
        (sum, val) => sum + val.price * val.orderedq,
        0
    );
    if (props.popupstatus == 1) {
        return (
            <div className="popup">
                <div className="popup-data">
                    <button onClick={() => { props.popupclose() }} className="close">X</button>
                    <table >
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Img</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th colspan="3">Prize</th>

                            </tr>
                        </thead>
                        {
                            props.selectitem.map((val, index) => {
                                return (
                                    <tr key={index}>

                                        <td className="ta">{index + 1}</td>
                                        <td><img className="ppimg" src={val.imgurl}></img></td>
                                        <td className="ta">{val.heading}</td>
                                        <td className="ta">{val.orderedq * val.quantity}</td>
                                        <td className="ta">{val.orderedq * val.price} rs</td>
                                        <td className="ta" onClick={() => props.popIncrement(val)}><button>+</button></td>
                                        <td className="ta" onClick={() => props.popDecrement(val)}><button>-</button></td>

                                    </tr>
                                )
                            })
                        }
                         <tr>
                            <td className="amt" colSpan="2">Total = </td> 
                            <td className="amt" colspan="5">{totalAmount}rs</td>

                        </tr>
                        <tr>
                            <td className="buy" colspan="7">
                                <button >Buy Now</button>
                            </td>
                            
                        </tr>

                    </table>

                   




                </div>


            </div>
        )
    }

}