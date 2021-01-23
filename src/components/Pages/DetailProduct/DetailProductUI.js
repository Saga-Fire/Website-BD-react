import React, { useContext, useState } from 'react'
import '../../../App.css';
import Modal from '../../Modal/Modal';
import { FirebaseContext } from '../../Firebase';
import { Link } from 'react-router-dom'

const DetailProduct = (props ) => {

    
    const firebase = useContext(FirebaseContext);
    const [image, setImage] = useState(null);
    
    let imageRef = firebase.storageRef().child(`/Images-BD/${props.series.find((e) => e.id === props.idSerie).nom.replace(/[.'!?:$"]/g, "")}-${props.numero}-${props.titre.replace(/[.'!?:$"]/g, "")}.jpg`);
    
    imageRef
    .getDownloadURL()
    .then((url) => {
    setImage(url);
    })
    .catch((error) => {
    console.log('Error getting document:', error);
    });

    return (
                <div className="container" key={props.id}>
                    <div className="row">
                    
                        <span className="line1 mt-5"></span>
                        <h2 className="fw-bold text-center  p-3 mt-2 ">{props.titre}</h2>
                        <span className="line1 mt-2 mb-4"></span>
                        <div className="back-to-home w-50 ms-2">
                            <Link to="/"><a className="btn back "><i className="fa fa-chevron-left me-4"></i>RETOUR A L'ACCUEIL</a></Link>
                        </div>
                        <div className="row product-content">
                            <div className="col-sm-6 p-4">
                                <div className="images-container">
                                    <div className="product-cover">
                                        <img src={image} style={{width: 350}} className="card-img-top" alt="bd"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6  product-info-container p-4">
                                <div className="product-information card-body bg-light ">
                                    <div className="product-price">
                                        <p className="fs-5 fw-bold mt-3">{props.prix} €</p>
                                    </div>
                                    <div className="product-actions">
                                        <form>
                                            <div className="product-add-cart">
                                                <div className="mt-5">
                                                    <span className="number-quantity">Il ne reste que <strong>{props.stock}</strong> exemplaires</span>
                                                </div>
                                            </div>
                                            <div className="add mt-5">
                                                <Modal titre={props.titre}
                                                prix={props.prix}
                                                id={props.id}
                                                image={image}/>
                                                
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 p-4">
                                <div className="product-description card-body ">
                                    <h2 className="fw-bold fs-4 mt-1">Description</h2>
                                    <span className="line1"></span>
                                    <div className="product-description-content mt-3">
                                        <p>  
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ex eu massa tempor bibendum. 
                                            Mauris feugiat sapien est, eu congue magna viverra bibendum. Praesent vitae orci nisl. Vivamus cursus ante nec diam luctus mattis. 
                                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque sem tellus, tristique vitae elementum a, tempus ac eros. Suspendisse tellus tellus, 
                                            fermentum sit amet molestie a, vulputate eu odio. Nullam bibendum, nibh et pretium faucibus, magna magna ornare nisl, 
                                            vitae malesuada sapien justo in justo. Sed vitae quam nisl. Integer vitae vehicula risus. Duis at pulvinar tortor. Donec augue odio, vestibulum nec tristique rhoncus, luctus eu tortor. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )   
}

export default DetailProduct