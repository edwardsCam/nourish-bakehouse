import React from 'react'
import { Router } from 'preact-router'
import LogoPanel from 'components/logoPanel'
import Nav from 'components/nav'
import AboutScreen from 'screens/about'
import MainScreen from 'screens/main'
import ProductsScreen from 'screens/products'
import LocationsScreen from 'screens/locations'
import ProductStore from 'stores/product'
import { PRODUCTS_PATH, ABOUT_PATH, LOCATIONS_PATH } from './constants'
import styles from './App.scss'

export default class App extends React.Component {
  componentDidMount() {
    ProductStore.subscribe(this.onStoreUpdate)

    ProductStore.fetchAll()
  }

  componentWillUnmount() {
    ProductStore.unsubscribe(this.onStoreUpdate)
  }

  render() {
    return (
      <div className={styles.container}>
        <LogoPanel />
        <Nav />

        <Router>
          <MainScreen default path='/' />
          <ProductsScreen products={ProductStore.getAll()} path={PRODUCTS_PATH} />
          <AboutScreen path={ABOUT_PATH} />
          <LocationsScreen path={LOCATIONS_PATH} />
        </Router>
      </div>
    )
  }

  renderProductsScreen = () => (
    <ProductsScreen
      products={ProductStore.getAll()}
    />
  )

  onStoreUpdate = () => this.forceUpdate()
}
