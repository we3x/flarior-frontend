var React = require('react');
var Menu = require('./Menu.jsx');
var Title = require('./Title.jsx');
var Week = require('./Week.jsx');
var Navigation = require('./Navigation.jsx');

var Calendar = React.createClass({
  render: function() {
    return (
      <div className="calendar">
        <Menu/>
        <Navigation/>
        <Title/>
        <Week/>
      </div>
    );
  }
});

module.exports = Calendar;
