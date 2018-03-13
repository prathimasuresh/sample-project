import React, { Component } from 'react';

import ReactDOM from 'react-dom';

 

class Wrapper extends Component{

    render(){

        return(

            <div id="pageWrapper">

                <Cartheader />

                <CheckoutButton />

                <Productwrapper prodtitle = "Vue® 16-Count The Original Donut Shop Coffee People® Coffee for Keurig® Vue® Brewers" imageurl="https://s7d9.scene7.com/is/image/BedBathandBeyond/20390940160221p?$146$"/>

                <Productwrapper prodtitle = "D-Toys Chat Noir Vintage Poster Jigsaw Puzzle" imageurl="https://s7d9.scene7.com/is/image/BedBathandBeyond/136951662723312p?$146$"/>

                <Productwrapper prodtitle = "Calphalon® Classic™ Nonstick 12-Piece Cookware Set" imageurl="https://s7d9.scene7.com/is/image/BedBathandBeyond/142465145500527p?$146$"/>

             

            </div>

        );

    }

}

class Cartheader extends Component{

    render(){

        return(

            <div id="cartHeader">

                <h1>Your Cart</h1>

            </div>

        );

    }

}

 

class CheckoutButton extends Component{

    render(){

        return(

            <div id="topCheckoutButton">

                <input className = "topCheckout" type="button" value="checkout"></input>

            </div>

        );

    }

}

 

class Productwrapper extends Component{

    render(){

        return(

            <div className="prodItemWrapper">

                <div className="cartItemDetails">

                    <a href="#">

                        <img src={this.props.imageurl} title="productTitle"></img>

                    </a>

                    <div className="productDesc">

                        <p>{this.props.prodtitle}</p>

                    </div>

                </div>

                <div className = "cartQuantityDetails">

                    <input type="text"  id="productQty"></input>

                    <a href="#">UPDATE</a><br /><br />

                    <a href="#">Remove</a><br />

                    <a href="#">Save For Later</a>

                </div>

            </div>   

        );

    }

}

export default Wrapper;


