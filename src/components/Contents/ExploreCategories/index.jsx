import React from "react";
import { Link } from "react-router-dom"
import { resetPage } from "../../../redux/actions/posts/search.action";

import { connect } from "react-redux";

function ExploreCategories(props) {

  const CategoryButton = ({ title, src ,id }) => {
    const photo = require(`../../../images/${src}`).default;
    return (
      <td className="col-md-2">
        <Link to={{ pathname: `/category/${id}`, state:  id  }} onClick={() => props.resetPage()}>
        <button className="btn shadow-none btn-block">
          <img className="img-responsive" width={40} height={40} src={photo} alt="" />
          <br /><p className="font-weight-light" style={{fontSize: '1.05vw'}}>{title}</p>
        </button>
        </Link>
      </td>
    )
  }

  return (
    <div className="container-fluid my-5 ">
      <div className="explore-categories">
        <div className="ml-3">
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
                  <CategoryButton title='Điện thoại - Máy tính bảng' src='smartphone.png' id={1} />
                  <CategoryButton title='Điện gia dụng' src='washing-machine.png'  id={2}/>
                  <CategoryButton title='Thời trang - Phụ kiện' src='fashion.png'  id={3}/>
                  <CategoryButton title='Sách, VPP, Quà tặng' src='book.png' id={4} />
                  <CategoryButton title='Trang trí nội thất' src='furnitures.png' id={0}/>
                  <CategoryButton title='Làm vườn và cây cảnh' src='magnolia.png' id={0}/>
                </tr>
                <tr>
                  <CategoryButton title='Chăm sóc Mẹ và Bé' src='mother.png' id={0}/>
                  <CategoryButton title='Vật nuôi trong nhà' src='pet.png' id={0}/>
                  <CategoryButton title='Bất động sản' src='home.png'id={0} />
                  <CategoryButton title='Ô tô - Xe máy' src='car.png' id={0}/>
                  <CategoryButton title='Thực phẩm' src='restaurant.png' id={0}/>
                  <CategoryButton title='Tất cả các mục' src='shapes.png' id={0}/>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    resetPage: () => {
      dispatch(resetPage());
    },
  };
};
export default connect(null, mapDispatchToProps)(ExploreCategories);
