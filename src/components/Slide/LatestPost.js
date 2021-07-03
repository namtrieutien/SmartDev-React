import React from "react";
import './latestPost.css'
import AddToCart from '../Cart/AddToCart';
function LatestPost(props) {
    return (
        <div className="container my-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="bbb_container">
                            <h2 className="bbb_title">Latest Posts Today</h2>
                            <div className="bbb_text mb-3">
                                <p>Buy now before they sold out</p>
                            </div>
                            {/*Controls*/}
                            <div className="controls-top">
                                <a className="left btn btn-danger mr-3" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left" /></a>
                                <a className="right btn btn-danger" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right" /></a>
                            </div>
                            {/*/.Controls*/}
                        </div>
                    </div>
                    <div id="multi-item-example" className="col-lg-9 carousel slide carousel-multi-item" data-ride="carousel">
                        {/*Slides*/}
                        <div className="carousel-inner " role="listbox">
                            {/*First slide*/}
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card mb-2">
                                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Bán cái gì đó thì ghi vào đây.Bán cái gì đó thì ghi vào đây.</p>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Bán cái gì đó thì ghi vào đây.Bán cái gì đó thì ghi vào đây.</p>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Bán cái gì đó thì ghi vào đây.Bán cái gì đó thì ghi vào đây.</p>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/.First slide*/}
                            {/*Second slide*/}
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card mb-2">
                                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Bán cái gì đó thì ghi vào đây.Bán cái gì đó thì ghi vào đây.</p>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Bán cái gì đó thì ghi vào đây.Bán cái gì đó thì ghi vào đây.</p>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Bán cái gì đó thì ghi vào đây.Bán cái gì đó thì ghi vào đây.</p>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/.Second slide*/}
                            {/*Third slide*/}
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card mb-2">
                                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Bán cái gì đó thì ghi vào đây.Bán cái gì đó thì ghi vào đây.</p>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Bán cái gì đó thì ghi vào đây.Bán cái gì đó thì ghi vào đây.</p>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Bán cái gì đó thì ghi vào đây.Bán cái gì đó thì ghi vào đây.</p>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/.Third slide*/}
                        </div>
                        {/*/.Slides*/}
                    </div>
                </div>
            </div>
        </div>

    );
}
export default LatestPost;
