import React from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            text: "",
            bigText: "",
            agree: false
        };
        this.onBtnClickHandler = e => {
            e.preventDefault();
            const { name, text, bigText } = this.state;
            this.props.onAddNews( {
                id: +new Date(),
                author: name,
                text,
                bigText
            } );
        };
        this.handleChange = e => {
            const { id, value } = e.currentTarget;
            this.setState( { [id]: value } );
        };
        this.handleCheckboxChange = e => {
            this.setState( { agree: e.currentTarget.checked } );
        };
        this.validate = () => {
            const { name, text, agree } = this.state;
            if ( name.trim() && text.trim() && agree ) {
                return true;
            }
            return false;
        };
    }
    render () {
        const { name, text, bigText } = this.state;
        return (
            <form className="add">
                <input
                    id="name"
                    type="text"
                    onChange={this.handleChange}
                    className="add__author"
                    placeholder="Ваше имя"
                    value={name}
                />
                <textarea
                    id="text"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст новости"
                    value={text}
                />
                <textarea
                    id="bigText"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст новости подробно"
                    value={bigText}
                />
                <label className="add__checkrule">
                    <input type="checkbox" onChange={this.handleCheckboxChange} /> Я
                    согласен с правилами
          </label>
                <button
                    className="add__btn"
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}
                >
                    Показать alert
          </button>
            </form>
        );
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired
};

export default Add;