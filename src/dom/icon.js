import Component from 'inferno-component';

export default class Icon extends Component {
    render() {
        return (<i className={`leaf-icon ${this.props.iconClass}`}></i>);
    }
}