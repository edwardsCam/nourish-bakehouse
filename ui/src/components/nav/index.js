import React from 'react'
import { Link } from 'preact-router/match'
import classnames from 'classnames'
import { PRODUCTS_PATH, ABOUT_PATH, LOCATIONS_PATH } from '../../constants'
import styles from './index.scss'

export default class Nav extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }))
  }

  render() {
    return (
      <nav className={classnames(styles.nav, !this.state.isMounted && styles.initial)}>
        <ul>
          {this.renderHomeLink()}
          {this.renderProductsLink()}
          {this.renderAboutLink()}
          {this.renderLocationsLink()}
        </ul>
      </nav>
    )
  }

  renderHomeLink = () => (
    <li
      className={classnames(
        styles.link,
        styles.homeLink,
        !this.state.isMounted && styles.initial
      )}
    >
      <Link href='/'>
        {'Home'}
      </Link>
    </li>
  )

  renderProductsLink = () => (
    <li
      className={classnames(
        styles.link,
        styles.productsLink,
        !this.state.isMounted && styles.initial
      )}
    >
      <Link href={PRODUCTS_PATH}>
        {'Products'}
      </Link>
    </li>
  )

  renderAboutLink = () => (
    <li
      className={classnames(
        styles.link,
        styles.aboutLink,
        !this.state.isMounted && styles.initial
      )}
    >
      <Link href={ABOUT_PATH}>
        {'About'}
      </Link>
    </li>
  )

  renderLocationsLink = () => (
    <li
      className={classnames(
        styles.link,
        styles.locationsLink,
        !this.state.isMounted && styles.initial
      )}
    >
      <Link href={LOCATIONS_PATH}>
        {'Locations'}
      </Link>
    </li>
  )
}
