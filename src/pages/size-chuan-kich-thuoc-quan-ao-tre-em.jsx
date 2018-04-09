import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {
  Container
} from '../components/mystyle'
import config from '../../data/SiteConfig';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Size chuẩn kích thước quần áo trẻ em | ${config.siteTitle}`} />
        <Container>
          <div className="single-post-container">
            <h1 className="single-post-title">Bảng thông số size quần áo trẻ em</h1>
            <div className="post-content">
              <h2>Thông số đo quần áo trẻ em từ 0-5 tuổi</h2>
              <p>
              Ở lứa tuổi này, trên áo quần trẻ em thường ghi các ký hiệu là độ tuổi của bé thay vì ghi ký hiệu chữ cái la mã như size áo quần người lớn. Ví dụ:
              </p>
              <ul>
                <li>Trẻ từ 0 – 3 tháng tuổi: 0 – 3 M (month)</li>
                <li>Trẻ từ 3 – 6 tháng tuổi: 3 – 6 M</li>
                <li>Trẻ 2 tuổi: 2T</li>
              </ul>
              <p>
              Cũng trong giai đoạn này, áo quần cho trẻ phải rộng, form, thoải mái do trẻ đang hình thành những phản xạ vận động đầu tiên của cuộc đời. Vì vậy, tiêu chuẩn hình thành size áo ngoại trừ độ tuổi còn được định theo chiều cao, cân nặng của bé ở thời điểm đó. Áo quần trẻ em ở tuổi này thướng bán nguyên bộ, do đó bàng thông số dưới đây đúng với cả bộ áo lẫn quần cho trẻ. Tuy nhiên vẫn có áo, quần bán lẻ tuỳ mục đích sử dụng của loại trang phục đó.
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Tuổi</th>
                    <th>Chiều cao (cm)</th>
                    <th>Trọng lượng (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Preemie</td>
                    <td>Sơ sinh</td>
                    <td>đến 51</td>
                    <td>đến 2.7 kg</td>
                  </tr>
                  <tr>
                    <td>0 - 3M</td>
                    <td>1 - 3 tháng</td>
                    <td>52 -58.5</td>
                    <td>3 - 5.5</td>
                  </tr>
                  <tr>
                    <td>3 - 6M</td>
                    <td>3 - 6 tháng</td>
                    <td>59.5 - 66</td>
                    <td>5.5 - 7.5</td>
                  </tr>
                  <tr>
                    <td>6 - 9M</td>
                    <td>6 - 9 tháng</td>
                    <td>67 - 70</td>
                    <td>7.5 - 8.5</td>
                  </tr>
                  <tr>
                    <td>12 month</td>
                    <td>12 tháng</td>
                    <td>71 - 75</td>
                    <td>8.5 - 10</td>
                  </tr>
                  <tr>
                    <td>18 month</td>
                    <td>18 tháng</td>
                    <td>76 - 80</td>
                    <td>10 - 12</td>
                  </tr>
                  <tr>
                    <td>24 month</td>
                    <td>24 tháng</td>
                    <td>81 - 85</td>
                    <td>12 - 13.5</td>
                  </tr>
                  <tr>
                    <td>2T</td>
                    <td>2</td>
                    <td>82 - 85</td>
                    <td>13 - 13.5</td>
                  </tr>
                  <tr>
                    <td>3T</td>
                    <td>3</td>
                    <td>86 - 95</td>
                    <td>13.5 - 15.5</td>
                  </tr>
                  <tr>
                    <td>4T</td>
                    <td>4</td>
                    <td>96.5 - 105.5</td>
                    <td>15.5 - 17.5</td>
                  </tr>
                  <tr>
                    <td>5T</td>
                    <td>5</td>
                    <td>106.5 - 113</td>
                    <td>17.5 - 19</td>
                  </tr>
                </tbody>
              </table>
              <small>Chọn size áo cho bé thử 0 – 5 tháng tuổi</small>
              <h2>Thông số đo quần áo trẻ em từ 5 tuổi trở lên</h2>
              <p>
              Ở độ tuổi này, bé đã hình những phản xạ vận động chuẩn, do đó áo quần không chỉ yêu cầu phải thoải mái mà còn cần đúng form, chuẩn dáng để mang lại hiệu quả thẩm mỹ, giúp các bé xinh xắn, lịch sự hơn. Do đó tiêu chuẩn để hình thành các bảng thông số size áo quần dựa trên các số đo của cơ thể: chiều cao, cân nặng, chiều dài ngực, chu vi vòng eo và vòng mông.
              </p>
              <p>
                Dưới đây là bảng thông số size áo quần nam, nữ dành cho bé trên 5 tuổi.
              </p>
              <small>Bảng thông số size áo quần cho bé  gái trên 5 tuổi</small>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <p><strong>Tuổi</strong></p>
                    </td>
                    <td >
                      <p><strong>Chiều cao(cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Ngực(cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Dài tay(cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Eo(cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Dài ống (đùi đến mắt cá) (cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Size</strong></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>5-6</p>
                    </td>
                    <td>
                      <p>107 - 114</p>
                    </td>
                    <td>
                      <p>61</p>
                    </td>
                    <td>
                      <p>52</p>
                    </td>
                    <td>
                      <p>56</p>
                    </td>
                    <td>
                      <p>53</p>
                    </td>
                    <td>
                      <p>XS (= 5T)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>6 - 7</p>
                    </td>
                    <td>
                      <p>114 - 124</p>
                    </td>
                    <td>
                      <p>64</p>
                    </td>
                    <td>
                      <p>55</p>
                    </td>
                    <td>
                      <p>57</p>
                    </td>
                    <td>
                      <p>57</p>
                    </td>
                    <td>
                      <p>S (6)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>7 - 8</p>
                    </td>
                    <td>
                      <p>124 - 135</p>
                    </td>
                    <td>
                      <p>66</p>
                    </td>
                    <td>
                      <p>59</p>
                    </td>
                    <td>
                      <p>58</p>
                    </td>
                    <td>
                      <p>62</p>
                    </td>
                    <td>
                      <p>S (7)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>8 - 9</p>
                    </td>
                    <td>
                      <p>135 - 140</p>
                    </td>
                    <td>
                      <p>69</p>
                    </td>
                    <td>
                      <p>62</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                    <td>
                      <p>66</p>
                    </td>
                    <td>
                      <p>M (8)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>9 - 10</p>
                    </td>
                    <td>
                      <p>140 - 145</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                    <td>
                      <p>66</p>
                    </td>
                    <td>
                      <p>62</p>
                    </td>
                    <td>
                      <p>70</p>
                    </td>
                    <td>
                      <p>L (10)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>10 - 11</p>
                    </td>
                    <td>
                      <p>145 - 152</p>
                    </td>
                    <td>
                      <p>76</p>
                    </td>
                    <td>
                      <p>69</p>
                    </td>
                    <td>
                      <p>64</p>
                    </td>
                    <td>
                      <p>74</p>
                    </td>
                    <td>
                      <p>L (12)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>11 - 12</p>
                    </td>
                    <td>
                      <p>152 - 157</p>
                    </td>
                    <td>
                      <p>81</p>
                    </td>
                    <td>
                      <p>73</p>
                    </td>
                    <td>
                      <p>66</p>
                    </td>
                    <td>
                      <p>77</p>
                    </td>
                    <td>
                      <p>XL (14)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>12 - 13</p>
                    </td>
                    <td>
                      <p>157 - 163</p>
                    </td>
                    <td>
                      <p>86</p>
                    </td>
                    <td>
                      <p>76</p>
                    </td>
                    <td>
                      <p>69</p>
                    </td>
                    <td>
                      <p>81</p>
                    </td>
                    <td>
                      <p>XXL (16)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            
              <small>
              Bảng thông số size áo quần cho bé trai trên 5 tuổi
              </small>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <p><strong>Tuổi</strong></p>
                    </td>
                    <td>
                      <p><strong>Chiều cao(cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Ngực(cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Dài tay(cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Eo (cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Dài ống (đùi đến mắt cá)(cm)</strong></p>
                    </td>
                    <td>
                      <p><strong>Size</strong></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>5-6</p>
                    </td>
                    <td>
                      <p>107 - 114</p>
                    </td>
                    <td>
                      <p>57</p>
                    </td>
                    <td>
                      <p>52</p>
                    </td>
                    <td>
                      <p>57</p>
                    </td>
                    <td>
                      <p>50</p>
                    </td>
                    <td>
                      <p>XS (= 5T)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>6 - 7</p>
                    </td>
                    <td>
                      <p>114 - 122</p>
                    </td>
                    <td>
                      <p>58</p>
                    </td>
                    <td>
                      <p>55</p>
                    </td>
                    <td>
                      <p>58</p>
                    </td>
                    <td>
                      <p>53</p>
                    </td>
                    <td>
                      <p>S (6)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>7 - 8</p>
                    </td>
                    <td>
                      <p>122 - 130</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                    <td>
                      <p>59</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                    <td>
                      <p>57</p>
                    </td>
                    <td>
                      <p>S (7)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>8 - 9</p>
                    </td>
                    <td>
                      <p>130 - 137</p>
                    </td>
                    <td>
                      <p>61</p>
                    </td>
                    <td>
                      <p>62</p>
                    </td>
                    <td>
                      <p>61</p>
                    </td>
                    <td>
                      <p>61</p>
                    </td>
                    <td>
                      <p>M (8)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>10 - 11</p>
                    </td>
                    <td>
                      <p>137 - 145</p>
                    </td>
                    <td>
                      <p>64</p>
                    </td>
                    <td>
                      <p>66</p>
                    </td>
                    <td>
                      <p>64</p>
                    </td>
                    <td>
                      <p>65</p>
                    </td>
                    <td>
                      <p>L (10)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>11 - 12</p>
                    </td>
                    <td>
                      <p>145 - 152</p>
                    </td>
                    <td>
                      <p>66</p>
                    </td>
                    <td>
                      <p>70</p>
                    </td>
                    <td>
                      <p>66</p>
                    </td>
                    <td>
                      <p>69</p>
                    </td>
                    <td>
                      <p>L (12)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>12 - 13</p>
                    </td>
                    <td>
                      <p>152 - 157</p>
                    </td>
                    <td>
                      <p>69</p>
                    </td>
                    <td>
                      <p>74</p>
                    </td>
                    <td>
                      <p>69</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                    <td>
                      <p>XL (14)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>13 - 14</p>
                    </td>
                    <td>
                      <p>157 - 165</p>
                    </td>
                    <td>
                      <p>71</p>
                    </td>
                    <td>
                      <p>77</p>
                    </td>
                    <td>
                      <p>71</p>
                    </td>
                    <td>
                      <p>76</p>
                    </td>
                    <td>
                      <p>XL (16)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>14 - 15</p>
                    </td>
                    <td>
                      <p>165 - 170</p>
                    </td>
                    <td>
                      <p>74</p>
                    </td>
                    <td>
                      <p>80</p>
                    </td>
                    <td>
                      <p>74</p>
                    </td>
                    <td>
                      <p>79</p>
                    </td>
                    <td>
                      <p>XXL (18)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default AboutPage;
