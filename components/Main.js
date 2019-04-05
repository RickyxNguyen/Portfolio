import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>I'm a Dallas-Fort Worth based Web Developer. Developer that specializes in React.js and is always looking to improve his skills because you can never really know everything.</p>
          <p><a href="//drive.google.com/file/d/1gTP-rt6dBTsKLQUAKtebnofxdeAnLGJq/view?usp=sharing" target='_blank' rel='noopener noreferrer'>Resume Download</a> </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <h1>noj</h1>
          <ul>
          <li>Styled using Reactstrap/Boostrap</li>
          <li>Authentication and User Information stormed and encrypted with Firebase</li>
          <li>Form Validation with Node.js</li>
          <li><a href="//github.com/RickyxNguyen/keyboardstack" target='_blank' rel='noopener noreferrer'>Github Repo</a> | <a href="//noj19.herokuapp.com" target='_blank' rel='noopener noreferrer'>Running App</a></li>
          </ul>
          <h1>Actual Cannibal Shia LaBeouf</h1>
          <ul>
          <li>CLI Based game utlizing JavaScript</li>
          <li>Player score saved with MySQL</li>
          <li><a href="//github.com/RickyxNguyen/ShiaTheGame" target='_blank' rel='noopener noreferrer'>Github Repo</a> | Running App (Not Available)</li>
          </ul>
          <h1>instafinder</h1>
          <ul>
          <li>Simple react router implementation</li>
          <li>Styled with Material UI components</li>
          <li>Future Plan: Adding sser authentication to allow certain people to view private accounts</li>
          <li><a href="//github.com/RickyxNguyen/instafinder" target='_blank' rel='noopener noreferrer'>Github Repo</a> | <a href="//instafinder.herokuapp.com" target='_blank' rel='noopener noreferrer'>Running App</a></li>
          </ul>
          {close}
        </article>

        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <h1>Media Tools</h1>
          <ul>
          <li>Photoshop</li>
          <li>Lightroom</li>
          <li>Davinci Resolve</li>
          <li>Blackmagic Fusion</li>
          </ul>
          <h1>Developer Tools</h1>
          <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>jQuery</li>
          <li>REST APIs/MySQL/Mongo/Firebase</li>
          <li>Git</li>
          <li>Python</li>
          <li>TypeScript</li>
          </ul>
          <h1>Frameworks/Libraries</h1>
          <ul>
          <li>React</li>
          <li>Angular</li>
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="//twitter.com/rickyxnguyen" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="//facebook.com/rickyxnguyen" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="//instagram.com/rickyxnguyen" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="//github.com/RickyxNguyen" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main