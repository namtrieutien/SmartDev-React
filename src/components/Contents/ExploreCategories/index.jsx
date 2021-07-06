import React from "react";

const CategoryButton = ({ title, src }) => {
  const photo = require(`../../../images/${src}`).default;
  return (
    <td className="col-md-2">
      <button className="btn shadow-none btn-block">
        <img className="img-responsive" width={40} height={40} src={photo} alt="" />
        <br /><p className="font-weight-light" style={{fontSize: '1.05vw'}}>{title}</p>
      </button>
    </td>
  )
}
function ExploreCategories(props) {
  return (
    <div className="container my-5 ">
      <div className="explore-categories">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="section-heading">
                <h2>Explore Categories</h2>
              </div>
            </div>
          </div>
            <table className="table table-responsive w-100 d-block d-md-table table-borderless">
              <tbody>
                <tr>
                  <CategoryButton title='Điện thoại - Máy tính bảng' src='smartphone.png' />
                  <CategoryButton title='Điện gia dụng' src='washing-machine.png' />
                  <CategoryButton title='Thời trang - Phụ kiện' src='fashion.png' />
                  <CategoryButton title='Sách, VPP, Quà tặng' src='book.png' />
                  <CategoryButton title='Trang trí nội thất' src='furnitures.png' />
                  <CategoryButton title='Làm vườn và cây cảnh' src='magnolia.png' />
                </tr>
                <tr>
                  <CategoryButton title='Chăm sóc Mẹ và Bé' src='mother.png' />
                  <CategoryButton title='Vật nuôi trong nhà' src='pet.png' />
                  <CategoryButton title='Bất động sản' src='home.png' />
                  <CategoryButton title='Ô tô - Xe máy' src='car.png' />
                  <CategoryButton title='Thực phẩm' src='restaurant.png' />
                  <CategoryButton title='Tất cả các mục' src='shapes.png' />
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default ExploreCategories;
