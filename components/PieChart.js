'use strict';

import React from 'react';
import {
  Text,
  View,
  ART,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

const {
  Surface,
  Group,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import AnimShape from '../art/AnimShape';

const d3 = {
  scale,
  shape,
};



import {
  scaleBand,
  scaleLinear
} from 'd3-scale';


export default class PieChart extends React.Component {

  state = {};


  colors = [
    "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
    "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"
  ]

  constructor(props) {
    super(props);
    this.state = { highlightedIndex: 0 };
    this._createPieChart = this._createPieChart.bind(this);
    this._value = this._value.bind(this);
    this._label = this._label.bind(this);
    this._color = this._color.bind(this);
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
  }

  // methods used to tranform data into piechart:
  // TODO: Expose them as part of the interface
  _value(item) { return item.number; }

  _label(item) { return item.name; }

  _color(index) { return this.colors[index]; }

  _createPieChart(index) {

    var arcs = d3.shape.pie()
      .value(this._value)
      (this.props.data);

    var hightlightedArc = d3.shape.arc()
      .outerRadius(this.props.pieWidth / 2 + 10)
      .padAngle(.05)
      .innerRadius(30);

    var arc = d3.shape.arc()
      .outerRadius(this.props.pieWidth / 2)
      .padAngle(.05)
      .innerRadius(30);

    var arcData = arcs[index];
    var path = (this.state.highlightedIndex == index) ? hightlightedArc(arcData) : arc(arcData);

    return {
      path,
      color: this._color(index),
    };
  }

  _onPieItemSelected(index) {
    this.setState({ ...this.state, highlightedIndex: index });
    this.props.onItemSelected(index);
  }

  render() {
    const margin = styles.container.margin;
    const x = this.props.pieWidth;
    const y = this.props.pieHeight;

    return (
      <View width={this.props.width} height={this.props.height}>
        <Surface width={this.props.width} height={this.props.height}>
          <Group x={x} y={y}>
            {
              this.props.data.map((item, index) =>
                (<AnimShape
                  key={'pie_shape_' + index}
                  color={this._color(index)}
                  d={() => this._createPieChart(index)}
                />)
              )
            }
          </Group>
        </Surface>
        <View style={{ position: 'absolute', top: margin, left: 2 * margin + this.props.pieWidth }}>
          {
            this.props.data.map((item, index) => {
              var fontWeight = this.state.highlightedIndex == index ? 'bold' : 'normal';
              return (
                <TouchableWithoutFeedback key={index} onPress={() => this._onPieItemSelected(index)}>
                  <View>
                    <Text style={[styles.label, { color: this._color(index), fontWeight: fontWeight }]}>{this._label(item)}: {this._value(item)}%</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'normal',
  }
});
