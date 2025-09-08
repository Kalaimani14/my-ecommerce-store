import "../Style/footer.css"
import logo from "../img/Footer/logo-W.png";
// import {bell} from "./img/Footer/bell.png";

export default function Footer() {
  return (
    <div className="container pg22">
      <div className="max-w">
        <div className="grid grid-2 sec1">
          <div className="grid-sec x">
            <img src={logo} alt="Company Logo" />
            <p className="para p11">
              We understand that business can be chaotic. That’s where we come in. <br />
              We’re focused on adding some much-needed balance to the mix.
            </p>
            <h5 className="f20">Company Information</h5>
            <p className="para">Office: ****, *****, ******, ****</p>
            <p className="para p12">Send mail: kalaimani.lakshmanan14@gmail.com</p>
            <p className="para">Call us:+91 6380010292</p>

            <div className="grid1 g1">
              <p className="parax">Facebook</p>
              <p className="parax">Twitter / X</p>
              <p className="parax">Instagram</p>
              <p className="parax">Skype</p>
              <p className="parax">Telegram</p>
            </div>
          </div>

          <div className="grid-sec x sec2">
            <div className="grid grid-2">
              <div className="grid-sec1">
                <h5 className="f20">Our Services</h5>
                <p className="para">Online Business Consulting</p>
                <p className="para">Portfolio Management</p>
                <p className="para">Search Engine Optimization</p>
                <p className="para">Managed IT Services</p>
                <p className="para">Conversion Optimization</p>
              </div>
              <div className="grid-sec1">
                <h5 className="f20">Quick Links</h5>
                <p className="para">About Us</p>
                <p className="para">Leadership Member</p>
                <p className="para">Our Services</p>
                <p className="para">Careers</p>
                <p className="para">Case Studies</p>
              </div>
            </div>

            {/* Future Input Field
            <label>
              <input type="text" placeholder="Don't miss the latest news from us..." />
            </label>
            */}

            <div className="grid1 gd-p">
              {/* <img src={bell} alt="Notification Bell" /> */}
              <p className="para">
                Please sign up to follow the latest news and events from us, we promise not to
                spam your inbox.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="f">
        <div className="grid grid-2 f1">
          <div className="grid-sec">
            <p className="para">Copyright © 2025 Graviton by BravisThemes. All Rights Reserved.</p>
          </div>
          <div className="grid-sec gd-s">
            <p className="para">
              Confidentiality & Privacy | Legal Information | Return and Refund Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
