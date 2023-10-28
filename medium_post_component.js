class Test extends React.Component {
    'use strict';
    let e = React.createElement

    class LikeButton extends React.Component {
      constructor(props) {
        super(props);
        this.state = { liked: false };
      }
    
    class LikeButton extends React.Component {
      constructor(props) {
        super(props)
        this.state = { liked: false }
      }
    
      render() {
        if (this.state.liked) {
          return 'You liked this.';
        }
    
        return e(
          'button',
          { onClick: () => this.setState({ liked: true }) },
          'Like'
        );
      }
    }
    let domContainer = document.querySelector('#medium_blog_container')
    ReactDOM.render(e(MediumPost), domContainer)
    root.render(e(LikeButton));
    
}