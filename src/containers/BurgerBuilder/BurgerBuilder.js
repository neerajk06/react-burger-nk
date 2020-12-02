import React, {Component} from 'react';
import Auxe from '../../hoc/Auxe';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    render (){
        return(
            <Auxe>
                <Burger ></Burger>
                <div>Build Controls</div>
            </Auxe>
        );
    }
}

export default BurgerBuilder;