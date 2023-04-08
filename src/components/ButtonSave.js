import React from "react";
import './ButtonSave.css';
export default class ButtonSave extends React.Component{

    render(props){
        return(
            <button className="button-save" type="submit" onClick={this.props.showDatas}>Salvar</button>
        )
    }
}