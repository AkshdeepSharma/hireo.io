import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { object } from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home';
import HireMePage from './HireMePage';
import HireYouPage from './HireYouPage';
import NotFound from './NotFound';
import SnackBar from './SnackBarWrapper';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh'
  },
  header: {
    width: '100%'
  },
  footer: {
    marginTop: 'auto',
    padding: '10px'
  }
}));

const App = props => {
  const classes = useStyles(props);
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item className={classes.header}>
        <Header />
      </Grid>
      <Grid item className={classes.content}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/hireme" render={() => <HireMePage />} />
          <Route
            exact
            path="/:id"
            render={props => <HireYouPage id={props.match.params.id} />}
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </Grid>
      <div className={classes.footer}>
        <Grid item>
          <SnackBar />
          <Footer />
        </Grid>
      </div>
    </Grid>
  );
};

App.propTypes = {
  match: object
};

export default App;
