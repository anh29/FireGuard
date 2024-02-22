import "../assets/css/contact.css";

function Contact() {
  return (
    <>
      <div className="ccontainer">
        <span className="cbig-circle"></span>
        <img src="img/shape.png" className="csquare" alt="" />
        <div className="cform">
          <div className="ccontact-info">
            <h3 className="ctitle">Liên lạc với chúng tôi:</h3>
            <p className="ctext">
              Hãy bảo vệ hành trình của bạn với FIREGUARD. Chúng tôi cam kết
              mang đến sự an toàn tối đa cho mỗi chuyến hải trình của bạn.
            </p>

            <div className="cinfo">
              <div className="cinformation">
                <img src="img/location.png" className="cicon" alt="" />
                <p>
                  54, Nguyễn Lương Bằng, P. Hòa Khánh Bắc, Q. Liên Chiểu, Tp. Đà
                  Nẵng
                </p>
              </div>
              <div className="cinformation">
                <img src="img/email.png" className="cicon" alt="" />
                <p>anhhna17710110@gmail.com</p>
              </div>
              <div className="cinformation">
                <img src="img/phone.png" className="cicon" alt="" />
                <p>0935481854</p>
              </div>
            </div>

            <div className="csocial-media">
              <p>Connect with us :</p>
              <div className="csocial-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="ccontact-form">
            <span className="ccircle one"></span>
            <span className="ccircle two"></span>

            <form action="index.html">
              <h3 className="ctitle">Contact us</h3>
              <div className="cinput-container">
                <input
                  type="text"
                  name="name"
                  className="cinput"
                  placeholder="Username"
                />
              </div>
              <div className="cinput-container">
                <input
                  type="email"
                  name="email"
                  className="cinput"
                  placeholder="Email"
                />
              </div>
              <div className="cinput-container">
                <input
                  type="tel"
                  name="phone"
                  className="cinput"
                  placeholder="Phone"
                />
              </div>
              <div className="cinput-container textarea">
                <textarea
                  name="message"
                  className="cinput"
                  placeholder="Message"
                ></textarea>
              </div>
              <input type="submit" value="Send" className="cbtn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
