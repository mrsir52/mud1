import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import holder1 from './img/holder1.jpg'
import holder2 from './img/holder2.jpg'
import holder3 from './img/holder3.jpg'
import holder4 from './img/holder4.jpg'
import intro1 from './img/intro.jpg'
import intro2 from './img/intro2.jpg'
import intro3 from './img/intro3.jpg'
import Motors from './Motors'

import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Button,
    CardBody,
    CardText,
    Carousel,
    CarouselInner,
    CarouselItem,
    CarouselCaption,
    CarouselControl,
    Footer
} from 'mdbreact'

class App extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
            activeItem: 1,
            maxLength: 3
        };
    }

    next() {
        const nextItem = this.state.activeItem + 1;
        if (nextItem > this.state.maxLength) {
            this.setState({activeItem: 1});
        } else {
            this.setState({activeItem: nextItem});
        }
    }

    prev() {
        const prevItem = this.state.activeItem - 1;
        if (prevItem < 1) {
            this.setState({activeItem: this.state.maxLength});
        } else {
            this.setState({activeItem: prevItem});
        }
    }

    goToIndex(item) {
        if (this.state.activeItem !== item) {
            this.setState({
                activeItem: item
            });
        }
    }

    render() {
        return (
            <div>
            <div className="Nav">
                {/*<Navbar color="black" className="navbar-ht align-content-center mx-auto">*/}
                    <div className="col-lg-3 text-left align-middle">
                        <NavbarBrand tag="span" className="ml-4">
                            <img src="http://gatortraxboats.com/wp-content/uploads/2016/11/mudbuddy.png"
                                 alt="Mudbuddy Logo" className="logo"/>
                        </NavbarBrand>
                    </div>
                <div className="d-inline-flex text-align-center mb-2">

                    <h5 className="m-2">Home</h5>
                    <h5 className="m-2">Dealers</h5>
                    <h5 className="m-2">Motors</h5>
                    <h5 className="m-2">Support/Parts</h5>
                    <h5 className="m-2">Contact</h5>

                </div>
            </div>
                {/*</Navbar>*/}
                <section>

                    <Carousel
                        activeItem={this.state.activeItem}
                        next={this.next}
                        className="z-depth-1">
                        <CarouselInner>
                            <CarouselItem itemId="1">

                                <div className="view hm-black-light">

                                    <img className="d-block w-100" src={intro1} alt="First slide"/>

                                </div>

                            </CarouselItem>
                            <CarouselItem itemId="2">
                                <div className="view hm-black-strong">
                                    <img className="d-block w-100" src={intro2} alt="First slide"/>

                                </div>

                            </CarouselItem>
                        </CarouselInner>
                        <CarouselItem itemId="3">
                            <div className="view hm-black-light">
                                <img className="d-block w-100" src={intro3} alt="First slide"/>
                            </div>

                        </CarouselItem>
                        <CarouselControl direction="prev" role="button" onClick={() => {
                            this.prev();
                        }}/>
                        <CarouselControl direction="next" role="button" onClick={() => {
                            this.next();
                        }}/>
                    </Carousel>
                </section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-12 mb-4">
                            <CardBody className="mb-3">
                                <img src={holder1} alt="HD HDR Reverse"/>
                            </CardBody>
                            <CardText className="text-justify">
                                HD - Traditional Belt Drive with neutral and forward gears.
                                HDR - Hyper Drive Reverse. Featuring the original belt drive that revolutionized
                                backwater travel - now with electric shift reverse.

                                - FIve great models - 25, 37 EFI, 40 EFI & models 4400 EFI and 4400 Mikuni.
                                - Electric clutch with forward, neutral and reverse.
                                - Stainless drive tube and skeg
                                - Raptor 3-blade performance propeller.

                            </CardText>
                        </div>
                        <div className="col-lg-3 col-md-12 ">
                            <CardBody className="align-items-center">
                                <img src={holder2} alt="Sport V"/>
                            </CardBody>
                            <CardText className="text-justify">
                                The only balanced vertical mud motor that handles like an outboard.

                                - Three great models - 35, 37EFI and 4400 EFI Black Death. 40 EFI coming soon.
                                - Handle shift forward, neutral and reverse.
                                - Aluminum and stainless 27" outdrive.
                                - Mercury built tilt and trim with easy access end handle controls.
                                - Big Blade and Raptor 3-blade high performance propeller.
                            </CardText>
                        </div>
                        <div className="col-lg-3 col-md-12 ">
                            <CardBody>
                                <img src={holder3} alt="Mini Sport"/>
                            </CardBody>
                            <CardText className="text-justify">
                                Small and affordable belt drive power.

                                - Two great models - 23 and 25 EFI
                                - Simple and reliable.
                                - Small boat performance at an affordable price.
                                - Electric clutch with neutral.
                                - Aluminum and stainless 27" outdrive.
                                - Manual trim with Quick Trim.
                                - Mercury high performance propeller.
                            </CardText>
                        </div>
                        <div className="col-lg-3 col-md-12 ">
                            <CardBody className="mb-2">
                                <img src={holder4} alt="Longtail"/>
                            </CardBody>
                            <CardText className="text-justify">
                                Traditional longtails and the new Mud Buddy Super Longtail with belt drive reduction
                                power and speed.

                                - Five great models 23, 25EFI, 35, 37EFI and 4400 EFI Black Death
                                - Uniframe design with patented bearing and seal system.
                                - Tiger propellers.
                                - See the NEW belt drive Super Longtail - the most powerful longtail ever built.
                            </CardText>
                        </div>

                    </div>


                </div>
                <Footer color="elegant-color">
                    Contact information

                    Mud Buddy| 7956 S. 1530 W.| West Jordan, Utah 84088
                    (801) 352-8011
                    email: Clinth@mudbuddy.com
                    Request Information
                </Footer>

            </div>
        );
    }
}

export default App;
