import React from "react";
import PropTypes from "prop-types";
import "./assets/css/style.css"

newUI.propTypes = {};

function newUI(props) {
  return (
    <div>
      {/* <!-- font-awesome  --> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        referrerpolicy="no-referrer"
      />
      {/* <!-- boostrap 5 --> */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
      ></link>
      <nav class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand organic" href="#">
            Chợ tốt
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Trending
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Store
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Chat
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Notification
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="px-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <!-- <section class="main">
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-lg-7 pt-5 text-center">
          <h1 class="pt-5">Natural Has Always Cared For Us!</h1>
          <button class="btn1 mt-3">Find more</button>
        </div>
      </div>
    </div>
  </section> --> */}
      <div
        id="carouselExampleCaptions"
        class="carousel slide main"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./assets/images/slide_01.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>First slide label</h1>
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </h6>
              <button class="btn-banner mt-3">Find more</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/slide_02.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Second slide label</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, ut?
              </h6>
              <button class="btn-banner mt-3">Find more</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/slide_03.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Third slide label</h1>
              <h6>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Fugiat, id!
              </h6>
              <button class="btn-banner mt-3">Find more</button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!-- ========================== --> */}

      <section class="new">
        <div class="container py-5">
          <div class="row pt-5">
            <div class="col-lg-7 m-auto">
              <div class="row text-center">
                <div class="col-lg-4">
                  <i class="fas fa-car fa-4x" aria-hidden="true"></i>
                  <h6>CAR</h6>
                </div>
                <div class="col-lg-4">
                  <i class="fas fa-paw fa-4x" aria-hidden="true"></i>
                  <h6>PET</h6>
                </div>
                <div class="col-lg-4">
                  <i class="fas fa-home fa-4x" aria-hidden="true"></i>
                  <h6>HOUSE</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ==================== --> */}

      <section class="product">
        <div class="container py-5">
          <div class="row py-5">
            <div class="col-lg-5 m-auto text-center">
              <h1>What's Trending</h1>
              <h6 style="color: red;">Be Healthing Organic Food</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_04.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_01.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_02.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_03.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 text-center m-auto">
              <button class="btn1">Click For More</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ============================== --> */}
      <div class="about">
        <div class="container py-5">
          <div class="row py-5">
            <div class="col-lg-8 m-auto text-center">
              <h1>Welcom To Our Organic Food Sociaty</h1>
              <h6 style="color: red">Be Healthy Origanic Food</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <img
                src="./assets/images/feature-image.jpg"
                class="img-fluid mb-3"
                alt=""
              />
              <h5>Best Quality Product</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                molestias debitis distinctio sequi, inventore iusto quis odit
                architecto adipisci! Ad.
              </p>
            </div>
            <div class="col-lg-4">
              <img
                src="./assets/images/feature-image.jpg"
                class="img-fluid mb-3"
                alt=""
              />
              <h5>Best Quality Product</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                voluptas fuga voluptatibus voluptate unde vel! Iusto, obcaecati
                repellendus? Quasi, possimus.
              </p>
            </div>
            <div class="col-lg-4">
              <img
                src="./assets/images/feature-image.jpg"
                class="img-fluid mb-3"
                alt=""
              />
              <h5>Best Quality Product</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat nemo incidunt laudantium ab debitis harum totam tempora
                alias quasi nobis.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 text-center m-auto">
              <button class="btn1">Click For More</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ==================================== --> */}
      <div class="shop">
        <div class="container py-5">
          <div class="row py-5">
            <div class="col-lg-8 m-auto text-center">
              <h1>Explore Our Store</h1>
              <h6 style="color: red;">Pick up your product</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_04.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_01.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_02.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_03.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_04.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_01.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_02.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
            <div class="col-lg-3 text-center">
              <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                  <img
                    src="./assets/images/product_03.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <h6>Energy Food</h6>
              <p>$39.99</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 text-center m-auto">
              <button class="btn1">Click For More</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- =============== --> */}
      <section class="apple py-5">
        <div class="container text-white py-5">
          <div class="row py-5">
            <div class="col-lg-6">
              <h1 class="font-weight-bold py-3">
                Unlock Your Potential With Good Nutrion
              </h1>
              <h6>Be Healthy Organic Food</h6>
              <button class="btn1 mt-3">More from use</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================== --> */}
      <section class="contact">
        <div class="container py-5">
          <div class="row py-5">
            <div class="col-lg-5 m-auto text-center">
              <h1>Contact us</h1>
              <h6 style="color: red">Alway Be In Touch With Us</h6>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-lg-9 m-auto">
              <div class="row">
                <div class="col-lg-4">
                  <h6>LOCATION</h6>
                  <p>Tang 11, Vinh Trung Plaza, Danang</p>

                  <h6>PHONE</h6>
                  <p>0898213745</p>

                  <h6>EMAIL</h6>
                  <p>chokhongtot@gmail.com</p>
                </div>
                <div class="col-lg-7">
                  <div class="row">
                    <div class="col-lg-6">
                      <input
                        type="text"
                        class="form-control bg-light"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        class="form-control bg-light"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 py-3">
                      <textarea
                        class="form-control bg-light"
                        placeholder="Send Message"
                        name=""
                        id=""
                        cols="10"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 text-center m-auto">
                  <button class="btn1">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <section class="footer py-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-9 m-auto text-center">
              <h1>Join Our Society</h1>
              <form action="submit" class="d-flex justify-content-center py-3">
                <input
                  class="px-3"
                  type="text"
                  placeholder="Enter your Email"
                />
                <button class="btn2">Submit</button>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-11 m-auto  ">
              <div class="row">
                <div class="col-lg-3 py-5">
                  <h5>CUSTOMER CARE</h5>
                  <p>Regular</p>
                  <p>On time</p>
                  <p>Always Care</p>
                </div>
                <div class="col-lg-3 py-5">
                  <h5>CUSTOMER CARE</h5>
                  <p>Regular</p>
                  <p>On time</p>
                  <p>Always Care</p>
                </div>
                <div class="col-lg-3 py-5">
                  <h5>CUSTOMER CARE</h5>
                  <p>Regular</p>
                  <p>On time</p>
                  <p>Always Care</p>
                </div>
                <div class="col-lg-3 py-5">
                  <h5 class="pb-3">CUSTOMER CARE</h5>
                  <span>
                    <i class="fab fa-facebook fa-2x"></i>
                  </span>
                  <span>
                    <i class="fab fa-instagram fa-2x"></i>
                  </span>
                  <span>
                    <i class="fab fa-twitter fa-2x"></i>
                  </span>
                  <span>
                    <i class="fab fa-google-plus fa-2x"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p class="text-center">Copy right @2021 All rights reserved</p>
        </div>
      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default newUI;
