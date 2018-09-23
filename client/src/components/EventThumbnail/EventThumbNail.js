import React, { Component, selected } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';

const styles = {
  "menu-item": {
    padding: 0 40,
    margin: 5 10,
    user-select: none,
    cursor: pointer,
    border: none,
    background: blue,
  }
  "menu-item-wrapper.active": {
    border: 1 blue solid,
  }
  "menu-item.active": {
    border: 1 green solid
  }

  "scroll-menu-arrow": {
    padding: 20,
    cursor: pointer,
  }
}

const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];

const MenuItem = ({ text, selected }) => {
  return (
    <div className="menu-item">
      {text}
    </div>
  );
};

export const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});

const Arrow = ({ text, className }) => {
  return (
    <div className={className}> {text} </div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class EventThumbNail extends Component {
  state = {
    selected: 0
  };

  onSelect = key => {
    this.setState({ selected: key });
  }

	render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(list, selected);

		return (
      <ScrollMenu
      data={menu}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      selected={selected}
      onSelect={this.onSelect}
    />
		)
	}
}

export default EventThumbNail;
