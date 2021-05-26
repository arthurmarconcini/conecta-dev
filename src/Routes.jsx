import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Index'
import SignIn from './pages/SignIn/Index'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'        
    },
    title: {
        margin: 0,
        padding: 0
    }
});

export default props => {
    const styles = useStyles()
    return(
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/sign-in">
               <SignIn></SignIn>
            </Route>
            <Route path="/*">
                <div className={styles.root}>
                    <h1 className={styles.title}>404</h1>
                    <h6 className={styles.title}>Page not found!</h6>
                </div>
            </Route>
        </Switch>
    )
}

