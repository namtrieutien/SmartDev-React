import React from "react";

const CategoryButton = ({ title, src }) => {
  const photo = require(`../../../images/${src}`).default;
  return (
    <td class="col-md-2">
      <button className="btn shadow-none btn-block">
        <img className="feather feather-globe mr-2 icon-inline" width="50" height="50" src={photo} alt="" />
        <br /><p className="font-weight-light">{title}</p>
</button>
    </td>
  )
}
function ExploreCategories(props) {
  return (
    <div className="container my-5 ">
    <div className="explore-categories mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="section-heading">
              <h2>Explore Categories</h2>
            </div>
          </div>
          <div className="col-md-2">
            {/* <!-- Controls --> */}
            <div className="controls pull-right hidden-xs">
              <a
                className="left btn btn-danger mr-2"
                href="/carousel-example"
                data-slide="prev"
              >
                <i className="fas fa-chevron-left"></i>
              </a>
              <a
                className="right btn btn-danger"
                href="#carousel-example"
                data-slide="next"
              >
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="container">

        <table class="table table-borderless">
          <tbody>
            <tr>
            <CategoryButton title='Điện thoại - Máy tính bảng' src='smartphone.png'/>
            <CategoryButton title='Điện gia dụng' src='washing-machine.png'/>
            <CategoryButton title='Thời trang - Phụ kiện'src='fashion.png' />
            <CategoryButton title='Sách, VPP, Quà tặng' src='book.png'/>
            <CategoryButton title='Trang trí nội thất' src='furnitures.png'/>
            <CategoryButton title='Làm vườn và cây cảnh' src='magnolia.png'/>
            </tr>
            <tr>
            <CategoryButton title='Chăm sóc Mẹ và Bé' src='mother.png'/>
            <CategoryButton title='Vật nuôi trong nhà' src='pet.png'/>
            <CategoryButton title='Bất động sản' src='home.png'/>
            <CategoryButton title='Ô tô - Xe máy' src='car.png'/>
            <CategoryButton title='Thực phẩm' src='restaurant.png'/>
            <CategoryButton title='Tất cả các mục' src='shapes.png'/>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ExploreCategories;
