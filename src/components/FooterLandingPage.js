import React, {Component} from 'react'

export default class FooterLandingPage extends Component {
  render() {
    return (
        <footer class="app-footer">
            <div>
                <a href="https://coreui.io">Euphoria</a>
                <span>&copy; 2018 UCSC</span>
            </div>
            <div class="ml-auto">
                <span>Powered by </span>
                <a href="https://coreui.io">ReactJS</a>
            </div>
        </footer>
    )
  }
}
