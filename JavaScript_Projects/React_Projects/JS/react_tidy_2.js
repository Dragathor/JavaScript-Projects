const X = React.createElement;
class likeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You clicked the like button!';
        }

        return X(
            'button',
            { onClick: () => this.setState({ liked: true}) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(X(likeButton), domContainer);