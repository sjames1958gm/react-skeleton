var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id": 1, "text":"ham"},
  {"id": 2, "text":"cheese"},
  {"id": 3, "text":"bread"}, ];

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(i) {
      return <ListItem key={i.id} ingredient={i.text}/>
    });
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
});

module.exports = List;
