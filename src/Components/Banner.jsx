import banner from "../assets/img/banner.png";
import "../assets/css/banner.css";

function Search() {
  return (
    <div className={`contain`}>
      <img src={banner} alt="" className={`banner`} />
      <div className="text">
        <h1>About FIREGUARD</h1>
        <div className="mb-10">
          <p className="font-medium text-red-700 text-xl fw-500">
            Chào mừng bạn đến với FIREGUARD -
          </p>
          <p className="font-medium text-red-700 text-xl fw-500 pb-5">
            Giải pháp hàng đầu về an toàn cháy nổ cho tàu thủy!
          </p>
          <p className="text-lg">
            Chúng tôi tự hào giới thiệu FIREGUARD - một ứng dụng đột phá giúp
            tăng cường an toàn trên các tàu thủy.
          </p>
          <p className="text-lg">
            Với FIREGUARD, chúng tôi đưa quyền kiểm soát trực tiếp vào tay của
            bạn, đảm bảo rằng bạn sẽ luôn sẵn sàng đối phó với mọi tình huống
            cháy nổ.
          </p>
          <p className="font-medium text-red-700 text-xl fw-500">
            Tự tin hơn với kiểm soát tối đa
          </p>
          <p className="font-medium text-red-700 text-xl fw-500">
            Công nghệ đỉnh cao - An toàn tuyệt đối
          </p>
          <p className="font-medium text-lg">
            Hãy bảo vệ hành trình của bạn với FIREGUARD. Chúng tôi cam kết mang
            đến sự an toàn tối đa cho mỗi chuyến hải trình của bạn.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
