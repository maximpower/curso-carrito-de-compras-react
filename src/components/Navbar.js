import { Component } from 'react';
import Logo from './Logo';
import Carro from './Carro';

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        posistion: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)',
    }
}
class Navbar extends Component {
    render(){
        const {carro, mostrarCarro, carroVisible } = this.props;
        return(
            <nav style={styles.navbar}>
                <Logo />
                <Carro
                  carro={carro}
                  mostrarCarro={mostrarCarro}
                  carroVisible={carroVisible} />
            </nav>
        )
    }
}

export default Navbar;