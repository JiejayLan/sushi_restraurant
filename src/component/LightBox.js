import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBMask, MDBView } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./style/gridBox.css";

class LightBox extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            require("./sources/food1.jpg"),
            require("./sources/food1.jpg"),
            require("./sources/food3.jpg"),
            require("./sources/food1.jpg"),
            require("./sources/food5.jpg"),
            require("./sources/food6.jpg"),
            require("./sources/food12.jpg"),
            require("./sources/food3.jpg"),
            require("./sources/food11.jpg"),
            require("./sources/food10.jpg"),
            require("./sources/food11.jpg"),
            require("./sources/food12.jpg")
        ]
    }

    renderImages = () => {
        let photoIndex = -1;
        const { images } = this.state;

        return images.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <MDBCol md="3" key={photoIndex}>
                        <figure>
                            <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
                                this.setState({ photoIndex: privateKey, isOpen: true })
                            }
                            />
                        </figure>

                </MDBCol>
        );
        })
    }

    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
            <MDBContainer className="mt-5">
                <div className="mdb-lightbox no-margin">
                    <MDBRow>
                        {this.renderImages()}
                    </MDBRow>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </MDBContainer>
        );
    }
}


export default LightBox;