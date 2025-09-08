import { useEffect, useState } from "react"
import ProductDatas from "../data/ProductDatas"
import Popup from "./Popup"
import "../Style/display.css"
import Footer from "./Footer"

export default function DisplayData(props) {
    const [productdata, setproductdata] = useState(ProductDatas)
    const [selectitem, setselectitem] = useState([]);
    // ...............card increment
    function cardIncrement(product) {
        let updatedProducts = productdata.map((val) => {
            if (val.heading == product.heading) {
                return { ...val, orderedq: val.orderedq + 1 }
            } else {
                return val
            }
        })
        setproductdata(updatedProducts);

    }

    function cardDecrement(product) {

        let updatedProducts = productdata.map((val) => {
            if (val.heading == product.heading && val.orderedq > 0) {
                return { ...val, orderedq: val.orderedq - 1 }
            } else {
                return val;
            }

        })

        setproductdata(updatedProducts);
    }
    //..............Added to card................ 

    function Addedtocard(card) {

        const Changedproduct = productdata.map((val) => {
            if (card.heading == val.heading) {
                return { ...val, addtocard: 1 }
            } else return val;
        })

        const select = Changedproduct.filter((val) => val.addtocard === 1 && val.orderedq > 0)

        setselectitem(select);
        props.headercount(select.length);
        setproductdata(Changedproduct);
    }

    // popIncrement

    function popIncrement(card) {
        const popInccard = selectitem.map((val) => {
            if (val.heading === card.heading) {
                return { ...val, orderedq: val.orderedq + 1 };
            } else return val;

        });
        setselectitem(popInccard);
        props.headercount(popInccard.length);
    }
    // popDecrement

    function popDecrement(card) {
        const popDeccard = selectitem.map((val) => {
            if (val.heading === card.heading && val.orderedq > 0) {

                return { ...val, orderedq: val.orderedq - 1 }
            } else return val;
        })
        setselectitem(popDeccard);
        props.headercount(popDeccard.length);
    }



    return (

        <> <div className="Pd">

                <div className="grid grid-4">
                    {
                        productdata.map((val) => {
                            return (
                                <div className="grid-sec" key={val.heading}>
                                    <img src={val.imgurl} alt={val.heading}></img>
                                    <h5>{val.heading}</h5>
                                    <div className="grid gs-price">
                                        <p>{val.quantity} kg</p>
                                        <p>Rs: {val.price}</p>
                                    </div>
                                    <div className="grid in-de">
                                        <button className="inc" onClick={() => { cardIncrement(val) }}>+</button>
                                        <p>{val.orderedq * val.quantity} kg</p>
                                        <p>RS: {val.orderedq * val.price}</p>
                                        <button className="dnc" onClick={() => { cardDecrement(val) }}>-</button>
                                    </div>
                                    <div className="atc">
                                        {/* <button className="bn">Buy Now</button> */}
                                        <button className="atc" onClick={() => { Addedtocard(val) }}>Add to Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <Popup

            popupstatus={props.popupstatus}
            popupclose={() => { props.popupclose() }}
            popIncrement={popIncrement}
            popDecrement={popDecrement}
            selectitem={selectitem}

        />
            
            <Footer/>
        </>
    )
}
