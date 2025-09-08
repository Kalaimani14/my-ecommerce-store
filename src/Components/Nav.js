import { Link } from "react-router-dom";
import "../Style/nav.css"
import k from '../k-logo.avif'
import atc from '../atc.png'
import { useState } from "react"
export default function Nav(props) {

   
    function serach(){


    }
    return (
        <div className="nav">
            <div className="max-w">
                <div className="grid n-g">
                    <div className="grid-sec gs-1">
                        <img src={k}></img>
                    </div>

                    <div className=" grid grid-sec ip-label">
                        <label>
                            <input placeholder="Products Search..." type="text"></input>
                        </label>
                        <button className="search" onClick={serach()}>Search</button>
                    </div>


                    <div className="grid  grid-sec gs-2">
                        <div className="grid g2">
                            <Link to="/"><h5>Home</h5></Link>
                            <Link to="/product"><h5>Product</h5></Link>
                            <Link to="/contact"><h5>Contact</h5></Link>
                            <Link to="/about"><h5>About</h5></Link>
                            <Link to="/help"><h5>Help</h5></Link>
                        </div>
                        <div className='grid'>
                            <Link to="/login"><p className='login'>Log in</p></Link>
                            <Link to="/signup"><p>Sign-up</p></Link>
                        </div>
                        <div className='atc' onClick={() => { props.openpopup() }}>
                            <img src={atc} />
                            <p className='add'>{props.addedtocardcount}</p>
                        </div>

                    </div>

                </div>
            </div> 
        </div>

    )
}